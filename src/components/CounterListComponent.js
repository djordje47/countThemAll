import React from 'react';
import CounterComponent from './CounterComponent';

export default class CounterListComponent extends React.Component {
    render() {
        return (
                <table className="u-full-width">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name:</th>
                        <th>Value:</th>
                        <th>Action:</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.counters.map(
                            (counter, index) => <CounterComponent
                                key={counter.counterId}
                                index={index}
                                counter={counter}
                                handleDelete={this.props.handleDelete}
                                handleCounterIncrease={this.props.handleCounterIncrease}
                                handleCounterDecrease={this.props.handleCounterDecrease}
                                handleCounterUpdate={this.props.handleCounterUpdate}/>)}
                    </tbody>
                </table>
        );
    }
}

