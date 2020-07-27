// Write your JavaScript code here!
function shuttleRequirements (){
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   if (pilotName.value === "" || copilotName.value === "" 
   || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!");
      // stop the form submission
      event.preventDefault();
   }
   if (isNaN(cargoMass.value)) {
      alert("Mass must be a number!");
      // stop the form submission
      event.preventDefault();
   }
   if (isNaN(fuelLevel.value)) {
      alert("Fuel level must be a number!");
      // stop the form submission
      event.preventDefault();
   }
};

function infoVerify(){
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const h2Status = document.getElementById("launchStatus");
   const divInfo = document.getElementById("faultyItems");
   
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is  ready to launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is  ready to launch`;
   
   if(fuelLevel.value < 10000){
      h2Status.style.color = 'red';
      h2Status.innerHTML = 'Shuttle not ready for launch.';
      divInfo.style.visibility = 'visible';
      fuelStatus.style.color = 'red';
      fuelStatus.innerHTML = 'Fuel level is too low for launch';
         event.preventDefault();
   } else{
      fuelStatus.style.color = 'black';
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
   };

   if(cargoMass.value > 10000){
      h2Status.style.color = 'red';
      h2Status.innerHTML = 'Shuttle not ready for launch.';
      divInfo.style.visibility = 'visible';
      cargoStatus.style.color = 'red';
      cargoStatus.innerHTML = 'Cargo mass is too high for launch';
         event.preventDefault();
   } else{
      cargoStatus.style.color = 'black';
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
   };

   if(fuelLevel.value > 10000 && cargoMass.value < 10000){
      h2Status.style.color = 'green';
      h2Status.innerHTML = 'Shuttle is ready for launch!';
      divInfo.style.visibility = 'visible';
      event.preventDefault();
   };
};


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
         const divPlanet = document.getElementById("missionTarget");
         divPlanet.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[5].name}</li>
               <li>Diameter: ${json[5].diameter}</li>
               <li>Star: ${json[5].star}</li>
               <li>Distance from Earth: ${json[5].distance}</li>
               <li>Number of Moons: ${json[5].moons}</li>
            </ol>
            <img src="${json[5].image}"></img>`
      });
   });
});
   
   // window.alert("submit clicked");
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", infoVerify);
   form.addEventListener("submit", shuttleRequirements);
});