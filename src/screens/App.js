import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router'
import Form from '../components/Form'
import FormTwo from '../components/FormTwo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      slug: '',
      accept: false
    };
  }

  onSubmitOne = values => {
    console.log('Values1', values);
    this.setState({
      first: values.first,
      last: values.last,
      slug: `${Date.now()} - Slug`
    }, () => console.log(this.state))
  };

  onSubmitTwo = values => {
    console.log('Values2', values);
  };

  render() {
    console.log("Doidera", this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form onSubmit={this.onSubmitOne} />
        <FormTwo
          onSubmit={this.onSubmitTwo}
          initialValues={{ slug: this.state.slug, accept: this.state.accept }} />
      </div>
    );
  }
}



export default withRouter(App);
