import React         from "react";
import BSNav         from 'react-bootstrap/Nav';
import BSNavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.scss";

class Nav extends React.Component {
  static Item = BSNav.Item;
  static Link = BSNav.Link;
  static NavDropdown = BSNavDropdown;

  render() {
    return <BSNav {...this.props} />;
  }
}

export default Nav;
