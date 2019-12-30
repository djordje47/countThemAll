import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faMinusSquare, faPlusSquare, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


export default function CounterComponent(props) {
    return (
        <tr>
            <td>
                {props.index}
            </td>
            <td>{props.counter.counterName}</td>
            <td>
                {props.counter.counterValue}
            </td>
            <td>
                <button className={"m-3 action-holder edit"}
                        onClick={() => props.handleCounterUpdate(props.counter.counterId)}>
                    <FontAwesomeIcon
                        size={"3x"}
                        icon={faEdit}/>
                </button>
                <button className={"m-3 action-holder delete"}
                        onClick={() => props.handleDelete(props.counter.counterId)}>
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        size={"3x"}/>
                </button>
                <button className={"m-3 action-holder increase text-center"}
                        onClick={() => props.handleCounterIncrease(props.counter.counterId)}>
                    <FontAwesomeIcon
                        icon={faPlusSquare}
                        size={"3x"}
                    />
                </button>
                <button className={"m-3 action-holder decrease"}
                        onClick={() => props.handleCounterDecrease(props.counter.counterId)}>
                    <FontAwesomeIcon
                        icon={faMinusSquare}
                        size={"3x"}
                    />
                </button>
            </td>
        </tr>
    );
}

