// ===============================
// Weather Data (Static)
// ===============================



const weatherData = {

    Chennai:{temp:"24°",condition:"Thunderstorm",humidity:"76%",wind:"18 km/h",visibility:"10 km",feels:"27°",pressure:"1014 hPa",cloud:"82%"},
    Bangalore:{temp:"22°",condition:"Cloudy",humidity:"70%",wind:"14 km/h",visibility:"9 km",feels:"24°",pressure:"1011 hPa",cloud:"74%"},
    Mumbai:{temp:"29°",condition:"Sunny",humidity:"68%",wind:"12 km/h",visibility:"11 km",feels:"31°",pressure:"1012 hPa",cloud:"20%"},
    Delhi:{temp:"32°",condition:"Hot",humidity:"52%",wind:"15 km/h",visibility:"12 km",feels:"36°",pressure:"1008 hPa",cloud:"15%"},
    Hyderabad:{temp:"30°",condition:"Sunny",humidity:"60%",wind:"13 km/h",visibility:"11 km",feels:"33°",pressure:"1011 hPa",cloud:"18%"},
    Kolkata:{temp:"28°",condition:"Rain",humidity:"82%",wind:"17 km/h",visibility:"8 km",feels:"31°",pressure:"1010 hPa",cloud:"90%"},
    Pune:{temp:"26°",condition:"Cloudy",humidity:"66%",wind:"10 km/h",visibility:"10 km",feels:"28°",pressure:"1013 hPa",cloud:"58%"},
    Kochi:{temp:"27°",condition:"Rain",humidity:"88%",wind:"16 km/h",visibility:"8 km",feels:"30°",pressure:"1012 hPa",cloud:"92%"},
    Coimbatore:{temp:"25°",condition:"Sunny",humidity:"64%",wind:"11 km/h",visibility:"10 km",feels:"27°",pressure:"1013 hPa",cloud:"30%"},
    Madurai:{temp:"31°",condition:"Hot",humidity:"54%",wind:"12 km/h",visibility:"11 km",feels:"35°",pressure:"1009 hPa",cloud:"12%"},
    Trichy:{temp:"30°",condition:"Sunny",humidity:"58%",wind:"13 km/h",visibility:"10 km",feels:"33°",pressure:"1011 hPa",cloud:"20%"},
    Salem:{temp:"29°",condition:"Cloudy",humidity:"61%",wind:"12 km/h",visibility:"10 km",feels:"31°",pressure:"1012 hPa",cloud:"40%"},
    Erode:{temp:"28°",condition:"Sunny",humidity:"59%",wind:"11 km/h",visibility:"10 km",feels:"30°",pressure:"1012 hPa",cloud:"25%"},
    Tirunelveli:{temp:"32°",condition:"Sunny",humidity:"56%",wind:"14 km/h",visibility:"11 km",feels:"35°",pressure:"1010 hPa",cloud:"18%"},
    Vellore:{temp:"31°",condition:"Hot",humidity:"55%",wind:"15 km/h",visibility:"11 km",feels:"34°",pressure:"1009 hPa",cloud:"20%"},
    Jaipur:{temp:"36°",condition:"Hot",humidity:"30%",wind:"18 km/h",visibility:"13 km",feels:"39°",pressure:"1006 hPa",cloud:"8%"},
    Ahmedabad:{temp:"35°",condition:"Sunny",humidity:"40%",wind:"16 km/h",visibility:"13 km",feels:"38°",pressure:"1007 hPa",cloud:"10%"},
    Lucknow:{temp:"31°",condition:"Cloudy",humidity:"58%",wind:"14 km/h",visibility:"11 km",feels:"34°",pressure:"1010 hPa",cloud:"42%"},
    Surat:{temp:"33°",condition:"Sunny",humidity:"48%",wind:"13 km/h",visibility:"12 km",feels:"36°",pressure:"1008 hPa",cloud:"15%"},
    Goa:{temp:"29°",condition:"Rain",humidity:"86%",wind:"18 km/h",visibility:"8 km",feels:"32°",pressure:"1012 hPa",cloud:"95%"},

    London:{temp:"18°",condition:"Cloudy",humidity:"76%",wind:"20 km/h",visibility:"10 km",feels:"17°",pressure:"1018 hPa",cloud:"75%"},
    Paris:{temp:"21°",condition:"Sunny",humidity:"61%",wind:"11 km/h",visibility:"11 km",feels:"22°",pressure:"1017 hPa",cloud:"22%"},
    NewYork:{temp:"26°",condition:"Sunny",humidity:"63%",wind:"14 km/h",visibility:"12 km",feels:"28°",pressure:"1015 hPa",cloud:"18%"},
    LosAngeles:{temp:"29°",condition:"Sunny",humidity:"48%",wind:"10 km/h",visibility:"13 km",feels:"30°",pressure:"1014 hPa",cloud:"5%"},
    Chicago:{temp:"23°",condition:"Cloudy",humidity:"66%",wind:"17 km/h",visibility:"10 km",feels:"24°",pressure:"1016 hPa",cloud:"55%"},
    Toronto:{temp:"20°",condition:"Rain",humidity:"73%",wind:"16 km/h",visibility:"9 km",feels:"19°",pressure:"1018 hPa",cloud:"88%"},
    Dubai:{temp:"41°",condition:"Hot",humidity:"28%",wind:"15 km/h",visibility:"14 km",feels:"45°",pressure:"1004 hPa",cloud:"2%"},
    Singapore:{temp:"30°",condition:"Thunderstorm",humidity:"84%",wind:"12 km/h",visibility:"9 km",feels:"34°",pressure:"1011 hPa",cloud:"90%"},
    Tokyo:{temp:"27°",condition:"Cloudy",humidity:"71%",wind:"12 km/h",visibility:"10 km",feels:"29°",pressure:"1013 hPa",cloud:"68%"},
    Seoul:{temp:"24°",condition:"Rain",humidity:"78%",wind:"15 km/h",visibility:"9 km",feels:"25°",pressure:"1015 hPa",cloud:"82%"},
    Sydney:{temp:"19°",condition:"Sunny",humidity:"52%",wind:"18 km/h",visibility:"12 km",feels:"20°",pressure:"1019 hPa",cloud:"10%"},
    Melbourne:{temp:"17°",condition:"Cloudy",humidity:"63%",wind:"21 km/h",visibility:"11 km",feels:"16°",pressure:"1020 hPa",cloud:"60%"},
    Rome:{temp:"28°",condition:"Sunny",humidity:"50%",wind:"9 km/h",visibility:"12 km",feels:"30°",pressure:"1014 hPa",cloud:"12%"},
    Berlin:{temp:"20°",condition:"Cloudy",humidity:"68%",wind:"15 km/h",visibility:"10 km",feels:"20°",pressure:"1017 hPa",cloud:"62%"},
    Moscow:{temp:"15°",condition:"Rain",humidity:"80%",wind:"19 km/h",visibility:"8 km",feels:"13°",pressure:"1022 hPa",cloud:"91%"}
};


