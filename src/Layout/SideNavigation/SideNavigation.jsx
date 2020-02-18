import React, { useState } from "react";
import Icon from "../../components/Icon/Icon";
import "./SideNavigation.scss";

const SideNavivation = props => {
  const { headerName, items } = props;
  const [openedNav, toggleNav] = useState(false);

  const toggleSubMenuNav = index => {
    document.getElementById(index).classList.toggle("d-block");
    toggleNav(true);
  };

  return (
    <ul className="gn-menu-main">
      <li className={`brand ${openedNav ? "gn-selected" : ""}`}>
        {openedNav ? (
          <div className="headerName">| &nbsp; {headerName}</div>
        ) : null}
      </li>

      <li
        onMouseOver={() => toggleNav(true)}
        onMouseOut={() => toggleNav(false)}
      >
        <nav className={`gn-open-part ${openedNav ? "gn-open-all" : ""}`}>
          <div className="gn-scroller">
            <ul className="gn-menu">
              {items.map((navItem, index) => {
                return navItem.subItems ? (
                  <li key={index} onClick={() => toggleSubMenuNav(index)}>
                    <a href="javascript:void(0);" className="gn-icon">
                      <Icon name={navItem.icon} className="gn-left-icon" />
                      {navItem.text}
                      <Icon
                        name="fas fa-caret-down"
                        style={{ position: "absolute", right: "0" }}
                      />
                    </a>
                    <ul id={index} className="gn-submenu">
                      {navItem.subItems.map((subItem, index) => {
                        return (
                          <li key={index}>
                            <a href={subItem.link} className="gn-icon">
                              {subItem.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <a href={navItem.link} className="gn-icon">
                      <Icon name={navItem.icon} className="gn-left-icon" />
                      {navItem.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </li>
    </ul>
  );
};

export default SideNavivation;
