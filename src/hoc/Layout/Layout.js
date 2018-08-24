import React, { Component } from "react";
//import classes from './Layout.css'
import Aux from "../Aux/Aux";
import Toolbar from '../../components/Navigation/Toolbar'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main>
        {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
