import React from 'react';

export default function CounterComponent(props) {
    return (
        <li>
            {props.counter.counterName} - {props.counter.counterValue}
            <button className="editCounter"
                    onClick={() => props.handleCounterUpdate(props.counter.counterId)}>
                Edit Counter
            </button>
            <button className="deleteCounter"
                    onClick={() => props.handleDelete(props.counter.counterId)}>
                Delete Counter
            </button>
            <button className="IncreaseCounter"
                    onClick={() => props.handleCounterIncrease(
                        props.counter.counterId)}>
                IncreaseCounter
            </button>
            <button className="DecreaseCounter"
                    onClick={() => props.handleCounterDecrease(
                        props.counter.counterId)}>
                DecreaseCounter
            </button>
        </li>
    );
}

