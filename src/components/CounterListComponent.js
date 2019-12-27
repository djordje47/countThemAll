import React from "react";

export default function CounterListComponent(props) {
    console.log(props.counters);
    return (
        <div>
            <ul>
                {props.counters.map((counter) => <li>{counter.counterName} - {counter.counterValue}</li>)}
            </ul>
        </div>
    );
}
