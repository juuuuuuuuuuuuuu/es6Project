import React, { Component } from 'react';
import ExampleReduce from './ExampleReduce';
import ExamplePromise from "./ExamplePromise";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <ExampleReduce/>
                <ExamplePromise/>
            </div>
        );
    }
}

export default Main;
