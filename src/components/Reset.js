import React, { Component } from "react";

class Reset extends Component{
  resetCanvas(){
    const resetCanvas = document.getElementById("resetCanvas")
    const reset = resetCanvas.getContext("2d")
    reset.clearRect(0, 0, resetCanvas.width, resetCanvas.height);
}
  render(){
    return(
      <div>
        <button
          type="button"
          onClick={ this.resetCanvas }
          >RESET</button>
        </div>
      )
    }
  }

export default Reset

// Look into Force Update functionality: https://facebook.github.io/react/docs/react-component.html#forceupdate
