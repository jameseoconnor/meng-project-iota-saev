const streams = require("@iota/streams/node");
const fs = require("fs");

const { calculateTimeBetween } = require("./helpers");
streams.set_panic_hook();

main()
  .then(() => {
    console.log("Done example");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  // Default is a load balancer, if you have your own node it's recommended to use that instead
  let node = "http://54.177.214.21:14265/";
  let options = new streams.SendOptions(node, true);

  const client = await new streams.ClientBuilder().node(node).build();
  let seed = make_seed(81);
  let auth = streams.Author.fromClient(
    streams.StreamsClient.fromClient(client),
    seed,
    streams.ChannelType.SingleBranch
  );

  console.log("channel address: ", auth.channel_address());
  console.log("multi branching: ", auth.is_multi_branching());
  console.log("IOTA client info:", await client.getInfo());

  let response = await auth.clone().send_announce();
  let ann_link = response.link;
  console.log("announced at: ", ann_link.toString());
  console.log("Announce message index: " + ann_link.toMsgIndexHex());

  let details = await auth.clone().get_client().get_link_details(ann_link);
  console.log("Announce message id: " + details.get_metadata().message_id);

  let seed2 = make_seed(81);
  let sub = new streams.Subscriber(seed2, options.clone());
  await sub.clone().receive_announcement(ann_link.copy());
  let author_pk = sub.author_public_key();
  console.log(
    "Channel registered by subscriber, author's public key: ",
    author_pk
  );

  // copy state for comparison after reset later
  let start_state = sub.fetch_state();

  console.log("Subscribing...");
  response = await sub.clone().send_subscribe(ann_link.copy());
  let sub_link = response.link;
  console.log("Subscription message at: ", sub_link.toString());
  console.log("Subscription message index: " + sub_link.toMsgIndexHex());
  await auth.clone().receive_subscribe(sub_link.copy());
  console.log("Subscription processed");

  console.log("Sending Keyload");
  response = await auth.clone().send_keyload_for_everyone(ann_link.copy());
  let keyload_link = response.link;
  console.log("Keyload message at: ", keyload_link.toString());
  console.log("Keyload message index: " + keyload_link.toMsgIndexHex());

  // THe stuff we want to happen more than once

  for (let index = 0; index < 10; index++) {
    console.log("IOTA client info:", await client.getInfo());

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
    let public_payload = to_bytes(`${currTime}`);
    let masked_payload = to_bytes("james456");

    console.log("Subscriber Sending tagged packet");

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
    newData = {
      datetime: Date(),
      node: node,
      timeToSync: timeToSync,
      timeToReceiveMessage: timeToReceiveMessage,
    };

    const data = fs.readFileSync("db/data.json");
    var json = JSON.parse(data);
    json.push(JSON.stringify(newData));

    try {
      fs.writeFileSync("db/data.json", JSON.stringify(json, null, 2), "utf8");
      console.log("Data successfully saved to disk");
    } catch (error) {
      console.log("An error has occurred ", error);
    }
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
}
