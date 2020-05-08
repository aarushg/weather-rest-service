import Weather from '../components/Weather';
import Titles from '../components/Title';
import Form from '../components/Form';
import React from 'react';
const API_KEY = "159bc8be9c9e036bd30b2cfafa755df1";

class WeatherPage extends React.Component {
    state = {
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }
    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        const errorCod = data.cod;

        if (errorCod === 200) {

            if (city && country) {
                this.setState({
                    temperature: data.main.temp,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    error: ""
                });
            } else {
                this.setState({
                    temperature: undefined,
                    temp_min: undefined,
                    temp_max: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    error: "Please enter a City and Country."
                });
            }

        }else{
            alert("Please enter valid information!");
        }


    }
    render() {
        return (
            <div>

                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperature={this.state.temperature}
                                        temp_min={this.state.temp_min}
                                        temp_max={this.state.temp_max}
                                        humidity={this.state.humidity}
                                        city={this.state.city}
                                        country={this.state.country}
                                        description={this.state.description}
                                        sunrise={this.state.sunrise}
                                        sunset={this.state.sunset}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default WeatherPage;