import React from "react";
import './App.css'
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const KEY = '9c3b6aabb597a8046c5c63e3bfa95481';

class App extends React.Component {
    
    state = {
            inputCity: "",
            inputCountry: "",
            temperature: "",
            humidity: "",
            description: "",
            city: "",
            country: "",
            icon: "",
            err: ""
        };
    

    changeCity = (event) => {
        this.setState({
            inputCity: event.target.value
        });
    }

    changeCountry = (event) => {
        this.setState({
            inputCountry: event.target.value
        });
    }

    getWeather = async (event) => {
        event.preventDefault();
        let city = this.state.inputCity;
        let country = this.state.inputCountry;
        try {
            let weatherCall = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=metric`);
            if (!weatherCall.ok) {
                throw new Error('Please enter a valid location!');
            } else {
                let weatherInfo = await weatherCall.json();
                this.setState({
                    inputCity: "",
                    inputCountry: "",
                    temperature: weatherInfo.main.temp,
                    humidity: weatherInfo.main.humidity,
                    description: weatherInfo.weather[0].description,
                    city: weatherInfo.name,
                    country: weatherInfo.sys.country,
                    icon: weatherInfo.weather[0].icon,
                    err: ""
        });
            }
        } catch (error) {
            this.setState({
                inputCity: "",
                inputCountry: "",
                temperature: "",
                humidity: "",
                description: "",
                city: "",
                country: "",
                icon: "",
                err: error.message
            });
        }
        
            

        
    }

    render() {
        return (
            <div id='app'>
                <Titles />
                <div id="form-weather">
                    <Form 
                    getWeather={this.getWeather} 
                    changeCity={this.changeCity} 
                    changeCountry={this.changeCountry} 
                    inputCity={this.state.inputCity}
                    inputCountry={this.state.inputCountry}
                />
                    <Weather 
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    city={this.state.city}
                    country={this.state.country}
                    icon={this.state.icon}
                    err={this.state.err}
                />
                </div>
                
            </div>
        );
    }
};

export default App;



