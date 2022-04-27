import React, { Component } from 'react'
import {Button} from "@mui/material";

class Home extends Component {
    delete = () => {
      document.getElementById("txt").value = "";
      this.setState({ inputValue: "" });
    }

    state = {
      inputValue: "",
    };

    changeText = event => {
      this.setState({ inputValue: event.target.value });
    }

    render()
    {return (
      <div>
        <h1>insert text to show it on label</h1>
        <form>
          <label id="lbl">{this.state.inputValue}</label>
          <p></p>
          <input id="txt" type='text' onChange={this.changeText}></input>
          <p></p>
        </form>
        <Button variant="contained" color="secondary" onClick={this.delete}>Delete</Button>
      </div>
    );
   }
}
  
export default Home;