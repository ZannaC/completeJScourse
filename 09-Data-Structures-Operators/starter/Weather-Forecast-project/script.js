const apiKey = 'cfc60cf922e31045e5d684e56cf99484'; // Replace with your OpenWeatherMap API key

const submitBtn = document.getElementById('submit-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

submitBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temperature = Math.round(data.main.temp - 273.15);

            weatherInfo.innerHTML = `
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Weather:</strong> ${weather}</p>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherInfo.innerHTML = 'An error occurred. Please try again.';
        });
});
