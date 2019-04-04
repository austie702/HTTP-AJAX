import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './Components/FriendsList/FriendsList';
import FormAddFriend from './Components/FormAddFriend/FormAddFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  updateFriendsList = data => {
    // this.setState({ friends: data })
    this.setState({ friends: data })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} key={this.state.friends.name} />
        <FormAddFriend updateFriendsList={this.updateFriendsList} />
      </div>
    );
  }
}

export default App;
