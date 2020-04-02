import React from 'react';

class GroupMasterAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phoneNumber: '',
            mobileNumber: '',
            errorMessage: '',
            showError: false,
            errorMessageMobile: '',
            showMobileError: false
        }
    }

    handleChange = (inputObject) => {
        this.setState({ ...inputObject })
    }


    handleBlur = () => {
        console.log(this.state, "test" + (/^[A-Za-z0-9]+$/).test(this.state.name))

        if (!(/^[A-Za-z0-9 ]+$/).test(this.state.name)) {
            this.setState({ errorMessage: "Name shouldn't contain any special characters", showError: true })
        }
        else {
            this.setState({ errorMessage: '', showError: false })
        }
    }

    handleMobileBlur = () => {
        if (this.state.mobileNumber.length > 10) {
            this.setState({ errorMessageMobile: "Mobile Number can't contain more than 10 digits", showMobileError: true })
        }
        else {
            this.setState({ showMobileError: false, errorMessageMobile: '' })
        }
    }

    handleSave = () => {
        console.log("handleSave")
    }

    render() {
        return (<div>
            <h1>Customer Master</h1>
            <div className="row">
                <div className="col-sm-2 padding-between">Name</div>
                <div className="col-sm-2 padding-between">
                    <input onBlur={this.handleBlur} onChange={(event) => this.handleChange({ name: event.target.value })} />
                </div>
                {this.state.showError && <span className="col-sm-4 padding-between error_msg">{this.state.errorMessage}</span>}
            </div>
            <div className="row">
                <div className="col-sm-2 padding-between">Address</div>
                <div className="col-sm-2 padding-between">
                    <textarea onChange={(event) => this.handleChange({ address: event.target.value })} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 padding-between">Phone Number</div>
                <div className="col-sm-2 padding-between">
                    <input type="number" onChange={(event) => this.handleChange({ phoneNumber: event.target.value })} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 padding-between">Mobile</div>
                <div className="col-sm-2 padding-between">
                    <input type="number" onBlur={this.handleMobileBlur} onChange={(event) => this.handleChange({ mobileNumber: event.target.value })} />
                </div>
                {this.state.showMobileError && <span className="col-sm-4 padding-between error_msg">{this.state.errorMessageMobile}</span>}
            </div>
            <div className="row form-buttons">
                <div className="col-sm-1">
                    <button disabled={this.state.showError || this.state.showMobileError} className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
                <div className="col-sm-1"><button className="btn btn-secondary">Cancel</button></div>
            </div>
        </div>)
    }
}


export default GroupMasterAdd;