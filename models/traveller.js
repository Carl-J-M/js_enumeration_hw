const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
      return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
      return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
      return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
      return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

   return this.journeys.reduce((total ,journey) => {
      return total + journey.distance;
   }, 0);
};


Traveller.prototype.getUniqueModesOfTransport = function () {
    let uniqueEntries = this.journeys.filter((item, pos) => {
        return this.journeys.indexOf(item)== pos;
      });
    return uniqueEntries.forEach((journey) => {
        return uniqueEntries.transport;
      });
// fak didnt complete

};



module.exports = Traveller;