// ===============================
// Elements
// ===============================

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

const temp = document.querySelector(".temperature");
const city = document.querySelector(".city");
const condition = document.querySelector(".condition");
const date = document.querySelector(".date");

const image = document.querySelector(".weather-image img");

const cards = document.querySelectorAll(".card h3");


// ===============================
// Current Date
// ===============================

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

date.innerHTML = today.toLocaleDateString("en-US", options);


// ===============================
// Update Weather
// ===============================

function updateWeather(cityName){

    const data = weatherData[cityName];

    if(!data){

        alert("City not found!");

        return;

    }

    city.innerHTML = cityName;

    temp.innerHTML = data.temp;

    condition.innerHTML = data.condition;

    const emoji = document.querySelector(".weather-emoji");

if(data.condition === "Thunderstorm"){
    emoji.innerHTML = "⛈️";
}
else if(data.condition === "Sunny"){
    emoji.innerHTML = "☀️";
}
else if(data.condition === "Cloudy"){
    emoji.innerHTML = "☁️";
}
else if(data.condition === "Rain"){
    emoji.innerHTML = "🌧️";
}

    cards[0].innerHTML = data.humidity;

    cards[1].innerHTML = data.wind;

    cards[2].innerHTML = data.visibility;

    cards[3].innerHTML = data.feels;

    cards[4].innerHTML = data.pressure;

    cards[5].innerHTML = data.cloud;

}


// ===============================
// Search Button
// ===============================

searchBtn.addEventListener("click",()=>{

    let cityName = searchInput.value.trim();

    if(cityName===""){

        alert("Enter a city name");

        return;

    }

    cityName =
        cityName.charAt(0).toUpperCase() +
        cityName.slice(1).toLowerCase();

    updateWeather(cityName);

});


// ===============================
// Enter Key
// ===============================

searchInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        searchBtn.click();

    }

});


// ===============================
// Welcome Animation
// ===============================

window.onload=()=>{

    document.querySelector(".container").style.opacity="0";

    setTimeout(()=>{

        document.querySelector(".container").style.opacity="1";

    },300);

};


// ===============================
// Console
// ===============================

console.log("Weather Dashboard Loaded Successfully");
// =========================
// Greeting
// =========================

const greeting = document.querySelector(".greeting");

const hour = new Date().getHours();

if(hour < 12){

    greeting.innerHTML="☀️ Good Morning";

}
else if(hour < 17){

    greeting.innerHTML="🌤️ Good Afternoon";

}
else if(hour < 20){

    greeting.innerHTML="🌇 Good Evening";

}
else{

    greeting.innerHTML="🌙 Good Night";

}



// =========================
// Live Clock
// =========================

const clock=document.querySelector(".live-clock");

function updateClock(){

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();



// =========================
// Weather Tips
// =========================

const tip=document.querySelector(".tip-text");

function updateTip(condition){

let weatherTip="";

switch(condition){

case "Sunny":

weatherTip="😎 Wear sunglasses and stay hydrated.";

break;

case "Rain":

weatherTip="🌧️ Carry an umbrella before going outside.";

break;

case "Thunderstorm":

weatherTip="⛈️ Stay indoors and avoid open areas.";

break;

case "Cloudy":

weatherTip="☁️ Pleasant weather for a walk.";

break;

case "Hot":

weatherTip="🥤 Drink plenty of water and avoid direct sunlight.";

break;

default:

weatherTip="😊 Have a wonderful day!";

}

tip.innerHTML=weatherTip;

}

updateTip(condition.innerHTML);