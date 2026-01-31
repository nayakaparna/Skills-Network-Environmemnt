function showweatherDetails(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // 1. Get the value ONLY when the function is called
    const city = document.getElementById('city').value;
    const apiKey = 'e0c5d031efb3c852e48228a44511145f'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // 2. Perform the fetch inside the function
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// 3. Attach the listener (this stays outside)
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);