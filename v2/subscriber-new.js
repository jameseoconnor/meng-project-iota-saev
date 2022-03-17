// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const streams = require("@iota/streams/node");

const { readFileSync } = require("fs");

streams.set_panic_hook();

// Node settings
let node = "https://chrysalis-nodes.iota.org/";
let options = new streams.SendOptions(node, 9, true, 1);

function importSubscriber() {
  let subscriberSeed = readFileSync("./offTangleComs/sub_seed.txt", "utf8");
  let subscriber = new streams.Subscriber(subscriberSeed, options.clone());
  console.log("Subscriber seed: ", subscriberSeed);
  console.log(subscriber);
  return subscriber.clone();
}

exports.importSubscriber = importSubscriber;
