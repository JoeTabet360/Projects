function fetchWeather() {

    const apiKey = '42cecd2e1915af85db88eaf336c46a37';
    //const cityName = 'greenland'
    const cityName = document.querySelector("input").value

    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;

    axios.get(apiUrl)
        .then(response => {

            // const temperature = response.data.main.temp;
            // const description = response.data.weather[0];

            // console.log('Temperature:', temperature, '°C');
            // console.log('Description:', description);
            const latitude = response.data[0].lat;
            const longitude = response.data[0].lon;
            const getwheatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            return axios.get(getwheatherAPI);
        })
        .then(weatherRespond => {
            console.log(weatherRespond.data)
            const humidity = weatherRespond.data.main.humidity
            const temp = (weatherRespond.data.main.temp - 273.15).toFixed(2)
            const disctiption = weatherRespond.data.weather[0].description
            const windspeed = weatherRespond.data.wind.speed
            console.log(humidity)
            console.log(temp)
            console.log(disctiption)
            console.log(windspeed)

            document.querySelector(".temp").innerText = `${temp}C`
            document.querySelector(".dis").innerText = disctiption
            document.querySelector(".speed").innerText = `${windspeed} km/h`
            document.querySelector(".hum").innerText = `${humidity}% Humidity`




        })


        .catch(error => {

            console.error('Request error:', error);
        });
}



const butt = document.querySelector("button")
butt.addEventListener("click", fetchWeather)