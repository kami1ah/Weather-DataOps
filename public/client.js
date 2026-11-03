//function to load the correct weather 
async function loadWeather() {
    try {
        //this is storing the data fetched from the endpoint below in the object res
        const  res = await fetch('/api/weather')
        //this is storing the response from response.json in weather as an object
        const weather = await res.json()

        //this now gets the section in the html by the id weather and inputs into the html the information
        document.getElementById('weather').innerHTML = `
            <h2> ${weather.name}</h2>
            <p> Temperature: ${weather.main.temp} </p>
            <p> Condition: ${weather.weather[0].description} </p>
        `

    }catch (err) {
        document.getElementById('weather').innerHTML = '<p> Failed to load weather data </p>'
        console.error(err)
    }

}

//function to plot the weather using plotly library

async function loadChart() {
    try {
        const res = await fetch('/api/weather-log')
        // console.log("Response status:", res.status);

        const { timestamps, temps } = await res.json()
        // console.log("API data:", data);

        const trace = {
            x: timestamps,
            y: temps,
            type: 'scatter',
            mode: 'lines+markers',
            line: {
                color: 'red'
            }
        }

        const layout = {
            title: 'Temperature Over Time',
            xaxis: { title: 'Date', type: 'date'},
            yaxis: { title: 'Temperature (c)' },
            legend: { orientation: 'h', x: 0, y: 1.1}
        }

        Plotly.newPlot('chart', [trace], layout)
    }catch (err) {
        console.error('Failed to load chart', err)
    }
} 

loadWeather()
loadChart()