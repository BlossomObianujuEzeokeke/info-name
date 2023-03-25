// import React, { Component } from "react" 


// class Welcome extends Component {
// render () { 
//     return  <h1>Hello {this.props.name}, you are {this.props.age} years old</h1>
// }
// }

// export default Welcome

// =================================================

// DESTRUCTURING
// import React, { Component } from 'react'

// class Welcome extends Component {
//   render() {
//     const {name, age} = this.props
//     return (
//       <div>
//         Welcome {name} you are {age} years old
//       </div>
//     )
//   }
// }

// export default Welcome

// =============================================
// DESTRUCTURING

import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
     Welcome {this.props.name}, you are {this.props.age} years old {this.props.children}
      </div>
    )
  }
}

export default Welcome
























