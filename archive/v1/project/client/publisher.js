const axios = require('axios').default;
const { ClientBuilder } = require('@iota/client');

// client will connect to testnet by default
const client = new ClientBuilder()
                    .node("https://api.lb-1.h.chrysalis-devnet.iota.cafe/")
                    .localPow(true)
                    .build();

key = '123456'

topic = "ticket/door/1"

async function verifyDoorMQTT() {
    const message = await client.message()
        .index(topic)
        .data(key)
        .submit();

    console.log("message:", message);
}

verifyDoorMQTT()