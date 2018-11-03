import React, { Component } from 'react'

export default class BookInput extends Component {

  state = {
    title: '',
    author: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBook(this.state)
    this.setState({
      title: '',
      author: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange} /><br />
          <label>Author:</label>
          <input type='text' value={this.state.author} name='author' onChange={this.handleChange} /><br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
