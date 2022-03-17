import { MqttClient } from "@iota/mqtt.js";

const mqttClient = new MqttClient(MQTT_ENDPOINT);

const topic = "charging-stations/wexford/"

mqttClient.messages((topic, data, raw) => console.log(topic, data))