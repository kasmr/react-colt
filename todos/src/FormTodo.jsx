import React, { Component } from 'react';
import { v4 as uuidV4 } from 'uuid';

export default class FormTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text: this.state.text, id: uuidV4() };
    this.props.addTodo(newTodo);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div className='form-div'>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='New todo'
            value={this.state.text}
            onChange={this.onChange}
            type='text'
          />
        </form>
        <button type='submit' onClick={this.handleSubmit}>
          Add todo
        </button>
      </div>
    );
  }
}
