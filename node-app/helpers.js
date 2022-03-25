// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const crypto = require("crypto");

function createSeed() {
  const seed = crypto
    .createHash("sha256")
    .update(crypto.randomBytes(256))
    .digest("hex");

  return seed;
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

function getExplorerUrl(network, messageId) {
  return `https://explorer.iota.org/${network}/message/${messageId}`;
}

function calculateTimeBetween(tag, timeBefore, timeAfter) {
  timeBefore = parseInt(timeBefore);
  timeAfter = parseInt(timeAfter);

  console.log("time before: " + timeBefore);
  console.log(typeof timeBefore);

  console.log("time after: " + timeAfter);
  console.log(typeof timeAfter);

  timeBetween = timeAfter - timeBefore;
  console.log(`${tag}: ${timeBetween}`);
  return timeBetween;
}

exports.createSeed = createSeed;
exports.to_bytes = to_bytes;
exports.from_bytes = from_bytes;
exports.getExplorerUrl = getExplorerUrl;
exports.calculateTimeBetween = calculateTimeBetween;
