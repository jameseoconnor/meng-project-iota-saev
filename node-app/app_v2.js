const streams = require("@iota/streams/node");
const fs = require("fs");
const crypto = require("crypto");
const axios = require("axios");
var csvWriter = require("csv-write-stream");

const { calculateTimeBetween } = require("./helpers");
streams.set_panic_hook();

const auth_host = "http://54.177.214.21";
const sub_host = "http://87.245.91.216";
const iota_port = "14265";
const node_port = "3000";

main_iota()
  .then(() => {
    main_node_http().then(() => {
      console.log("Done example");
    });
  })
  .catch((err) => {
    console.log(err);
  });

async function main_iota() {
  local_pow = false;
  let auth_node = `${auth_host}:${iota_port}`;
  let sub_node = `${sub_host}:${iota_port}`;
  let same_auth_sub = auth_node === sub_node ? true : false;
  let sub_options = new streams.SendOptions(sub_node, local_pow);

  // Create Author
  const auth_client = await new streams.ClientBuilder().node(auth_node).build();
  let seed = make_seed(81);
  let auth = streams.Author.fromClient(
    streams.StreamsClient.fromClient(auth_client),
    seed,
    streams.ChannelType.SingleBranch
  );

  console.log("channel address: ", auth.channel_address());
  console.log("multi branching: ", auth.is_multi_branching());
  console.log("IOTA auth client info:", await auth_client.getInfo());

  // Announce Channel
  let response = await auth.clone().send_announce();
  let ann_link = response.link;
  console.log("announced at: ", ann_link.toString());
  console.log("Announce message index: " + ann_link.toMsgIndexHex());
  let details = await auth.clone().get_client().get_link_details(ann_link);
  console.log("Announce message id: " + details.get_metadata().message_id);

  // Create SUbscriber
  let seed2 = make_seed(81);
  let sub = new streams.Subscriber(seed2, sub_options.clone());
  console.log("Sub client: " + sub.get_client());

  // Subscriber Recieves Announcement Link from Author
  await sub.clone().receive_announcement(ann_link.copy());
  let author_pk = sub.author_public_key();
  console.log(
    "Channel registered by subscriber, author's public key: ",
    author_pk
  );

  // Subscriber subscribes to channel
  console.log("Subscribing...");
  response = await sub.clone().send_subscribe(ann_link.copy());
  let sub_link = response.link;
  console.log("Subscription message at: ", sub_link.toString());
  console.log("Subscription message index: " + sub_link.toMsgIndexHex());

  // Author Receives Subscription
  await auth.clone().receive_subscribe(sub_link.copy());
  console.log("Subscription processed");

  // Author sends keyload (the root message)
  console.log("Sending Keyload");
  response = await auth.clone().send_keyload_for_everyone(ann_link.copy());
  let keyload_link = response.link;
  console.log("Keyload message at: ", keyload_link.toString());
  console.log("Keyload message index: " + keyload_link.toMsgIndexHex());

  // THe stuff we want to happen more than once

  data = [];
  file_headers = [
    "datetime",
    "auth_node",
    "sub_node",
    "same_auth_sub",
    "local_pow",
    "timeToSync",
    "timeToReceiveMessage",
    "packet_size_bytes",
  ];

  for (let index = 1; index < 20; index++) {
    console.log("IOTA client info:", await auth_client.getInfo());

    console.log(`\nStarting run ${index}..`);
    console.log("\nSubscriber syncing...");

    timeBeforeSync = Date.now();
    await sub.clone().sync_state();
    timeAfterSync = Date.now();

    timeToSync = calculateTimeBetween(
      "Sync time",
      timeBeforeSync,
      timeAfterSync
    );

    currTime = Date.now();

    // Generate the payload
    let packet_size_pow = Math.ceil(index / 10);
    let packet_size_bytes = 1 * 2 ** packet_size_pow;
    let rand_data = await crypto.randomBytes(packet_size_bytes);

    let public_payload = to_bytes(`${currTime}`);
    let masked_payload = rand_data;

    console.log(
      `Subscriber Sending tagged packet. Size ${packet_size_bytes} bytes`
    );

    response = await sub
      .clone()
      .send_tagged_packet(response.link, public_payload, masked_payload);

    console.log("Tag packet at: ", response.link.toString());
    console.log("Tag packet index: " + response.link.toMsgIndexHex());

    console.log("\nAuthor fetching next messages");
    for (const msg of await auth.clone().fetch_next_msgs()) {
      console.log("Found a message...");
      console.log(
        "Public: ",
        from_bytes(msg.message.get_public_payload()),
        "\tMasked: ",
        from_bytes(msg.message.get_masked_payload())
      );

      // Get time taken
      currTime = Date.now();

      timeToReceiveMessage = calculateTimeBetween(
        "Time taken for author to receive message",
        from_bytes(msg.message.get_public_payload()),
        currTime
      );
    }

    // Step 9: Log Results
    new_data = {
      datetime: Date.now(),
      auth_node: auth_node,
      sub_node: sub_node,
      same_auth_sub: same_auth_sub,
      local_pow: local_pow,
      timeToSync: timeToSync,
      timeToReceiveMessage: timeToReceiveMessage,
      packet_size_bytes: packet_size_bytes,
    };
    data.push(new_data);
  }
  write_to_csv("iota_data", file_headers, data);
}

async function main_node_http() {
  data = [];
  file_headers = ["datetime", "timeToReceiveMessage", "packet_size_bytes"];

  for (let index = 1; index < 50; index++) {
    let packet_size_pow = Math.ceil(index / 10);
    let packet_size_bytes = 1000 * 2 ** packet_size_pow;
    let rand_data = await crypto.randomBytes(packet_size_bytes);

    timeToReceiveMessage = await send_data_node(rand_data);
    console.log(`Time to Receive: ${timeToReceiveMessage}`);

    // Step 9: Log Results
    if (timeToReceiveMessage != null) {
      console.log("Made it here ");
      new_data = {
        datetime: Date.now(),
        timeToReceiveMessage: timeToReceiveMessage,
        packet_size_bytes: packet_size_bytes,
      };
      data.push(new_data);
    }
  }
  write_to_csv("node_data", file_headers, data);
  console.log("Finished Node");
}

async function send_data_node(data) {
  timestamp = Date.now();
  return_data = "";
  //
  await axios
    .post(`${host}:${node_port}/post/${timestamp}`, {
      data: data,
    })
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res.data);
      return_data = res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return return_data;
}

function to_bytes(str) {
  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}

function from_bytes(bytes) {
  var str = "";
  for (var i = 0; i < bytes.length; ++i) {
    str += String.fromCharCode(bytes[i]);
  }
  return str;
}

function make_seed(size) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let seed = "";
  for (i = 9; i < size; i++) {
    seed += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return seed;
}

function write_to_db(file_name, new_data) {
  file_path = `db/db_${file_name}.json`;
  let existing_data = fs.readFileSync(file_path);
  var json = JSON.parse(existing_data);
  json.push(JSON.stringify(new_data));

  try {
    fs.writeFileSync(file_path, JSON.stringify(json, null, 2), "utf8");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
}

function write_to_csv(file_name, file_headers, data) {
  file_name = `${file_name}.csv`;

  if (!fs.existsSync(file_name)) writer = csvWriter({ headers: file_headers });
  else writer = csvWriter({ sendHeaders: false });

  writer.pipe(fs.createWriteStream(file_name, { flags: "a" }));
  for (const line of data) {
    writer.write(line);
  }
  writer.end();
}
