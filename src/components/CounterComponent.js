import React from 'react';

export default function CounterComponent(props) {
  return (
      <li>
        {props.counter.counterName} - {props.counter.counterValue}
        <button id="editCounter">Edit Counter</button>
        <button id="deleteCounter"
                onClick={(e) => props.handleDelete(e)}>
          Delete Counter
        </button>
        <button>IncreaseCounter</button>
        <button>DecreaseCounter</button>
      </li>
  );
}

