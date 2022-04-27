import React, { Component } from 'react'
import {Button} from "@mui/material";

class AddCounter extends Component {
    render(){
    return (
        <div>
            <h1>Press button to add 1</h1>
            <Button variant="contained" color="secondary" onClick={this.props.increase}>{this.props.data.counter}</Button>
        </div>
    );
    }
}

export default AddCounter