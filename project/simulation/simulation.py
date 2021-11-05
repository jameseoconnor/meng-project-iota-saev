import time as time   
import toml
import json
import helpers


# GET CONFIG AND ENERGY DATA
with open("config.toml") as config:
    config_data = toml.load(config)
    simulation = config_data["simulation"]
    charge_point = config_data["charge_point"]
    vehicle = config_data["vehicle"]


with open("./data/energy_data.toml") as energy_data:    
    energy_data = toml.load(energy_data)
    energy_generation_wm2 = energy_data[simulation["energy_source"]][simulation["month"]]


# MAIN SIMULATION
def run_simulation():

    time.sleep(simulation["delay_period_s"])

    # Initialise Charge Point and Vehicle (Battery) Data (from config.toml)
    storage_capacity = charge_point["current_storage_capacity_kwh"]
    size_of_area_m2 = charge_point["area_of_solar_panel"] * charge_point["num_solar_panels"]
    max_charger_output_kwh = charge_point["max_charge_power_kw"]
    battery_size_kwh = vehicle["battery_size_kwh"]
    battery_space_left = battery_size_kwh - vehicle["current_battery_level_kwh"]

    # Initialise Charge Point Data
    total_energy_generated = 0

    for hour, energy in enumerate(energy_generation_wm2):
        energy_kwh = helpers.convert_wm2_to_kwh(energy, size_of_area_m2, 1)
        
        # Add to the total pool of energy generated
        total_energy_generated += energy_kwh
        print(f"{energy_kwh:,.2f} KWH generated during hour {hour}")

        # If we have space in the car battery 
        if battery_space_left > energy_kwh and energy_kwh >= max_charger_output_kwh:

            # Add some to the car battery
            battery_space_left -= max_charger_output_kwh

            # Add the rest to the charge point storage capacity
            storage_capacity+=energy_kwh-max_charger_output_kwh
            print(f"Energy added to car: {max_charger_output_kwh:,.2f} KWH")

            # If the energy generated less than what our charger can handle 
        if battery_space_left > energy_kwh and energy_kwh < max_charger_output_kwh:

            # Add it all to the car battery
            battery_space_left -= energy_kwh
            print(f"Energy added to car: {energy_kwh:,.2f} KWH")
        
        else:
            storage_capacity += energy_kwh - battery_space_left
            battery_space_left = 0

        battery_level = battery_size_kwh - battery_space_left
        battery_level_percent = battery_level/battery_size_kwh

        charge_point_storage_percent = storage_capacity / charge_point["storage_capacity_kwh"]
        print(f"Battery level: {battery_level:,.2f} KWH ({battery_level_percent*100:.2f}%)")
        print(f"Charge Point Storage: {storage_capacity:,.2f} KWH ({charge_point_storage_percent*100:,.2f}%)\n")


# ENTRY POINT
if __name__ == "__main__":

    run_simulation()