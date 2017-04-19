import React from 'react';

function BasicWrapper(props) {
  const style = {
    cursor: 'pointer'
  }
  return (
    <div style={style}>{props.children}</div>
  )
}

export default BasicWrapper;
