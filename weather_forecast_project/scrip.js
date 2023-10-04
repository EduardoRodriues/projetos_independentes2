

const key = "b1660cf49b72e79fba9fea1c5f03ab1a"

function screen(data) {
    document.getElementById("title").innerHTML = data.name
    document.getElementById("number").innerHTML = Math.floor(data.main.temp) + " " + "F°"
    document.getElementById("temp").innerHTML = data.weather[0].description
    document.getElementById("umid").innerHTML = "Moisture:" + " " + data.main.humidity + "%"
    document.getElementById("img").src = (`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
}


async function search(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())

    screen(data)
}


document.querySelector('#search').addEventListener('click', function() {
    
    const  city = document.getElementById("city").value

    search(city)
    
} )