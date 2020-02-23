import React, { Component } from 'react'

export class ToDoItem extends Component {

    // if compeleted true, apply line through
    getStyle = () => {
        return {
            padding : '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const  {id, title} = this.props.todo

        return (
            
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id) } />
                    {"  "} {title}
                    <button onClick={this.props.delToDo.bind(this, id)}> 
                    X 
                    </button>
                </p>
                
            </div>
        )
    }
}

export default ToDoItem
