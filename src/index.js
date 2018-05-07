import React from 'react';
import ReactDOM from 'react-dom';

function Message(props){
  if (props.value) {
    return (<h2>Hello there!</h2>)
  }
  return (<h2>Hi Tink!</h2>)
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:true}
  }

  handleClick = () => {
    this.setState({
      value: !this.state.value
    });
  }

  render(){
    return(
      <div>
        <button onClick = {this.handleClick}>Click to change the content</button>
        <Message value = {this.state.value} />
      </div>
    )
  }
}

ReactDOM.render(
    <Btn/>,
    document.getElementById('root')
)
