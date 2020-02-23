import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

export class ToDos extends Component {
    render() {
        return (

            this.props.todos.map( (todo) =>

                <ToDoItem 
                    id={todo.id} 
                    todo={todo}  
                    markComplete = {this.props.markComplete}
                    delToDo = {this.props.delToDo}
                />
            ) 

        )
    }
}

export default ToDos
