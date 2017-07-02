import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo } from './actions/todos';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      text: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({text: ''})
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <form 
        className="App-intro" 
        onSubmit={this.handleSubmit}
        ref={(input)=>this.form = input}
        >
          <input 
          value={this.state.text} 
          onChange={this.handleChange}
          type="text" name="text" 
          placeholder="create a todo"
          />
        </form>
        <br/>
        
          {
            this.props.todos.map(({ text, id }) => {
              return <div key={id}>{text}</div>
            })
        }
        
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  })
  , { createTodo })(App);
