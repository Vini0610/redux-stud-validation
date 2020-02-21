import { ADD_STUD, EDIT_STUD, DELETE_STUD, UPDATE_STUD, CLEAR_FORM } from './actionType';

const initialState = {
    currentStudent: {
        stuId: "",
        stuName: "",
        stuMark1: "",
        stuMark2: "",
        stuMark3: "",
        stuTotal: "",
        stuStatus: "",
        stuRank: ""
    },
    updatedStud: [],
    studentArray: [],
    isArrayHasValue: false,
    isUpdateNeeded: false,
    updateDataIndex: 0

};

export default function tableReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUD: {
            const { student } = action.payload;
            return {
                ...state,
                studentArray: [...state.studentArray, student],
                isArrayHasValue: true,
                currentStudent: {
                    stuId: "",
                    stuName: "",
                    stuMark1: "",
                    stuMark2: "",
                    stuMark3: "",
                    stuTotal: "",
                    stuStatus: ""

                }
            }
        }
        case EDIT_STUD: {
            const { id } = action.payload;
            return {
                ...state,
                updateDataIndex: id,
                isUpdateNeeded: true,
                currentStudent: state.studentArray[id]
            };
        }
        case UPDATE_STUD: {
            const { updatedStud } = action.payload;
            let tempReferenceArray = state.studentArray;
            tempReferenceArray[state.updateDataIndex] = updatedStud;

            return {
                ...state,
                studentArray: tempReferenceArray,
                currentStudent: {
                    stuId: "",
                    stuName: "",
                    stuMark1: "",
                    stuMark2: "",
                    stuMark3: "",
                    stuTotal: "",
                    stuStatus: ""
                },
                isUpdateNeeded: false
            }
        }
        case DELETE_STUD: {
            const { id } = action.payload;
            let tempReferenceArray = state.studentArray;
            tempReferenceArray.splice(id, 1);
            let isArrayHasData = tempReferenceArray.length === 0 ? false : true;
            return {
                ...state,
                studentArray: tempReferenceArray,
                isArrayHasValue: isArrayHasData,
                currentStudent: {
                    stuId: "",
                    stuName: "",
                    stuMark1: "",
                    stuMark2: "",
                    stuMark3: "",
                    stuTotal: "",
                    stuStatus: ""
                }
            }
        }
        case CLEAR_FORM: {
            return {
                ...state,
                currentStudent: {
                    stuId: "",
                    stuName: "",
                    stuMark1: "",
                    stuMark2: "",
                    stuMark3: "",
                    stuTotal: "",
                    stuStatus: ""

                },
                isUpdateNeeded: false
            }
        }
        default:
            return state;
    }

}