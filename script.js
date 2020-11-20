// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace ? 1 : -1));
            let addedContent = "";
            let totalAstronauts = `
                <h2>Total Astronauts: ${json.length}</h2>
            `;
            for (astronaut of json){
                addedContent += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
            }
            container.innerHTML = totalAstronauts + addedContent;
        });  
    });
});