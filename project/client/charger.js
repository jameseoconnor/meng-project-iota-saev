class ChargePoint {

    constructor(latitude, longitude) {
        if(latitude==undefined || longitude==undefined) {
            throw 'Please provide a lat and lon!';
        }
        this.chargers = []
        this.max_capacity = 0
        this.num_chargers = 0
        this.lat = latitude
        this.lon = longitude
    }
  
    addCharger(id, type, max_capacity, current_capacity) {
        this.chargers.push(
          { 
            "id": id,
            "type": type,
            "max_capacity": max_capacity,
            "current_capacity": current_capacity
          }
        )
      
        this.max_capacity+=max_capacity
        this.num_chargers+=1
        return "Charger added!"
    }
  
    getChargers() {
        return this.chargers
    }
  
    calculateAvailableEnergy() {
      var total_charge = 0
      for (var i in this.chargers) {
          total_charge += this.chargers[i]["current_capacity"];
      }
      return total_charge
    }
}

module.exports = {
    ChargePoint: ChargePoint
}