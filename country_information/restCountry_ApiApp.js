function getAPIData()
{
    var request = new XMLHttpRequest();
    
    var cname = "bharat"
    var input = document.getElementById("cname")
    if(input)
    {
        cname = input.value;
    }

    request.open("get", `https://restcountries.com/v3.1/name/${cname}`)
    request.send();

    request.addEventListener("load", ()=>
{
    //console.log(request.responseText);

    var data = JSON.parse(request.responseText)
    data = data[0]

    document.getElementById("name").innerHTML=data.name.official
    document.getElementById("capital").innerHTML=data.capital
    document.getElementById("flags").src=data.flags.svg
    document.getElementById("region").innerHTML=data.region
    document.getElementById("languages").innerHTML=(data.languages)
    document.getElementById("borders").innerHTML=data.borders
    document.getElementById("maps.googleMaps").href=data.maps.googleMaps
    document.getElementById("population").innerHTML=data.population
    document.getElementById("timezones").innerHTML=data.timezones
    document.getElementById("area").innerHTML=data.area
    document.getElementById("subregion").innerHTML=data.subregion
    



})
   document.querySelector(".second").style.display = "block";
//document.querySelector(".error").style.display = "none";


}
getAPIData();


