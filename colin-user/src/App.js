import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userNames: ""
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/colinbazzano')
    .then(response => {
      this.setState({
        users: response.data
      });
      console.log(response);
    })
    .catch(error => console.log('Oh no!', error));
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Cards!</h1>
        <div className="myself">
          {this.state.users}
        </div>
      </div>
    );
  }
}

export default App;
