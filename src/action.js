import { ADD_STUD, EDIT_STUD, DELETE_STUD, UPDATE_STUD, CLEAR_FORM } from './actionType';

export const addStud = student => ({
  type: ADD_STUD,
  payload: {
    student
  }
});
export const editStud = id => ({
  type: EDIT_STUD,
  payload: {
    id
  }
});
export const updateStud = (updatedStud) => ({
  type: UPDATE_STUD,
  payload: {
    updatedStud
  }
});
export const deleteStud = id => ({
  type: DELETE_STUD,
  payload: {
    id
  }
});
export const clearForm = () => ({
  type: CLEAR_FORM
});