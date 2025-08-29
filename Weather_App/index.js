import axios from "axios";

const apiKey = "99b1159097c02ea66296910fdad42bb8";
const city = process.argv[2];

if(!city){
    console.log("Enter city name");
    process.exit(1);
}

async function fetchWeather(city){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    // console.log(response);
    const {name} = response.data;
    const { temp } = response.data.main;
    const weatherCondition = response.data.weather[0].description;

    console.log(`Weather in ${name}:`);
    console.log(`Temperature: ${temp}°C`);
    console.log(`Condition: ${weatherCondition}`);
    }
    catch(error){
        if(error.response && error.response.status == 404){
            console.log("City not found.");
        }
        else{
            console.log("Error fetching weather : ",error.message);
        }
    }
}

fetchWeather(city);