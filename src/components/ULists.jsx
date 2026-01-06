import React from 'react'
import List from './List'

const ULists = (props) => {
  return (
    <ul className={props.className}>
      <List />   
      <List />
       
      <li>
        {" "}
        Time: <span>0:60</span>
      </li>
    </ul>
  );
}

export default ULists