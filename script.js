function getWeather(){

    let city = document.getElementById("city").value;

    document.getElementById("result").innerHTML =
    `
    <h2>${city}</h2>
    <p>Weather: Sunny</p>
    <p>Temperature: 30 °C</p>
    `;
}