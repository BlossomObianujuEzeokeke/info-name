import React from 'react'
import FRInput from './FRInput'

const FRParentInput = () => {
constructor(props){
  super(props)
    this.inputRef = React.createRef()
}
  }


clickHandler = () => {
    this.inputRef.current.focus()
}

  return (
    <div>
        <FRInput ref = {this.inputRef } />
        <button onClick = {this.clickHandler}> Focus Input</button>
    </div>
  )
}

export default FRParentInput