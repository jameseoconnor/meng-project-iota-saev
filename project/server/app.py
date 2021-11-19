# from dotenv import load_dotenv
import json
import iota_client
import itertools, sys
import subprocess
import re


# Create the client using the IOTA client libs for Python 
client = iota_client.Client(nodes_name_password=[['api.lb-0.testnet.chrysalis2.com']])

# Set the topic for wexford charging stations 
#################
### TO DO ######
################
# Add dynamic finding using the vehicles location 

topic = "charging-stations/wexford/"


pushTopic = 'messages/indexation/' + topic

# If the car drops to this level, then we are looking for a charge
battery_threshold = 40



# This only works on Mac (we are checking the battery level of the Mac PC) 
def check_battery_level():
    battery_level_command = ['pmset', '-g', 'batt']
    battery_level_string = subprocess.run(battery_level_command, capture_output=True)
    battery_level_re = re.search(r"\d{1,2}%", str(battery_level_string))
    battery_level = battery_level_re.group(0)[0:2:1]
    print("Battery Level: " + battery_level)
    return battery_level


# Add dynamic finding here
def get_current_location():
    location = "wexford"
    return location


# Each response 
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


# Process Charge Point Data
def process_data(data):
    print("Data received from car")
    payload_str = json.loads(data)["payload"]

    message_id = client.get_message_id(payload_str)
    print("message_id:", message_id)
    message = client.get_message_data(message_id)

    message_bytes = message["payload"]["indexation"][0]["data"]
    message_data = bytes(message_bytes).decode("utf-8")
    print("message_data:", message_data)

    # We only accept if the battery level is low enough (force this if laptop is pluggged in)
    battery_level = check_battery_level()
    if int(battery_level) < battery_threshold:
        print(f"Battery level ({battery_level}) below threshold ({battery_threshold}). Charge Required!")
        return send_result("Accept")


# Receive MQTT msg
def __main__():

    # The client here is the IOTA client connected to the testnet network
    # The push topic is a combo off the indexation endpoint combined with the user defined index 
    # The subscribe_topic function is an asynchronous function that awaits the response via the callback function provided 
    # 

    client.subscribe_topic(pushTopic, process_data)
    __spinner__()

__spinner__()
