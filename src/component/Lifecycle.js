// ===============================
// MOUNTING PHASES

import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'

class Lifecycle extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: "Blossom"
  }
  console.log("LifecycleA constructor");
}

// =======================================

static getDerivedStateFromProps(props, state) {
  console.log("LifecycleA getDerivedStateFromProps");
  return null
}

// =========================================
componentDidMount() {
 console.log("LifecycleA componentDidMount");
}

// ===========================================

  render() {
    console.log("LifecycleA render");
    return ( 
      <div>
        Lifecycle
      </div>
    )
  }
}

export default Lifecycle
