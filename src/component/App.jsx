import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminder } from '../actions';
import moment from 'moment';
import '../App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }
  renderReminders() {
   const { reminders } = this.props;
   return (
     <ul className="list-group ">
       {
         reminders.map(reminder => {
           return (
             <li key={reminder.id} className="list-group-item">
                 <div className=" list-item">{reminder.text}</div>
                  <div className=" list-item dueDate"><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                 <div className=" list-item delete-item"
                   onClick = {() => this.deleteReminder(reminder.id)}
                 >
                   &#x2715;
                 </div>
             </li>
           )
         })
       }
     </ul>
   )
 }
  addReminder(){

     this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id){
    this.props.deleteReminder(id);
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">
          ReminderPro
        </div>
        <form className="form-inline">
          <div className="form-group form-group-lg">
            <input
              type="text"
              className = "form-control"
              placeholder="I Have To...."
              onChange = {event => this.setState({text:event.target.value})}
              />
            <input
              type = "datetime-local"
              className = "form-control"
              onChange = {event => this.setState({dueDate:event.target.value})}
              />
          </div>
          <button
            type = "button"
            className = " btn-lg btn-success"
            onClick = {() => this.addReminder()}
          >
            Remind Me
          </button>

        </form>
        {this.renderReminders()}
        <div
          className = "btn btn-danger"
          onClick = {()=> this.props.clearReminder()}
          >
          Clear Reminder
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
console.log('state', state);
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder})(App);
