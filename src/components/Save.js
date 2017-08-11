import React, { Component } from "react";

class Save extends Component{
  render(){
    const { action } = this.props
    return(
      <div>
        <button
          type="button"
          onClick={(e) => { action(e.target.value)}}
          >Save</button>
        </div>
      )
    }
  }

export default Save;
