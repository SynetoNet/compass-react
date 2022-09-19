import React from "react";
import PropTypes from "prop-types";

import ListActions from "./ListActions";

const ListItem = ({ label, children, actions, tabbed }) => {
  if (tabbed) {
    return (
      <>
        <dt className="list-item list-label">{label}</dt>
        <dd className="list-item list-value">
          {children}
          {renderActions()}
        </dd>
      </>
    );
  }

  return (
    <li className="list-item">
      <div className="list-label">{label}</div>
      <div className="list-value">{children}</div>
      {renderActions()}
    </li>
  );

  function renderActions() {
    if (!actions) {
      return null;
    }

    const _actions = actions.map(action => ({
      ...action,
      onSelect() {
        action.onSelect(label);
      }
    }));

    return <ListActions actions={_actions} />;
  }
};

ListItem.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(["auto", "tabbed"])
};

export default ListItem;
