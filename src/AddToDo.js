import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title : ""
    }

    onSubmit = (e) => {
        // prevent the page from reload
        e.preventDefault()
        this.props.addToDo(this.state.title)
        this.setState({title : ""})
    }

    onChange = (e) => {
        this.setState( { title : e.target.value })
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>

                    {/* Input Field  */}
                    <input
                        type = "text"
                        name = "title"
                        placeholder = "Add new todo"
                        onChange = {this.onChange}
                    />

                    {/* Submit Button */}

                    <input
                        type = "submit"
                        value = "Submit"
                        className ="btn"

                    />



                </form>
                
            </div>
        )
    }
}

export default AddToDo
