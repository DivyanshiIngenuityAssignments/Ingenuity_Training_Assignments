//run with npx webpack server
import '../css/main.css';

import {FillCovidData} from "./FillCovidData";
import {FillCountries} from "./FillCountries";

onload = ()=>{

    FillCovidData();
    FillCountries();

}

/*fetch("https://covid-193.p.rapidapi.com/countries", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d04416a96emsh161af6d0378dbe0p11c155jsn44abff4d83e4",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
}).then(response => response.json())
.then(data => console.log(data));
*/