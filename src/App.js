import React from 'react';
import uuid from 'uuid';
import FormComponent from './components/FormComponent';
import CounterListComponent from './components/CounterListComponent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const counterId = uuid();
    const counterName = event.target.querySelector('#counterName');
    const counterValue = event.target.querySelector('#counterValue');
    const counters = this.state.counters.slice();

    const newCounter = {
      counterId,
      counterName: counterName.value,
      counterValue: parseInt(counterValue.value),
    };
    this.setState(
        {counters: counters.concat(newCounter)},
    );
    counterName.value = '';
    counterValue.value = '';
    event.preventDefault();
  }

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
            counterValue: counter.counterValue - 1,
          }
          : {
            counterId: counter.counterId,
            counterName: counter.counterName,
            counterValue: counter.counterValue,
          };
    });
    this.setState({counters: counterDecreased});
  }

  handleCounterIncrease(counterId) {
    const counterIncreased = this.state.counters.map(counter => {
      return counter.counterId === counterId
          ? {
            counterId: counter.counterId,
            counterName: counter.counterName,
            counterValue: counter.counterValue + 1,
          }
          : {
            counterId: counter.counterId,
            counterName: counter.counterName,
            counterValue: counter.counterValue,
          };
    });
    this.setState({counters: counterIncreased});
  }

  handleCounterUpdate(counterId) {console.log('Update-method', counterId);}

  render() {
    return (
        <div className="App">
          <header className="App-header">Counter app</header>
          <FormComponent onFormSubmit={(event) => this.handleSubmit(event)}/>
          <CounterListComponent counters={this.state.counters}
                                handleDelete={(counterId) => this.handleDelete(
                                    counterId)}
                                handleCounterIncrease={(counterId) => this.handleCounterIncrease(
                                    counterId)}
                                handleCounterDecrease={(counterId) => this.handleCounterDecrease(
                                    counterId)}
          />
        </div>
    );
  }
}

export default App;
