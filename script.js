const API_KEY = 'd6e3a7cb-7257-4786-a22f-59c4228f1634'
const API_URL = `http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`

const search_btn = document.getElementById('search_btn')
search_btn.addEventListener("click", ()=>{
    console.log("button pressed")
    getWeather()
})
async function getWeather() {
    const response = await fetch(API_URL);
    console.log(response)
    const weather = await response.json()
    console.log(weather)
    document.getElementById("update_State").innerText = weather.data.city += ", " + weather.data.state
    document.getElementById("update_Temp").innerText = weather.data.current.weather.tp += " degrees celcius"
    if (weather.data.current.weather.ic == "01d") {
            document.body.style.background = "url('./assets/clearsunnysky.jpg')"
            document.body.style.backgroundSize = "cover"
            document.getElementById("update_Text").innerText = "It's a sunny day!"
    } else if
        (weather.data.current.weather.ic == "01n") {
            document.body.style.background = "url('./assets/clearnightsky.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "It's a beautiful night sky";
            document.body.style.color = "white";
    } else if
        (weather.data.current.weather.ic == "02d") {
            document.body.style.background = "url('./assets/lightcloudsunnysky.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "It's a sunny day with a few clouds";
    } else if
        (weather.data.current.weather.ic == "02n") {
            document.body.style.background = "url('./assets/lightcloudnightsky.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "It's a slightly cloudy night";
            document.body.style.color = "white";
    } else if
        (weather.data.current.weather.ic == "03n" || weather.data.current.weather.ic == "04n") {
            document.body.style.background = "url('./assets/cloudynightsky.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.color = "white";
            document.getElementById("update_Text").innerText = "It's a cloudy night";
    } else if
        (weather.data.current.weather.ic == "03d" || weather.data.current.weather.ic == "04d") {
            document.body.style.background = "url('./assets/cloudyday.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "It's a cloudy day";
    } else if
        (weather.data.current.weather.ic == "09d" || weather.data.current.weather.ic == "10d" || weather.data.current.weather.ic == "09n" || weather.data.current.weather.ic == "10n" || weather.data.current.weather.ic == "11d" || weather.data.current.weather.ic == "11n") {
            document.body.style.background = "url('./assets/dayrain.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "Bring an umbrella!";
    } else if
        (weather.data.current.weather.ic == "13d" || weather.data.current.weather.ic == "13n") {
            document.body.style.background = "url('./assets/snow.jpg')";
            document.body.style.backgroundSize = "cover";
            document.getElementById("update_Text").innerText = "It's snowing! Dress warm";
    } else if 
    (weather.data.current.weather.ic == "50d" || weather.data.current.weather.ic == "50n") {
        document.body.style.background = "url('./assets/mist.jpg')";
        document.body.style.backgroundSize = "cover";
        document.getElementById("update_Text").innerText = "It's misty!";
    }

    
}
