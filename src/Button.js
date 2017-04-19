import React from 'react';

function Button(props) {
  const style = {
    width: 100,
    height: 40,
    backgroundColor: 'yellow',
    textAlign: 'center',
    color: 'green',
    borderRadius: 10,
    cursor: 'pointer'
  }

  return (
    <div style={style}>{props.children}</div>
  )
}

export default Button;
