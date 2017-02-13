//##############[ VARIBLES ]##################//
//pulling from HTML
var displaySub = document.getElementById("subscribe");
var closeX = document.getElementById("close");
var UserEmail = document.getElementById("useremail");
var emailBtn = document.getElementById("emailbtn");
var aboutlink = document.getElementById("aboutus");
var recipeslink = document.getElementById("recipeslink");
var meallink = document.getElementById("meallink");
var homelink = document.getElementById("logo");
var loginbtn = document.getElementById("login");
var classic = document.getElementById("classicM");
var veggie = document.getElementById("veggieM");
var family = document.getElementById("famM");
var foodSwitch = document.getElementById("switch");
var foodlist = document.getElementById("listofingredients");
var ctimer = document.getElementById("cookingtime");
var numlvl = document.getElementById("levelnum");
var displayInstruct = document.getElementById("instructions");
var rinstruct = document.getElementById("recipeinstructions");
var foodimg = document.getElementById("foodimg");




//##############[ FUNCTIONS ]##################//
function subscriptionClose() {
	displaySub.style.display = "none";
// displaying is set to false.
// when closeX is clicked, display is set to true hide displaySub

}

function classicClick(){
	classic.style.backgroundColor = "#fc7979";
	foodSwitch.innerHTML = "Classic";
	foodimg.src = "http://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2013/05/Meatlovers-Pizza-Burgers-GI-365-14.jpg";
	foodimg.style.maxWidth = "65%";
	veggie.style.backgroundColor = "orange";
	family.style.backgroundColor = "#669933";
}


function veggieClick(){
	veggie.style.backgroundColor = "#ffca44";
	foodSwitch.innerHTML = "Veggie";
	foodimg.src = "http://www.seriouseats.com/assets_c/2015/02/20150203-yu-xian-sichuan-eggplant-fish-flavor-12-thumb-1500xauto-418830.jpg";
	foodimg.style.maxWidth = "59%";
	classic.style.backgroundColor = "#FF5252";
	family.style.backgroundColor = "#669933";
}

function familyClick(){
	family.style.backgroundColor = "#8abf56";
	foodSwitch.innerHTML = "Family";
	foodimg.src = "http://www.flouronmyface.com/wp-content/uploads/2014/02/Kraft-Recipe-Makers.jpg";
	foodimg.style.maxWidth = "63%";
	veggie.style.backgroundColor = "orange";
	classic.style.backgroundColor = "#FF5252";
}

function showIngre(){
	displayInstruct.style.display = "inline";
}

classic.addEventListener("click", classicClick);
veggie.addEventListener("click", veggieClick);
family.addEventListener("click", familyClick);
foodimg.addEventListener("click", showIngre);


//##############[ CALLING ]##################//
closeX.addEventListener("click", subscriptionClose);
