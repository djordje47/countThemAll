import React from 'react';

export default function FormComponent(props) {
  return (
      <div>
        <form onSubmit={(event) => props.onFormSubmit(event)}>
          <input
              id="counterName"
              placeholder="Counter name"
              type="text"
          />
          <input
              id="counterValue"
              placeholder="Initial Count"
              type="number"
          />
          <button id="submit">Add counter</button>
        </form>
      </div>
  );
}