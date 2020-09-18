import React from 'react';
import './Hello.css';

function Hello() {
    return (
        <div class='f1 tc'>
            <h1>Hello world</h1>
            <p>Welcome to react</p>
            <p>{this.props.greeting}</p>
        </div>
    );
  }

  export default Hello;
