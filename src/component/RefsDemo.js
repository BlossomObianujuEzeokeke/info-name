import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

// ===== THIS IS TO HELP FOCUS THE BOX ONLOAD AND COLLECT INPUT =======
componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef);
} 

clickHandler = () => {
    alert(this.inputRef.current.value)
}

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
