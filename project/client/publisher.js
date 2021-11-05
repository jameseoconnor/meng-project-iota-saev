const { ClientBuilder } = require('@iota/client');
let ChargePoint = require('./charger');


// client will connect to testnet by default
const client = new ClientBuilder()
                    .node("https://api.hornet-0.testnet.chrysalis2.com")
                    .localPow(true)
                    .build();

// Initialise Variables 
const energyCost = 0.13
const threshold = 0.5
const topic = "charging-stations/wexford/"


// Helpers
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}


function getAvailableChargers(chgPoint){
    
    availableChargers = []

    for(let i in chgPoint.chargers) {
        current_capacity = chgPoint.chargers[i]["current_capacity"]

        if(current_capacity > threshold) {
            console.log("Charger Found!")
            availableChargers.push(chgPoint.chargers[i])
            return availableChargers
        }
        else {
            console.log("No chargers available")
            return []
        }
    }
}


async function notifyEnergyCapacityMQTT(batteryCapacity, lat, lon, price, chargerType) {

    const message_data = JSON.stringify({
        "Battery Capacity": batteryCapacity,
        "Latitude": lat,
        "Longitude": lon,
        "Energy Price": price,
        "Charger Type": chargerType
    });

    const message = await client.message()
        .index(topic)
        .data(message_data)
        .submit();

    console.log("message:", message);
}


async function init() { 

    // Initialise the charger
    var chgPoint = new ChargePoint.ChargePoint(52.3369, 6.4633)
    chgPoint.addCharger(2, 2, 20, 0.7)
    chgPoint.addCharger(2, 2, 20, 0.5)

    // Loop controller
    i = 0

    while (i < 5) {

        // One Second Delay
        await sleep(1000);
    
        // get available chargers
        availableChargers = getAvailableChargers(chgPoint)

        for (const charger of availableChargers) {            
            notifyEnergyCapacityMQTT(
                charger['current_capacity'], 
                chgPoint.lat, 
                chgPoint.lon, 
                energyCost, 
                charger['type']
                )
        }
        i+=1
        // If accepted, reduce the available capacity
    }
}

init()
