import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Icon from "../../components/Icon/Icon";
import PropTypes from "prop-types";
import "./TitleBar.scss";

const TitleBar = props => {
  const { brand, actions = [], title } = props;

  return (
    <div className="title-bar">
      <div className="title-bar-brand-text">
        <div className="title-brand">{brand}</div>
        <div className="title-text">{title}</div>
      </div>

      <ul className="list-group list-group-horizontal me-5">
        {actions.map((action, index) => {
          return action.menuItems ? (
            <Dropdown
              key={index}
              label={
                <div className="title-icon">
                  <Icon name={action.icon} />
                </div>
              }
              items={action.menuItems.map(menuItem => {
                return {
                  label: menuItem.label,
                  onSelect: menuItem.onSelect
                };
              })}
            />
          ) : (
            <a key={index} className="title-icon" href={action.link}>
              <Icon name={action.icon} />
            </a>
          );
        })}
      </ul>
    </div>
  );
};

TitleBar.propTypes = {
  brand: PropTypes.node,
  title: PropTypes.string,
  actions: PropTypes.array
};

export default TitleBar;
