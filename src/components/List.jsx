import React from 'react'

const List = (props) => {
  return (
    <li>
      {props.list}{props.span ? <span>0</span> : null}
    </li>
  );
}

export default List