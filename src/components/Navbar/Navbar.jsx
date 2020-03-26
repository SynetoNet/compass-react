import React from "react";
import BSNavbar from 'react-bootstrap/Navbar'
import "./Navbar.scss"

class Navbar extends React.Component {
  static Brand = BSNavbar.Brand;
  static Toggle = BSNavbar.Toggle;
  static Collapse = BSNavbar.Collapse;

  render() {
    return <BSNavbar {...this.props} />;
  }
}

export default Navbar;
