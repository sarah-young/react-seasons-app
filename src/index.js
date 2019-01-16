import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import LocationDenied from './LocationDenied';

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    // Holds all data calling methods
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // If component is updated, this is called.
    // Data loading!
    componentDidUpdate() {
        console.log('My component was just updated!')
    }

    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <LocationDenied message={this.state.errorMessage} />
            ) 
        } 
        if (!this.state.errorMEssage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        }
        return <div><Spinner message="Please accept location request" /></div>
    }

    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)