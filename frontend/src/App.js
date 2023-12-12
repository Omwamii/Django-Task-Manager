import React, { component } from 'react';
import './App.css';

const tasks = [
]

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks
    }
  }
}

displayCompleted = status => {
  if (status) {
    return this.setstatus
  }
}
export default App;
