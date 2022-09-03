import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  
  // babel will put the state in constructor by default
  state = {advice: ''};

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip;
      this.setState({advice: advice});
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchData}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
