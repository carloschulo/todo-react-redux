import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createTodo,
  completeTodo,
  deleteTodo,
  deleteAllCompleteTodo
} from "./actions/todos";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);
    this.handleDeleteComplete = this.handleDeleteComplete.bind(this);
    this.state = {
      text: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({ text: "" });
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleComplete(id) {
    this.props.completeTodo(id);
  }

  handleDeleted(id) {
    this.props.deleteTodo(id);
  }

  handleDeleteComplete() {
    this.props.deleteAllCompleteTodo();
  }
  handleShowComplete() {
    this.props.showAllCompleteTodo();
  }
 
  render() {
    return (
      <div className="App">
        <form
          className="App-intro"
          onSubmit={this.handleSubmit}
          ref={input => (this.form = input)}
        >
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
            name="text"
            placeholder="create a todo"
            ref={input => this.input = input}
            required
          />
        </form>
        <br />

        {this.props.todos.map(({ text, id, completed }) => {
          return (
            <div key={id}>
              {text}
              <input
                onChange={() => this.handleComplete(id)}
                type="checkbox"
                value={completed}
              />
              <button onClick={() => this.handleDeleted(id)}>Delete</button>
            </div>
          );
        })}
        <br />
        <hr />
        <br />
        <button onClick={this.handleDeleteComplete}>
          Delete All Completed
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  {
    createTodo,
    completeTodo,
    deleteTodo,
    deleteAllCompleteTodo
  }
)(App);
