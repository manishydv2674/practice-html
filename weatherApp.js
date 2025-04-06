
const apiKey = "c1a9c0230d16f0ff9ac46a5fbce85269";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
         
        async function checkWeather(city)
         {
           const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

           if(responce.status == 404){
                 document.querySelector(".error").style.display = "block";
                 document.querySelector(".weather").style.display = "none";

           }else{

            var data = await responce.json(); 
           console.log(data); 

           document.querySelector(".city").innerHTML = data.name;
           document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
           document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
           document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
           if(data.weather[0].main == "Clear"){
            weatherIcon.src ="../image/clear-removebg-preview.png"
           }
            else if(data?.weather[0]?.main == "Clouds"){
                weatherIcon.src = "../image/cloud-removebg-preview.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "../image/drizzle-removebg-preview.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src ="../image/mist-removebg-preview.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "../image/rain.png"
            }

           document.querySelector(".weather").style.display = "block";
           document.querySelector(".error").style.display = "none";


           }

           
          
        }
        searchBtn.addEventListener("click", ()=>{

            checkWeather(searchBox.value);
           })
         

