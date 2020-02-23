import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ToDos from './ToDos'
import uuid from 'uuid'
import AddToDo from './AddToDo';



class App extends Component{

  state = {
    todos: [ 
      {
        id : 1,
        title : "make breakfast",
        completed : false
      },

      {
        id : 2,
        title : "make breakfast",
        completed : false
      }, 

      {
        id : 3,
        title : "make breakfast",
        completed : false
      }
      
    ]

  }

  // update each todo completed 
  markComplete = id => {
    this.setState( {
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = (!todo.completed)
        }
        return todo;
      })
    })
  }

  // delete todo 

  delToDo = id => {
    this.setState( {
      // filter the todos that doesn't have todo.id == id 
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // addToDo 

  addToDo = title => {

    // create new todo object
    const newToDo = {
      id : uuid.v4(), 
      title :title,
      completed : false
    }

    // concanate the new todo at the end of the list
    this.setState( {
      todos : [...this.state.todos, newToDo]
    })
  }
  render(){
    return (
    
      <div className="App">
  
        <Header />
        <AddToDo addToDo={this.addToDo}/>
        <ToDos 
          todos={this.state.todos} 
          markComplete = {this.markComplete}
          delToDo = {this.delToDo}
        /> 
       
      </div>
    );

  }
  
}

export default App;
