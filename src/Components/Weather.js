import React from "react";


class Weather extends React.Component {

    render() {
        let iconUrl = `https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
        return (
            <div id="weather-comp">
                {
                this.props.err && <p>
                   <span>{this.props.err}</span> 
                </p>
                }
                {
                this.props.city && this.props.country && <p>Location: 
                    <span> {this.props.city}, {this.props.country}</span>
                </p>
                }
                {
                this.props.icon && <img alt='' id="icon" src={iconUrl}/>
                }
                {
                this.props.temperature && <p>Temperature: 
                    <span> {this.props.temperature} &#176;C</span>
                </p>
                }
                {
                this.props.humidity && <p>Humidity: 
                    <span> {this.props.humidity}%</span>
                </p>
                }
                {
                this.props.description && <p>Description: 
                    <span> {this.props.description}</span>
                </p>
                }
            </div>
        )
    }
};

export default Weather;
