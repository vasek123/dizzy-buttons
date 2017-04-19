import React, { Component } from 'react';

import DizzyButton from './DizzyButton';
import Button from './Button';

const fontsStyles = [
  { fontFamily: "'Slabo 27px', serif" },
  { fontFamily: "'Rubik Mono One', sans-serif" },
  { fontFamily: "'Arvo', serif" },
  { fontFamily: "'League Script', cursive" },
  { fontFamily: "'Roboto Mono', monospace" },
  { fontFamily: "'Gloria Hallelujah', cursive" },
  { fontFamily: "'Quicksand', sans-serif" },
  { fontFamily: "'Amatic SC', cursive" },
  { fontFamily: "'Graduate', cursive" }
]

const baseStyle = {
  fontSize: 12
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DizzyButton
          baseStyle={baseStyle}
          fontsStyles={fontsStyles}
          component={Button}
        >
          Test test
        </DizzyButton>
      </div>
    );
  }
}

export default App;
