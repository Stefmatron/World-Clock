

function updateFrankfurt() {
let frankfurtElement = document.querySelector("#FRA");
let frankfurtDate = frankfurtElement.querySelector(".date");
let frankfurtTime = frankfurtElement.querySelector(".time");
let frankfurtData = moment();

frankfurtDate.innerHTML = frankfurtData.format("MMMM Do YYYY");
frankfurtTime.innerHTML = frankfurtData.format("h:mm:ss [<small>]A[<small>]");
}

function updateBali() {
let BaliElement = document.querySelector("#BAL");
let BaliDate = BaliElement.querySelector(".date");
let BaliTime = BaliElement.querySelector(".time");
let BaliData = moment();

BaliDate.innerHTML = BaliData.format("MMMM Do YYYY");
BaliTime.innerHTML = BaliData.format("h:mm:ss [<small>]A[<small>]");
}

function updateAnchorage() {
let AnchorageElement = document.querySelector("#ANC");
let AnchorageDate = AnchorageElement.querySelector(".date");
let AnchorageTime = AnchorageElement.querySelector(".time");
let AnchorageData = moment();

AnchorageDate.innerHTML = AnchorageData.format("MMMM Do YYYY");
AnchorageTime.innerHTML = AnchorageData.format("h:mm:ss [<small>]A[<small>]");
}

updateFrankfurt();
setInterval(updateFrankfurt, 1000);

updateBali();
setInterval(updateBali, 1000);

updateAnchorage();
setInterval(updateAnchorage, 1000);