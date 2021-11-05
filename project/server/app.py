# from dotenv import load_dotenv
import json
import iota_client
import itertools, sys
import subprocess
import re

# client = iota_client.Client(nodes_name_password=[['https://api.lb-0.h.chrysalis-devnet.iota.cafe/']])
client = iota_client.Client(nodes_name_password=[['api.lb-0.testnet.chrysalis2.com']])
topic = "charging-stations/wexford/"


pushTopic = 'messages/indexation/' + topic
battery_threshold = 40


def check_battery_level():
    battery_level_command = ['pmset', '-g', 'batt']
    battery_level_string = subprocess.run(battery_level_command, capture_output=True)
    battery_level_re = re.search(r"\d{1,2}%", str(battery_level_string))
    battery_level = battery_level_re.group(0)[0:2:1]
    print("Battery Level: " + battery_level)
    return battery_level


def get_current_location():
    location = "wexford"
    return location


def send_result(result):
    result = str(result).encode("utf8")
    message = client.message(
        index=topic+'/res', data=result
    )
    print("message sent:", json.dumps(message, indent=4))


def __spinner__():
    spinner = itertools.cycle(['-', '/', '|', '\\'])
    while True:
        sys.stdout.write(next(spinner))
        sys.stdout.flush()
        sys.stdout.write('\b')


# Process Ticket Data
def process_data(data):
    print("data received")
    payload_str = json.loads(data)["payload"]
    # print("payload_str:", payload_str)
    message_id = client.get_message_id(payload_str)
    print("message_id:", message_id)
    message = client.get_message_data(message_id)

    message_bytes = message["payload"]["indexation"][0]["data"]
    message_data = bytes(message_bytes).decode("utf-8")
    print("message_data:", message_data)

    send_result("Accept")
    battery_level = check_battery_level()
    if int(battery_level) < battery_threshold:
        print(f"Battery level ({battery_level}) below threshold ({battery_threshold}). Charge Required!")
        return send_result("Accept")


# Receive MQTT msg
def __main__():
    client.subscribe_topic(pushTopic, process_data)
    __spinner__()

__spinner__()