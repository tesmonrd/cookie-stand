var hours= ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var totalPike = 0;
var totalSea = 0;
var totalSouth = 0;
var totalBell = 0;
var totalAlki = 0;
var display = [];



var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avePerCust: 5.2,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  }
};

for(var i = 0; i < hours.length; i++) {
  var totalThisHourPike = pikePlace.hourlyTot();
  totalPike += totalThisHourPike;
  display.push(hours[i] + ":" + " " + totalThisHourPike);
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("pikeList").appendChild(item);
};
document.getElementById("pikeTotal").innerHTML = totalPike;





var seaTac = {
  minCustHr: 6,
  maxCustHr: 44,
  avePerCust: 1.2,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  var totalThisHourSea = seaTac.hourlyTot();
  totalSea += totalThisHourSea;
  display.push(hours[i] + ":" + " " + totalThisHourSea);
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("seaList"). appendChild(item);
};
document.getElementById("seaTotal").innerHTML = totalSea;







var southCenter = {
  minCustHr: 11,
  maxCustHr: 38,
  avePerCust: 1.9,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  var totalThisHourSouth = southCenter.hourlyTot();
  totalSouth += totalThisHourSouth;
  display.push(hours[i] + ":" + " " + totalThisHourSouth);
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("southCenterList"). appendChild(item);
};
document.getElementById("southCenterTotal").innerHTML = totalSouth;





var bellevue = {
  minCustHr: 20,
  maxCustHr: 48,
  avePerCust: 3.3,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  var totalThisHourBell = bellevue.hourlyTot();
  totalBell += totalThisHourBell;
  display.push(hours[i] + ":" + " " + totalThisHourBell);
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("bellevueList"). appendChild(item);
};
document.getElementById("bellevueTotal").innerHTML = totalBell;





var alki = {
  minCustHr: 3,
  maxCustHr: 24,
  avePerCust: 2.6,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  var totalThisHourAlki = alki.hourlyTot();
  totalAlki += totalThisHourAlki;
  display.push(hours[i] + ":" + " " + totalThisHourAlki);
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("alkiList"). appendChild(item);
};
document.getElementById("alkiTotal").innerHTML = totalAlki;
