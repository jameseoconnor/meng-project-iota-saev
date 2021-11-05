const axios = require('axios').default;
const { ClientBuilder } = require('@iota/client');

// client will connect to testnet by default
const client = new ClientBuilder()
                    .node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")
                    .build();

// client.getInfo().then(console.log).catch(console.error);


baseurl = "http://localhost:8000"

key = '123456'

topic = "charging-stations/wexford/"


async function getValidation() {
    listenTopic = 'messages/indexation/' + topic + "/res"
    client.subscriber().topics([listenTopic]).subscribe((err, data) => {
        // console.log("err:", err);
        console.log("data:", data);
        let messageId = client.getMessageId(data.payload)
        console.log('messageId:', messageId);

        client.getMessage().data(messageId).then(messagePayload => {
            let messageData = messagePayload.message.payload.data;

            let messageDecodedData = Buffer.from(messageData, "hex").toString("utf8")
            console.log(messageDecodedData)
            if (messageDecodedData == 'Accept') {
                console.log("A car has accepted your request");
            }
        })
    })

    // await new Promise(resolve => setTimeout(resolve, 1500));
    // // unsubscribe from 'messages' topic, will continue to receive events for 'milestones/confirmed'
    // client.subscriber().topics(['messages']).unsubscribe((err, data) => {
    //     console.log(data);
    // })
}

getValidation()


