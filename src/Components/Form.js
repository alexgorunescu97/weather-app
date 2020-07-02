import React from "react";

class Form extends React.Component {

    render() {
        return (
            <div id="form-comp">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" value={this.props.inputCity} onChange={this.props.changeCity} placeholder="City . . ."/>
                    <input type="text" value={this.props.inputCountry} onChange={this.props.changeCountry} placeholder="Country . . ."/>
                    <button type="submit">Get weather</button>
                </form>
            </div>
        )
    }
};

export default Form;