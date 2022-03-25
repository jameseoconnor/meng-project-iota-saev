// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const author = require("./author");
const author_n = require("./author-new");

const subscriber = require("./subscriber");
const subscriber_n = require("./subscriber-new");

async function setup() {
  // Step 1: Create author with new seed
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Step 1");
  let authorInstance = await author.createAuthor();

  // Step 2: Send channel announcement
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Step 2");
  await author.announceChannel(authorInstance.clone());

  // Step 3: Create subscriber with new seed
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Step 3");
  let subscriberInstance = await subscriber.createSubscriber();

  // Step 4: Receive channel announcement and send subscription message
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Step 4");
  await subscriber.subscribeChannel(subscriberInstance.clone());

  // Step 5: Receive channel subscription
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Step 5");
  await author.receiveSubscription(authorInstance.clone());
}

async function createNewAuthInstance() {
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Creating New Instances");
  await author_n.importAuthor();
}

async function createNewSubInstance() {
  console.log("\n");
  console.log("\x1b[36m%s\x1b[0m", "Creating New Instances");
  await subscriber_n.importSubscriber();
}

if (process.argv[2] == "create-channel") {
  setup().then(() => createNewAuthInstance());
} else {
  async () => {
    const [auth, sub] = await Promise.all([
      createNewAuthInstance(),
      createNewSubInstance(),
    ]);

    return { auth, sub };
  };
}
