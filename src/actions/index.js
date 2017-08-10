import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constant.js';
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}
export const deleteReminder = (id)=>{
  const action = {
    type:DELETE_REMINDER,
    id
  }
  console.log('action deleteReminder', action);
  return action;
}
export const clearReminder = ()=>{
  const action = {
    type: CLEAR_REMINDER,
  }
  return action;
}
