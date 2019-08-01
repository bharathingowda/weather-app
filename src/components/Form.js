import React from "react";

class Form extends React.Component {

    render() {

        return (
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="city" placeholder="City..." />&nbsp;&nbsp;
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
                <input type="reset" value="Clear" name="Clear" placeholder="Clear" />
            </form>


        )
    }
}

export default Form;