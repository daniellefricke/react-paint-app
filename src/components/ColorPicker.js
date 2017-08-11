// Leveraged code from W3Schools for html color picker: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_color

import React, { PropTypes } from "react";

export default function ColorPicker(props){
  const { action, color } = props;
  return (
    <input
      type="color"
      className="favcolor"
      defaultValue={color}
      onChange={ (e) => {
        action(e.target.value)
      }}
    />
  )
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}
