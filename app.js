var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var locations = [];


function cookieStore(storeLocation, minCustHr, maxCustHr, avePerCust) {
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avePerCust = avePerCust;
  this.total = 0;
  this.display = [];
  locations.push(this);

  this.calcRand = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr +1)) + this.minCustHr;
  };

  this.hourlyTot = function() {
    return Math.ceil(this.calcRand() * this.avePerCust);
  };

  this.HourLog = function () {
    for(var i = 0; i < hours.length; i++) {
      var totalThisHour = this.hourlyTot();
      this.total += totalThisHour;
      this.display.push(totalThisHour);
      console.log(totalThisHour);
    }
  };

  this.DisplayHours = function () {
    this.HourLog();
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.storeLocation;
    trEl.appendChild(thEl);
      for(var i = 0; i < this.display.length; i++) {
        var tdEl = document.createElement("td");
        var hourDis = document.createTextNode(this.display[i]);
        tdEl.appendChild(hourDis);
        trEl.appendChild(tdEl);
      }
  var totalNumber = document.createTextNode(this.total);
  var totalTd = document.createElement('td');
  totalTd.appendChild(totalNumber);
  trEl.appendChild(totalTd);
  tbl.appendChild(trEl);
  }
};

var pikePlace = new cookieStore("Pike Place Market", 17, 88, 5.2);
var seaTac = new cookieStore("SeaTac Airport", 6, 44, 1.2);
var southCenter = new cookieStore("Southcenter Mall", 11, 38, 1.9);
var bellevue = new cookieStore("Bellevue Square", 20, 48, 3.3);
var alki = new cookieStore("Alki", 3, 24, 2.6);

var tbl = document.createElement("table");

var topRow = function () {
    var topEl = document.createElement('thead');
    topEl.appendChild(document.createElement('td'));
      for(var i = 0; i < hours.length; i++) {
        var topThEl = document.createElement("td");
        var topHourDis = document.createTextNode(hours[i]);
        topThEl.appendChild(topHourDis);
        topEl.appendChild(topThEl);
      };
    tbl.appendChild(topEl);

    var dailytotal = document.createElement('th');
    dailytotal.textContent = "Total";
    topEl.appendChild(dailytotal);
    tbl.appendChild(topEl);
};

function displayAllLocations() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].DisplayHours();
  };
}

// function updateLocations() {
//   add updates ex. pikePlace.avePerCust = 0
//   displayAllLocations();
// }

displayAllLocations();
topRow();
document.getElementById("tableDisplay").appendChild(tbl);
