const base_url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '69574d9f42mshcfe7ce0a703f23bp1ca3e2jsnbc5cd7026abd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const weather  = async (city1) => {
    try {
	const response = await fetch(`${base_url}${city1}`, options);
	const result = await response.json();
    cityname.innerText = city1.toUpperCase();
    temp.innerText = `${result.temp} °C`
    cloud_pct.innerText =    `Cloud-PCT :         ${result.cloud_pct} `; 
    humidity.innerText =     `Humidity :          ${result.humidity}` ;
    min_temp.innerText =     `Min-Temp :          ${result.min_temp}` ;
    max_temp.innerText =     `Max-Temp :          ${result.max_temp}` ;
    wind_speed.innerText =   `Wind-Speed :        ${result.wind_speed}` ;
    wind_degrees.innerText = `Wind-Degrees :      ${result.wind_degrees}` ;
    } catch (error) {
	console.error(error);
    }
}
const btn = document.querySelector(".searchbtn");
const city = document.querySelector(".city");
const cityname = document.querySelector(".cityname");
const temp = document.querySelector(".temp");
const cloud_pct = document.querySelector(".cloud_pct");   
const humidity  = document.querySelector(".humidity");
const min_temp  = document.querySelector(".min_temp");
const max_temp  = document.querySelector(".max_temp");
const wind_speed  = document.querySelector(".wind_speed");
const wind_degrees  = document.querySelector(".wind_degrees");

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const city1 = city.value;
    weather(city1);
})
window.addEventListener("load", () => {
    const city1 = "Delhi"
    weather(city1);
});
