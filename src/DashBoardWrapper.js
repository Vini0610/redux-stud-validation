import React, { Component } from 'react';
import Header from './Header';
import EmpForm from './EmpForm';
import { connect } from 'react-redux';
import EmpTable from './EmpTable';
import { editStud, deleteStud } from './action';


class DashBoardWrapper extends Component {


    editItem = (index) => {
        this.props.editStud(index);
    }
    deleteItem = (index) => {
        this.props.deleteStud(index);
    }

    render() {
        return (
            <div>
                <Header />
                <EmpForm currentStudent={this.props.currentStudent} isUpdateNeeded={this.props.isUpdateNeeded} />
                {this.props.isArrayHasLength ? <EmpTable studentArray={this.props.fullStudArray} editItem={this.editItem} deleteItem={this.deleteItem} /> : null}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        currentStudent: state.currentStudent,
        isArrayHasLength: state.isArrayHasValue,
        updateIndex: state.updateDataIndex,
        isUpdateNeeded: state.isUpdateNeeded,
        fullStudArray: state.studentArray
    };
}
export default connect(mapStateToProps, { editStud, deleteStud })(DashBoardWrapper);