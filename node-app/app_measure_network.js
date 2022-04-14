const streams = require("@iota/streams/node");
const fs = require("fs");
const crypto = require("crypto");
const axios = require("axios");
var csvWriter = require("csv-write-stream");

const { calculateTimeBetween } = require("./helpers");
streams.set_panic_hook();

const auth_host = "http://54.177.214.21";
const iota_port = "14265";
counter = 1;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

main_iota()
  .then(() => {
    // main_node_http().then(() => {
    console.log("Done example");
    // });
  })
  .catch((err) => {
    console.log(err);
  });

async function main_iota() {
  local_pow = false;
  let auth_node = `${auth_host}:${iota_port}`;

  // Create Author
  const auth_client = await new streams.ClientBuilder().node(auth_node).build();
  console.log(auth_client.get_info());
  data = [];

  file_headers = [
    "time",
    "node",
    "url",
    "network_id",
    "messages_per_second",
    "is_healthy",
  ];
  new_data = {
    time: time,
    node: info.nodeinfo.name,
    url: info.url,
    network_id: info.nodeinfo.networkId,
    messages_per_second: info.nodeinfo.messagesPerSecond,
    is_healthy: info.nodeinfo.isHealthy,
  };
  data.push(new_data);

  write_to_csv("iota_network_data", file_headers, data);
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
