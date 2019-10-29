import React from 'react';
import './App.css';
import axios from 'axios';

// local imports below
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };
  componentDidMount() {
    axios.get('https://api.github.com/users/colinbazzano')
      .then(response => {
        this.setState({
           user: response.data });
      })
      .catch(error => console.error(error));
  }

  fetchFollowers = () => {
    axios.get('https://api.github.com/users/colinbazzano/followers')
    .then(response => {
      this.setState({
        followers: response.data
      });
    })
    .catch(error => console.log('Not here!', error))
  }
    // axios.get(this.state.user.followers_url)
    // .then(response => this.setState({ followers: response.data.followers_url }))
    // .catch(error => console.log('Oh no!', error));

  // fetchFollowers = () => {
  //   axios.get(`https://api.github.com/users/colinbazzano/followers`)
  //   .then(response => {
  //     this.setState({
  //       user: response.data
  //     });
  //   })
  //   .catch(error => console.log(error));
  // }

  render() {
    return (
      <div className="App">
        <h1>Github User Cards!</h1>
        <button onClick={this.fetchFollowers}> Check out my Followers!</button>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
