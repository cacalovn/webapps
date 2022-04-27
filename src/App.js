import './App.css';
import React, { Component } from 'react'
import Home from "./Home"
import AddCounter from "./AddCounter"
import { Routes, Route,Link} from "react-router-dom"
import MinCounter from './MinCounter';
import {Grid} from '@mui/material';

class App extends Component {
  state = {
    counter: 0,
  };

  increase = event => {
    this.setState({counter:this.state.counter + 1});
  }

  decrease = event => {
    this.setState({counter:this.state.counter - 1});
  }

  render(){
    return (
      <div className="App">
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/second">Counter+</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/third">Counter-</Link>
          </Grid>
        </Grid>
        <p></p>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="second" element={ <AddCounter data={ {counter: this.state.counter}} increase={this.increase}/> } />
          <Route path="third" element={ <MinCounter data={ {counter: this.state.counter}} decrease={this.decrease}/> } />
        </Routes>
      </div>
    );
  }
}

export default App;
