import React, { Component } from "react";
import { connect } from "react-redux";

import { createTodo, completeTodo } from "./actions/todos";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
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
  render() {
    return (
      <div className="App">
        <form
          className="App-intro"
          onSubmit={this.handleSubmit}
          ref={input => this.form = input}
        >
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
            name="text"
            placeholder="create a todo"
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
            </div>
          );
        })}

      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { createTodo, completeTodo }
)(App);
