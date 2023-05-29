

function updateTime() {
let DenverElement = document.querySelector("#DEN");
let DenverDate = DenverElement.querySelector(".date");
let DenverTime = DenverElement.querySelector(".time");
let DenverData = moment();

DenverDate.innerHTML = DenverData.format("MMMM Do YYYY");
DenverTime.innerHTML = DenverData.format("h:mm:ss [<small>]A[<small>]");

let SeoulElement = document.querySelector("#SEO");
let SeoulDate = SeoulElement.querySelector(".date");
let SeoulTime = SeoulElement.querySelector(".time");
let SeoulData = moment.tz(`Asia/Seoul`);

SeoulDate.innerHTML = SeoulData.format("MMMM Do YYYY");
SeoulTime.innerHTML = SeoulData.format("h:mm:ss [<small>]A[<small>]");

let AnchorageElement = document.querySelector("#ANC");
let AnchorageDate = AnchorageElement.querySelector(".date");
let AnchorageTime = AnchorageElement.querySelector(".time");
let AnchorageData = moment.tz(`America/Anchorage`);

AnchorageDate.innerHTML = AnchorageData.format("MMMM Do YYYY");
AnchorageTime.innerHTML = AnchorageData.format("h:mm:ss [<small>]A[<small>]");
}

function displayCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let displayCities = document.querySelector("#display");
    displayCities.innerHTML = `
    <div class="city">
      <div>
       <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
       <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(" A")}</small></div>
     </div>
     `;
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelect = document.querySelector("#cities");

citiesSelect.addEventListener("change", displayCity);