import React from 'react'
import ReactDOM from 'react-dom'

let me = 'TT'
let nameObj = {
  fName: 'Harry',
  lName: 'Poter'
}
const test = <h1>Hello {nameObj.fName} {nameObj.lName}! This is {me}</h1>

ReactDOM.render(
  test,
  document.getElementById('root')
);
