import React, { Component } from 'react'
import {Button} from "@mui/material";

class MinCounter extends Component {
    render(){
    return (
        <div>
            <h1>Press button to decrease 1</h1>
            <Button variant="contained" color="secondary" onClick={this.props.decrease}>{this.props.data.counter}</Button>
        </div>
    );
    }
}

export default MinCounter