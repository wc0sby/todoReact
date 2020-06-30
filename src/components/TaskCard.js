import React, { Component } from 'react'

export default class Task extends Component{
  render(){
    return(
      <div className = "Task-Card">
        <div className = "Card-Container">
          <div className = "Card-Section-Container" id = "Left-Card">
            <div className = "Card-Section">{`Task: ${this.props.task}`}</div>
            <div className = "Card-Section">{`Description: ${this.props.desc}`}</div>
          </div>
          <div className = "Card-Section-Container" id = "Right-Card">
            <div className = "Card-Section">{`Create Date: ${this.props.create}`}</div>
            <div className = "Card-Section">{`Due Date: ${this.props.due}`}</div>
          </div>
          <button 
            className = "Delete"
            onClick = {()=>this.props.clickaction(this.props.id)}
          >
            <span role="img" aria-label="delete-icon">🗑️</span>
          </button>
        </div>
      </div>
    )
  }
}