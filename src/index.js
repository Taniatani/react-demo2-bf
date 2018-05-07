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
// function test(place ='Zootopia', car = 'flying'){
//   return <div>
//           <h2>She wanna go somewhere like {place} by {car} . </h2>
//           <p className = "test_msg">Can you hear me?!!</p>
//         </div>
// }
// ReactDOM.render(
//   test("Cox's Bazar" , "train"),
//   document.getElementById('root')
// );


 //Tuto : 7 - clock app

// let clock = function () {
//   return <h2>Current time is {new Date().toLocaleTimeString()}</h2>
// }
//
// setInterval (function(){
//  ReactDOM.render(
//    clock(),
//    document.getElementById('root')
//  );
// },1000);

 //Tuto : 8 - Comps and props
//component by using function
// function Place(props){
//   return<h2>She wanna go somewhere like {props.name}.</h2>
// }

//component by using class
// class Place extends React.Component{
//   render() {
//     return<h2>She wanna go somewhere like {this.props.name}.</h2>
//   }
// }


// component in another component
// function Place(props){
//   return<h2>She wanna go somewhere like {props.name} by {props.car}</h2>
//  }
//
//  function AllPlace(props){
//    return<div>
//     <Place name = 'Island' car = 'air'/>
//     <Place name = 'Sea' car = 'Flying'/>
//    </div>
//   }
//
// ReactDOM.render(
//   <AllPlace/>,
//   document.getElementById('root')
//
// );

 //Tuto : 9 - States and lifecycle


// function Clock() {
//    return <h2>Current time is {new Date().toLocaleTimeString()}</h2>
//  }

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    }
  }
  render() {
    return <h2>Current time is {this.state.date.toLocaleTimeString()}</h2>
  }
}
function time() {
  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
}
 // setInterval (function(){
 // time();
 // },1000);

 setInterval (time,1000);
