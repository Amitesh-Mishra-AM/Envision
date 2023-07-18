// events details 

const eventDetails =
    {'Bihar Patna': {
        'EventName' :  "Clean Patna, Green Patna",
        'Organization': 'GreenHope Foundation',
        'timing': '3 months (October - December 2023)',
        'venue':  "Gandhi Maidan, Patna",
        'details':`The GreenHope Foundation, in collaboration with local partners and volunteers, will organize the "Clean Patna, Green Patna" campaign at Gandhi Maidan, a prominent public ground in Patna. Gandhi Maidan provides a central location that can attract a large number of participants and serve as a focal point for various activities, including cleanliness drives, workshops, tree plantations, and community engagements.`
    }}


let selectedState = document.getElementById('state').value;
let selectedCity = document.getElementById('city').value;

let stateCity = `${selectedState} ${selectedCity}`

let searchbtn = document.getElementById('search')

searchbtn.addEventListener("click", function(event){


        event.preventDefault()
        let selectedOption = document.getElementById('selectedOption');
        selectedOption.innerHTML = `<div id="flexContainer-1">
        <div class="flexitem">${eventDetails['Bihar Patna']['EventName']}</div>
        <div class="flexitem">${eventDetails['Bihar Patna']["Organization"]}</div>
    </div>

    <div id="flexContainer-2">
        <div class="flexitem">${eventDetails['Bihar Patna']["timing"]} | ${eventDetails['Bihar Patna']["venue"]}</div>
        <div class="flexitem"><button>Register</button></div>
    </div>
    <div>${eventDetails['Bihar Patna']["details"]}</div>
</div>`
    }
);

