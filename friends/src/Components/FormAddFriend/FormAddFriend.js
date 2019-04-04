import React, { Component } from 'react';
import axios from 'axios';

class FormAddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
    }
  }

  onChagne = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  addBuddy = event => {
    event.preventDefault();
    // Get form data out of state
    const gotcha = { 
      name: this.state.name, 
      email: this.state.email, 
      age: this.state.age 
    }
    console.log(`Name Test: ${gotcha.name}`);
    console.log(`Email Test: ${gotcha.email}`);
    console.log(`Age Test: ${gotcha.age}`);
    
    axios.post('http://localhost:5000/friends', gotcha)
      .then(res => {
        this.props.updateFriendsList(res.data)
        console.log(`Success: ${res.data}`);
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }

  render() {
    return (
      <form onSubmit={this.addBuddy}>
        <input 
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.onChagne}
          placeholder='Name...'
        />
        <input 
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.onChagne}
          placeholder='Email...'
        />
        <input 
          type='text'
          name='age'
          value={this.state.age}
          onChange={this.onChagne}
          placeholder='Age...'
        />
        <button onClick={this.addBuddy}>DAMMIT</button>
      </form>
    )
  }
}

export default FormAddFriend;
