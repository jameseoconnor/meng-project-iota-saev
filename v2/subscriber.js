// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const streams = require("@iota/streams/node");
const {
  createSeed,
  to_bytes,
  getExplorerUrl,
  calculateTimeBetween,
} = require("./helpers");

const { readFileSync, writeFileSync, appendFileSync } = require("fs");

streams.set_panic_hook();

// Node settings
let node = "https://chrysalis-nodes.iota.org/";
let options = new streams.SendOptions(node, 9, true, 1);

async function createSubscriber() {
  console.log("\x1b[36m%s\x1b[0m", "Subscriber: Create subscriber");

  // Create subscriber with new seed
  let subscriberSeed = createSeed();

  let subscriber = new streams.Subscriber(subscriberSeed, options.clone());
  writeFileSync("./offTangleComs/sub_seed.txt", subscriberSeed.toString());

  console.log("Subscriber seed: ", subscriberSeed);

  return subscriber.clone();
}

async function subscribeChannel(subscriber) {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "Subscriber: Receive announcement and subscribe to channel"
  );

  // Receive announcement
  let announcementLinkString = readFileSync(
    "./offTangleComs/1_announcement.txt",
    "utf8"
  );
  let announcementLink = streams.Address.parse(announcementLinkString);
  await subscriber.clone().receive_announcement(announcementLink.copy());

  // Send subscription
  let response = await subscriber.clone().send_subscribe(announcementLink);
  let subscriptionLink = response.link;
  console.log("Subscription link: ", subscriptionLink.toString());

  //Fetch message details
  let subscriptionMessageDetails = await subscriber
    .clone()
    .get_client()
    .get_link_details(subscriptionLink.copy());
  console.log(
    "\x1b[34m%s\x1b[0m",
    getExplorerUrl(
      "mainnet",
      subscriptionMessageDetails.get_metadata().message_id
    )
  );

  // Write subscription link to off-Tangle link exchange
  writeFileSync(
    "./offTangleComs/2_subscription.txt",
    subscriptionLink.toString()
  );
}

async function syncChannel(subscriber) {
  console.log("\x1b[36m%s\x1b[0m", "Subscriber: Synchronize channel state");

  // Syncronize channel state
  console.log("Syncing state...");
  timeBeforeSync = Date.now();
  await subscriber.clone().sync_state();
  timeAfterSync = Date.now();

  timeToSync = calculateTimeBetween("Sync time", timeBeforeSync, timeAfterSync);
  return timeToSync;
}

async function sendTaggedPacket(subscriber) {
  console.log("\x1b[36m%s\x1b[0m", "Subscriber: Send tagged packet");

  // Define content
  currTime = Date.now();
  let publicPayload = to_bytes(`${currTime}`);
  let maskedPayload = to_bytes("This is masked payload");

  // Read announcement message
  let keyloadLinkString = readFileSync("./offTangleComs/3_keyload.txt", "utf8");
  let keyloadLink = streams.Address.parse(keyloadLinkString);

  // Send tagged packet
  response = await subscriber
    .clone()
    .send_tagged_packet(keyloadLink, publicPayload, maskedPayload);
  let taggedPacketLink = response.link;
  console.log("Tagged packet link: ", taggedPacketLink.toString());

  //Fetch message details
  let taggedPacketMessageDetails = await subscriber
    .clone()
    .get_client()
    .get_link_details(taggedPacketLink.copy());
  console.log(
    "\x1b[34m%s\x1b[0m",
    getExplorerUrl(
      "mainnet",
      taggedPacketMessageDetails.get_metadata().message_id
    )
  );

  // Write last message link to off-Tangle link exchange
  writeFileSync("./offTangleComs/4_lastLink.txt", taggedPacketLink.toString());
}

exports.createSubscriber = createSubscriber;
exports.subscribeChannel = subscribeChannel;
exports.syncChannel = syncChannel;
exports.sendTaggedPacket = sendTaggedPacket;
