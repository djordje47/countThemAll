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
  }

  handleSubmit(event) {
    const counterId = uuid();
    const counterName = event.target.querySelector('#counterName');
    const counterValue = event.target.querySelector('#counterValue');
    const counters = this.state.counters.slice();

    const newCounter = {
      counterId,
      counterName: counterName.value === ''
          ? 'No name counter'
          : counterName.value,
      counterValue: parseInt(
          counterValue.value === '' ? 0 : counterValue.value),
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

  handleCounterUpdate(counterId) {console.log('Update-method', counterId);}

  render() {
    return (
        <div className="App">
          <header className="App-header">Counter app</header>
          <FormComponent onFormSubmit={this.handleSubmit}/>
          <CounterListComponent counters={this.state.counters}
                                handleDelete={this.handleDelete}
                                handleCounterIncrease={this.handleCounterIncrease}
                                handleCounterDecrease={this.handleCounterDecrease}
          />
        </div>
    );
  }
}

export default App;
