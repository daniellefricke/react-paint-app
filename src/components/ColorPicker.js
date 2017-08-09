import React, {Component} from 'react'

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
}
  onDrag(color, c) {
    this.setState({
      color
    })
  }

  render() {
    return (
    <div>
      <h3>Select Color</h3>
        <div>
          <form action="/action_page.php" value={this.state.color} onDrag={this.onDrag.bind(this)} >
            <input type="color" name="favcolor" />
            </form>
       </div>
       {this.state.color}
     </div>
  )}
}

export default Color;
