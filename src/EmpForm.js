import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmpTable from './EmpTable';
import { connect } from 'react-redux';
import { addStud, updateStud, clearForm } from './action';

class EmpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studData: {
                stuId: this.props.currentStudent.stuId,
                stuName: this.props.currentStudent.stuName,
                stuMark1: this.props.currentStudent.stuMark1,
                stuMark2: this.props.currentStudent.stuMark2,
                stuMark3: this.props.currentStudent.stuMark3,
                stuTotal: this.props.currentStudent.stuTotal,
                stuStatus: this.props.currentStudent.stuStatus
            },
            errors: {}
        }

    }
    handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            studData: {
                ...this.state.studData,
                [name]: value
            }
        });
    }
    isFormValid = () => {
        let fields = this.state.studData;
        let errors = {};
        let formValid = true;
        if (!fields["stuId"] || fields["stuId"] === ' ') {
            formValid = false;
            errors["stuId"] = "This is a required field";
        }
        if (isNaN(fields["stuId"])) {
            formValid = false;
            errors["stuId"] = "Only Number is allowed";
        }
        if (!fields["stuName"]) {
            formValid = false;
            errors["stuName"] = "This is a required field";
        }
        if (!fields["stuMark1"]) {
            formValid = false;
            errors["stuMark1"] = "This is a required field";
        }
        if (isNaN(fields["stuMark1"])) {
            formValid = false;
            errors["stuMark1"] = "Only Number is allowed";
        }
        if (!fields["stuMark2"]) {
            formValid = false;
            errors["stuMark2"] = "This is a required field";
        }
        if (isNaN(fields["stuMark2"])) {
            formValid = false;
            errors["stuMark2"] = "Only Number is allowed";
        }
        if (!fields["stuMark3"]) {
            formValid = false;
            errors["stuMark3"] = "This is a required field";
        }
        if (isNaN(fields["stuMark3"])) {
            formValid = false;
            errors["stuMark3"] = "Only Number is allowed";
        }
        this.setState({ errors: errors });
        return formValid;
    }

    addingNewStud = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            let studentJSON, mark1, mark2, mark3, total, status;
            studentJSON = this.state.studData
            mark1 = parseInt(studentJSON.stuMark1);
            mark2 = parseInt(studentJSON.stuMark2);
            mark3 = parseInt(studentJSON.stuMark3);
            total = mark1 + mark2 + mark3;
            status = ((mark1 || mark2 || mark3) > 40) ? "Pass" : "Fail";
            studentJSON["stuTotal"] = total;
            studentJSON["stuStatus"] = status;
            this.props.addStud(studentJSON);

        }
        return;
    }


    updateItem = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            let studentJSON, mark1, mark2, mark3, total, status;
            studentJSON = this.state.studData
            // console.log(studentJSON)
            mark1 = parseInt(studentJSON.stuMark1);
            mark2 = parseInt(studentJSON.stuMark2);
            mark3 = parseInt(studentJSON.stuMark3);
            total = mark1 + mark2 + mark3;
            status = ((mark1 || mark2 || mark3) > 40) ? "Pass" : "Fail";
            studentJSON["stuTotal"] = total;
            studentJSON["stuStatus"] = status;
            this.props.updateStud(studentJSON);
        }
    }

    cancelUpdate = () => {
        this.props.clearForm();
    }
    render() {

        return (

            <div className="container">
                <h1> Student Validation </h1>
                <form className="form-inline">
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuId">Student Id</label>
                        <input type="text" className="form-control" id="stuId" name="stuId"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuId}
                        // value={this.state.stuId} 
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuId"]}</span>

                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="stuName"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuName}
                        // value={this.state.stuName} 
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuName"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark1">Mark 1</label>
                        <input type="text" className="form-control" id="stuMark1" name="stuMark1"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark1}
                        // value={this.state.stuMark1}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark1"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark2">Mark 2</label>
                        <input type="text" className="form-control" id="stuMark2" name="stuMark2"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark2}
                        // value={this.state.stuMark2}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark2"]}</span>
                    </div>
                    <div className="form-group col-sm-12 my-2">
                        <label className="col-sm-4" htmlFor="stuMark3">Mark 3</label>
                        <input type="text" className="form-control" id="stuMark3" name="stuMark3"
                            onChange={this.handleInputChange}
                            value={this.state.studData.stuMark3}
                        // value={this.state.stuMark3}
                        />
                        <span style={{ color: "red", marginLeft: "5px" }}>{this.state.errors["stuMark3"]}</span>
                    </div>
                    {this.props.isUpdateNeeded ?
                        <div className="col-sm-12 my-2">
                            <button className="btn btn-success mr-2" onClick={this.updateItem}> Update </button>
                            <button className="btn btn-danger" onClick={this.cancelUpdate}> Cancel </button>
                        </div> :
                        <div className="col-sm-12">
                            <button className="btn btn-primary mr-2 my-2" onClick={this.addingNewStud}> Add </button>
                        </div>
                    }
                </form>
            </div>

        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentStudent !== this.props.currentStudent) {
            this.setState({
                studData: {
                    stuId: this.props.currentStudent.stuId,
                    stuName: this.props.currentStudent.stuName,
                    stuMark1: this.props.currentStudent.stuMark1,
                    stuMark2: this.props.currentStudent.stuMark2,
                    stuMark3: this.props.currentStudent.stuMark3
                }
            });
        }
    }
}

export default connect(null, { addStud, updateStud, clearForm })(EmpForm);