import React, { Component } from 'react';
import './App.css';

const tasks = [
  {
    id: 2,
    title: "Dunning",
    description: "sending dunning letters to clients for uncoll cash",
    completed: false
  },
  {
    id: 3,
    title: "Dunning",
    description: "sending dunning letters to clients for uncoll cash",
    completed: false
  },
  {
    id: 4,
    title: "Dunning",
    description: "sending dunning letters to clients for uncoll cash",
    completed: false
  },
  {
    id: 5,
    title: "Dunning",
    description: "sending dunning letters to clients for uncoll cash",
    completed: false
  }
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
    return this.setstatus({viewCompleted: true})
  }
  return this.setstatus({viewCompleted: false})
}


renderTabList = () => {
  
}
export default App;
