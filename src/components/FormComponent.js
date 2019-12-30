import React from 'react';

class FormComponent extends React.Component {
    render() {
        if (this.props.counterToUpdate !== false) {
            return (
                <div>
                    <form onSubmit={this.props.onFormUpdate}>
                        <div className="row app-form-row">
                            <div className="six columns">
                                <input type="hidden"
                                       key={`counterIdToUpdate:${this.props.counterToUpdate.counterId}`}
                                       defaultValue={this.props.counterToUpdate.counterId} name="counterId"/>
                                <input
                                    id="counterName"
                                    className="u-full-width"
                                    name="counterName"
                                    defaultValue={this.props.counterToUpdate.counterName}
                                    key={`counterId:${this.props.counterToUpdate.counterId}`}
                                    placeholder="Counter name"
                                    type="text"
                                />
                            </div>
                            <div className="six columns">
                                <input
                                    id="counterValue"
                                    name="counterValue"
                                    className="u-full-width"
                                    defaultValue={this.props.counterToUpdate.counterValue}
                                    key={`counterValue:${this.props.counterToUpdate.counterId}`}
                                    placeholder="Initial Count"
                                    type="number"
                                />
                            </div>
                            <button id="submit" className="button-primary update-button">Update counter</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.props.onFormSubmit}>
                        <div className="row flex-row">
                            <h4 className="text-left">iCount</h4>
                            <div className="four columns d-block">
                                <input
                                    id="counterName"
                                    name="counterName"
                                    placeholder="Counter name"
                                    type="text"
                                />
                            </div>
                            <div className="four columns d-block">
                                <input
                                    id="counterValue"
                                    name="counterValue"
                                    placeholder="Initial Count"
                                    type="number"
                                />
                            </div>
                            <div className="four columns">
                                <button id="submit" className="button-primary submit-button">Create counter</button>
                            </div>
                        </div>
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