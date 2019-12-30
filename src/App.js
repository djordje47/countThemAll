import React from 'react';
import uuid from 'uuid';
import FormComponent from './components/FormComponent';
import CounterListComponent from './components/CounterListComponent';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterToUpdate: false,
            counters: []
        };
        /**
         * https://mzl.la/2SzTQtA - MDN link to bind
         * Bind methods and only in the lowest level of component tree
         * send the params you need. But wrap it in arrow function, or it will
         * trigger the method every time component re-renders!
         */
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCounterDecrease = this.handleCounterDecrease.bind(this);
        this.handleCounterIncrease = this.handleCounterIncrease.bind(this);
        this.handleCounterUpdate = this.handleCounterUpdate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(event) {
        const counterId = uuid();
        const counterInputValues = this.getInputValues(event);
        const counters = this.state.counters.slice();

        const newCounter = {
            counterId,
            counterName: counterInputValues.counterName.value === ''
                ? 'No name counter'
                : counterInputValues.counterName.value,
            counterValue: parseInt(
                counterInputValues.counterValue.value === '' ? 0 : counterInputValues.counterValue.value),
        };
        this.setState(
            {counters: counters.concat(newCounter)},
        );
        counterInputValues.counterName.value = '';
        counterInputValues.counterValue.value = '';
        event.preventDefault();
    }

    handleUpdate(event) {
        const counterName = event.target.elements.counterName.value;
        const counterValue = event.target.elements.counterValue.value;
        const counterId = event.target.elements.counterId.value;

        const counterUpdated = this.state.counters.map(counter => {
            return counter.counterId === counterId
                ? {
                    counterId: counterId,
                    counterName: counterName,
                    counterValue: counterValue,
                }
                : counter;
        });

        this.setState({counterToUpdate: false, counters: counterUpdated});
        event.preventDefault();
    }

    getInputValues(event) {
        return {
            counterName: event.target.elements.counterName,
            counterValue: event.target.elements.counterValue
        }
    };

    handleDelete(counterId) {
        const filteredCounters = this.state.counters.filter(
            counter => counter.counterId !== counterId,
        );
        this.setState({counters: filteredCounters});
    }

    handleCounterDecrease(counterId) {
        const counterDecreased = this.state.counters.map(counter => {
            return counter.counterId === counterId
                ? {
                    counterId: counter.counterId,
                    counterName: counter.counterName,
                    counterValue: --counter.counterValue,
                }
                : counter;
        });
        this.setState({counters: counterDecreased});
    }

    handleCounterIncrease(counterId) {
        const counterIncreased = this.state.counters.map(counter => {
            return counter.counterId === counterId
                ? {
                    counterId: counter.counterId,
                    counterName: counter.counterName,
                    counterValue: ++counter.counterValue,
                }
                : counter;
        });
        this.setState({counters: counterIncreased});
    }

    handleCounterUpdate(counterId) {
        const counterToUpdate = this.state.counters.filter(counter => counter.counterId === counterId)[0];

        this.setState((state) => {
            return {
                counterToUpdate,
                counters: state.counters
            }
        });

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">Counter app</header>
                <FormComponent onFormSubmit={this.handleSubmit}
                               onFormUpdate={this.handleUpdate}
                               counterToUpdate={this.state.counterToUpdate}/>
                <CounterListComponent counters={this.state.counters}
                                      handleDelete={this.handleDelete}
                                      handleCounterIncrease={this.handleCounterIncrease}
                                      handleCounterDecrease={this.handleCounterDecrease}
                                      handleCounterUpdate={this.handleCounterUpdate}
                />
            </div>
        );
    }
}

export default App;
