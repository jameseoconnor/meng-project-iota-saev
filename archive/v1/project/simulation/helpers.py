
# Helper functions for simulation

def convert_wm2_to_kwh(energy, area, time_hours):
    energy_kw_m2 = energy/1000 
    energy_kw = energy_kw_m2*area
    energy_kwh = energy_kw * time_hours
    return energy_kwh
