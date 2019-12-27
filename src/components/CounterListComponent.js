import React from 'react';

export default function CounterListComponent(props) {
  return (
      <div>
        <ul>
          {props.counters.map((counter) => <li
              key={counter.counterId}>{counter.counterName} - {counter.counterValue}</li>)}
        </ul>
      </div>
  );
}