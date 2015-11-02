var hours= ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avePerCust: 5.2,
  calcRand: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  },
  hourlyTot: function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  },
  dailyTot: function() {
    return this.HourlyTot() * 6;
  },
};

var display = []
for(var i = 0; i < hours.length; i++) {
  display.push(hours[i] + " " + pikePlace.hourlyTot())
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("pikeList"). appendChild(item);
};




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
  dailyTot: function() {
    return this.calcHourlyTot() * 6;
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  display.push(hours[i] + " " + seaTac.hourlyTot())
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("seaList"). appendChild(item);
};

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
  dailyTot: function() {
    return this.calcHourlyTot() * 6;
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  display.push(hours[i] + " " + southCenter.hourlyTot())
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("southCenterList"). appendChild(item);
};



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
  dailyTot: function() {
    return this.calcHourlyTot() * 6;
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  display.push(hours[i] + " " + bellevue.hourlyTot())
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("bellevueList"). appendChild(item);
};

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
  dailyTot: function() {
    return this.calcHourlyTot() * 6;
  },
}

var display = []
for(var i = 0; i < hours.length; i++) {
  display.push(hours[i] + " " + alki.hourlyTot())
};

for(var i = 0; i < display.length; i++) {
  var item = document.createElement("LI");
  var hourDis = document.createTextNode(display[i]);
  item.appendChild(hourDis);
  document.getElementById("alkiList"). appendChild(item);
};
