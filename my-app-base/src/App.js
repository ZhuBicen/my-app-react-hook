import React, { Component } from 'react';
import './App.css';
import TokenForm from './TokenForm'
export default class App extends Component {

  state = {
    token: null
  };

  componentDidMount() {
    this.setState({ token: sessionStorage.getItem("token") });
  }

  setToken = token => {
    sessionStorage.setItem("token", token);
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return (
      <div>
        <h1>Starrry Eyed</h1>
        {token ? token : <TokenForm setToken={this.setToken} />}
      </div>
    )
  }

};