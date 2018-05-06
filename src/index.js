import React from 'react'
import ReactDOM from 'react-dom'

// let me = 'TT'
// let nameObj = {
//   fName: 'Harry',
//   lName: 'Poter'
// }
// const test = <h1>Hello {nameObj.fName} {nameObj.lName}! This is {me}</h1>

//function
 //Tuto : 6
function test(place ='Zootopia', car = 'flying'){
  return <div>
          <h2>She wanna go somewhere like {place} by {car} . </h2>
          <p className = "test_msg">Can you hear me?!!</p>
        </div>
}
ReactDOM.render(
  test("Cox's Bazar" , "train"),
  document.getElementById('root')
);
