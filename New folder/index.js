// let location= document.getElementById('locationInput').value
let popup=document.getElementById("popup")
let table = document.getElementById("table")
let weather = (location) => {
    console.log(location)
    try {
        // console.log("hii")
        const API_KEY = "c7a9299a3d8da1d910da08bcffb48a3b";
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
        
          fetch(url).then(response => response.json()).then(response => {
      
            if (response.cod == 200) {
                console.log(response.timezone);
                // openWeatherPopup(console.log(response.name))

            }
            else {
                alert("No Location Found")
            }
        })
        .catch(error => {
            
            alert(`API Error: ${error.message}`)
        });
    } catch (error) {
        alert(`weather Error: ${error.message}`)
    }
}
function addData() {
    var inputBoxValue = document.getElementById("locationInput").value
    if(inputBoxValue == "" && inputBoxValue.length <= 0) {
        alert("Enter City Name")
        return
    }
   
    var newTR = `<tr>
    
    <td></td>
    <td><p>${inputBoxValue}</p></td>
    <td><button onclick="weather('${inputBoxValue}')">Show</button></td>
    <td><button onclick="deleteRow()">Delete</button></td>
</tr>`
    var tBodyObj = document.getElementById("myTableBody")
    var oldTBody = tBodyObj.innerHTML
    tBodyObj.innerHTML = oldTBody + newTR

    document.getElementById("locationInput").value = ""
}

function openWeatherPopup(place) {
    weather(place)
    console.log ("showWeather");
}
const closePopup = () => {
    openWeatherPopup.style.display = "none";
}
function deleteRow() {
    if(confirm('Are you sure you want to delete'))
       document.getElementById("table").deleteRow();

      }
    console.log("deleteRow");
    
