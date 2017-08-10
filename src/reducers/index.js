import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constant';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
   let { text, dueDate } = action;
  return{
    text:action.text,
    dueDate,
    id: Math.random()
  }
}
const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}
const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log( 'reminders as state', reminders);
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders',reminders);
      return reminders;
      break;
    case CLEAR_REMINDER:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    default:
      return state;
  }
}
export default reminders;
