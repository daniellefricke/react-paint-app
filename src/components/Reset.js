import React, { Component } from "react";

class Reset extends Component{
  render(){
    return(
      <div>
        <button
          type="button"
          // onClick={this.onClick.bind(this)}
          >RESET</button>
        </div>
      )
    }
  }

export default Reset

// Look into Force Update functionality: https://facebook.github.io/react/docs/react-component.html#forceupdate
// Need to pass action to parent so that it can be passed down to Canvas component
