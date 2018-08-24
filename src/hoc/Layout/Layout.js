import React, { Component } from "react";
//import classes from './Layout.css'
import Aux from "../Aux/Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div>Layout TODO</div>
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
