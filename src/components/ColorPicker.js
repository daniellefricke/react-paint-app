import React, {Component} from 'react'

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: ''
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
