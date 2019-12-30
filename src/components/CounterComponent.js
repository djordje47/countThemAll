import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faEdit, faMinusSquare, faPlusSquare, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


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
                <button className="editCounter"
                        onClick={() => props.handleCounterUpdate(props.counter.counterId)}><FontAwesomeIcon
                    icon={faEdit}/>
                </button>
                <button className="deleteCounter"
                        onClick={() => props.handleDelete(props.counter.counterId)}>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
                <button className="IncreaseCounter"
                        onClick={() => props.handleCounterIncrease(
                            props.counter.counterId)}>
                    <FontAwesomeIcon icon={faPlusSquare}/>
                </button>
                <button className="DecreaseCounter"
                        onClick={() => props.handleCounterDecrease(
                            props.counter.counterId)}>
                    <FontAwesomeIcon icon={faMinusSquare}/>
                </button>
            </td>
        </tr>
    );
}

