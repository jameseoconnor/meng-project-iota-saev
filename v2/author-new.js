// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const streams = require("@iota/streams/node");
const { ClientBuilder } = require("@iota/client");
const {
  createSeed,
  from_bytes,
  getExplorerUrl,
  calculateTimeBetween,
} = require("./helpers");
const { readFileSync, writeFileSync, write } = require("fs");

streams.set_panic_hook();

// Node settings
let node = "https://chrysalis-nodes.iota.org/";
let options = new streams.SendOptions(node, 9, true, 1);

function importAuthor() {
  let authString = readFileSync("./offTangleComs/author_seed.txt", "utf8");

  let author = new streams.Author(authString, options.clone(), true);
  console.log(author.channel_address());
  console.log(author);
  return author.clone();
}

exports.importAuthor = importAuthor;
