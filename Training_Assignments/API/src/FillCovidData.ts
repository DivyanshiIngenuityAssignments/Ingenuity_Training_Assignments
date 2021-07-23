import {getCovidData} from "./GetData";

export function FillCovidData(country?: string): void {
    const table = document.getElementById("data") as HTMLTableElement;
    const myChart=document.getElementById("chart")as HTMLElement;
    table.innerHTML = `<table border='1'>
    <tr> 
    <!--th>Graph</th-->
        <th>Continent</th>
        <th>Country</th>
        <th>Cases</th>
    </tr> </table>`;
    
    const result = getCovidData(country);
    result.then((data)=> {
        data.response.forEach(countryData => {
            const row = `<tr>
            <!--td><a href='<%=${document.getElementById(myChart.innerHTML)} %>'>Click here for graph</a></td-->
        <td>${countryData.continent}</td>
        <td>${countryData.country}</td>
        <td><table>
        <tr><th>Total</th><th>Active</th><th>Recovered</th><th>New</th></tr>
        <tr>
            <td>${countryData.cases.total}</td>
            <td>${countryData.cases.active}</td>
            <td>${countryData.cases.recovered}</td>
            <td>${countryData.cases.new}</td>
        </tr>
        </table>    </td></tr>
        `
            table.innerHTML+= row;
        });
    });
}