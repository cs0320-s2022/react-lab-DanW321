import React from 'react';
import logo from './logo.svg';
import './App.css';


function TextBox(props : {label: string, change : (val : string) => void}) {


  return (
      <div>
          <label>{props.label}</label>
          <input type={'text'} onChange={event => props.change(event.target.value)}></input>
      </div>
  );
}

export default TextBox;
