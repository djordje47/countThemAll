import React from 'react';
import CounterComponent from './CounterComponent';

export default class CounterListComponent extends React.Component {
  render() {
    return (
        <div>
          <ul>
            {this.props.counters.map(
                (counter) => <CounterComponent
                    key={counter.counterId}
                    counter={counter}
                    handleDelete={this.props.handleDelete}
                    handleCounterIncrease={this.props.handleCounterIncrease}
                    handleCounterDecrease={this.props.handleCounterDecrease}/>)}
          </ul>
        </div>
    );
  }
}

