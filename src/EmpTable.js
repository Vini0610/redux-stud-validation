import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
let studentArray;

class EmpTable extends Component {

    render() {
        // console.log(this.props);
        studentArray = this.props.studentArray
        studentArray.sort((a, b) => { return b.stuTotal - a.stuTotal });

        studentArray.forEach((eachStudent, index) => {
            if (eachStudent["stuStatus"] === "Pass") {
                eachStudent["stuRank"] = index + 1;
            } else {
                eachStudent["stuRank"] = 0;
            }
        });
        // console.log("In render method")
        return (
            <div className="container mt-4">
                <h2>Student Table</h2>

                <table className="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th>Stud Id</th>
                            <th>Name</th>
                            <th>Mark 1</th>
                            <th>Mark 2</th>
                            <th>Mark 3</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Rank</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentArray.map((singleStud, index) => (
                            <tr key={index}>
                                <td> {singleStud.stuId} </td>
                                <td> {singleStud.stuName}</td>
                                <td> {singleStud.stuMark1}</td>
                                <td> {singleStud.stuMark2}</td>
                                <td> {singleStud.stuMark3}</td>
                                <td> {singleStud.stuTotal}</td>
                                <td> {singleStud.stuStatus}</td>
                                <td> {singleStud.stuRank}</td>
                                <td>
                                    <button className="btn btn-primary mr-2" onClick={() => this.props.editItem(index)}> Edit </button>
                                    <button className="btn btn-secondary" onClick={() => this.props.deleteItem(index)}> Delete </button>
                                </td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
        );
    }
    componentDidUpdate(prevProps) {
        // console.log("In component did update")
        if (prevProps.studentArray !== this.props.studentArray) {

            studentArray = this.props.studentArray

        }
    }

}

export default EmpTable;