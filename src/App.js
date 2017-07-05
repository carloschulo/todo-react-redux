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
  static propTypes = {
    completeTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func,
    deleteAllCompleteTodo: React.PropTypes.func,
    todos: React.PropTypes.array
  };
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
      <div className="container">
        <form
          className="App-intro"
          onSubmit={this.handleSubmit}
          ref={input => (this.form = input)}
        >
          <div className="form-group">
            <label htmlFor="todo">Add a Todo Item</label>
            <input
              id="todo"
              className="form-control"
              value={this.state.text}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="create a todo"
              ref={input => (this.input = input)}
              required
            />
          </div>
        </form>
        <br />

        {this.props.todos.map(({ text, id, completed }) => {
          return (
            <div key={id} className="todos">
              <input
                onChange={() => this.handleComplete(id)}
                type="checkbox"
                value={completed}
              />
              <span>
                {text}{" "}
              </span>
              <button
                onClick={() => this.handleDeleted(id)}
                className="btn btn-default"
              >
                X
              </button>
            </div>
          );
        })}
        <br />
        <hr />
        <br />
        <button onClick={this.handleDeleteComplete} className="btn btn-default">
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
