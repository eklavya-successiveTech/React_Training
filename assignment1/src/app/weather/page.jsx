import Weather from "../components/weather";

const WeatherText = () =>{
    return(
        <div>
            <Weather temperature = {60} />
            <Weather temperature = {9} />
        </div>
    )
}
export default WeatherText;