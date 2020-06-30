import React from 'react';
import './App.css';
import Task from './components/TaskCard'

class App extends React.Component {
  state = {
    controlInputTitle: '',
    controlInputDescription: '',
    controlInputDue: '',
    toDoList: []
  }

  handleChange(e, field) {
    this.setState({[field]: e.target.value})
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleAddItem()
    }
  }

  handleAddItem() {
    const newToDoList = this.state.toDoList.slice()
    const objbuilder = {
      task: this.state.controlInputTitle,
      desc: this.state.controlInputDescription,
      create: Date(),
      due: this.state.controlInputDue,
      deleted: false
    }
    newToDoList.push(objbuilder)
    console.log(newToDoList)
    this.setState({
        toDoList: newToDoList,
        controlInputTitle: '',
        controlInputDescription: '',
        controlInputDue: '',
    })
  }

  renderToDos() {
    const list = this.state.toDoList
    return list.map((i,k)=>{
       return (
        //  <div key={k} className="ListItem">
        //    {i}
        //  </div>
         <Task
         key={k}
         task={i.task}
         desc={i.desc}
         create={i.create}
         due={i.due}
         deleted={i.deleted}
       />
          // <li key={k}>{i}</li>
        )
    })
  }

  render() {
    return(
      <div>
        <div className="App">
          <div className="Container">
            <div className="Section">
              <header>What do you need to do?</header>
              <div>
                <div> Title-->
                  <input 
                    type="text"
                    cols="50" 
                    rows="3" 
                    value={this.state.controlInputTitle}
                    onChange={(e, field)=>this.handleChange(e, 'controlInputTitle')}
                  />
                </div>
                <div> Description-->
                  <input 
                    type="text"
                    cols="50" 
                    value={this.state.controlInputDescription}
                    onChange={(e, field)=>this.handleChange(e, 'controlInputDescription')}
                  />
                </div>
                <div> Due Date-->
                  <input 
                    type="text"
                    cols="50" 
                    value={this.state.controlInputDue}
                    onChange={(e, field)=>this.handleChange(e, 'controlInputDue')}
                    onKeyPress={(e)=>this.handleKeyDown(e)}
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={()=>{this.handleAddItem()}}
                >Add</button>
              </div>
            </div>
            <div className="Section">
              <header>To Do List</header>
              {this.renderToDos()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
