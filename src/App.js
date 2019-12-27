import React from "react";
import FormComponent from "./components/FormComponent";
import CounterListComponent from "./components/CounterListComponent";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const counterName = event.target.querySelector('#counterName');
        const counterValue = event.target.querySelector('#counterValue');
        const counters = this.state.counters.slice();

        const newCounter = {
            counterName: counterName.value,
            counterValue: counterValue.value
        };
        this.setState(
            {counters: counters.concat(newCounter)}
        );
        counterName.value = '';
        counterValue.value = '';
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">Counter app</header>
                <FormComponent onFormSubmit={(event) => this.handleSubmit(event)}/>
                <CounterListComponent counters={this.state.counters}/>
            </div>
        );
    }
}

export default App;
