// CONDITIONAL RENDERING

import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // ========================================
    // SHORT CIRCUIT OPERATOR
    return this.state.isLoggedIn && <div>You are welcome</div>
    // ==================================================
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Temi</div>
    // ) : (
    //   <div>You are not welcome</div>
    // );
    // ================================
    // USING ELEMENT VARIABLES
    // let Message
    // if(this.state.isLoggedIn) {
    //     Message= <div>Welcome Derin</div>
    // } else {
    //     Message= <div>Bye Derin</div>
    // }
    //  return <div>{Message}</div>
    // =========================================
    // USING IF/ELSE STATEMENTS
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Linda</div>
    // } else {
    //     return <div>Please go back to home</div>
    // }
  }
}

export default UserGreeting;
