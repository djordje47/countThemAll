import React from 'react';

class FormComponent extends React.Component {
    render() {
        if (this.props.counterToUpdate !== false) {
            return (
                <div>
                    <form onSubmit={this.props.onFormUpdate}>
                        <input type="hidden"
                               key={`counterIdToUpdate:${this.props.counterToUpdate.counterId}`}
                               defaultValue={this.props.counterToUpdate.counterId} name="counterId"/>
                        <input
                            id="counterName"
                            name="counterName"
                            defaultValue={this.props.counterToUpdate.counterName}
                            key={`counterId:${this.props.counterToUpdate.counterId}`}
                            placeholder="Counter name"
                            type="text"
                        />
                        <input
                            id="counterValue"
                            name="counterValue"
                            defaultValue={this.props.counterToUpdate.counterValue}
                            key={`counterValue:${this.props.counterToUpdate.counterId}`}
                            placeholder="Initial Count"
                            type="number"
                        />
                        <button id="submit">Update counter</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.props.onFormSubmit}>
                        <input
                            id="counterName"
                            name="counterName"
                            placeholder="Counter name"
                            type="text"
                        />
                        <input
                            id="counterValue"
                            name="counterValue"
                            placeholder="Initial Count"
                            type="number"
                        />
                        <button id="submit">Add counter</button>
                    </form>
                </div>
            );
        }
    }

    //
    // validateCounterName(event) {
    //     // Validate field
    //     return event.target.value;
    // }
    //
    // validateCounterValue(event) {
    //     // Validate field
    //     return event.target.value;
    // }
}

export default FormComponent;