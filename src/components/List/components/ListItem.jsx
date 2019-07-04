import React from "react";
import PropTypes from "prop-types";

import ListActions from "./ListActions";

const ListItem = ({ label, children, actions, tabbed }) => {
  if (tabbed) {
    return (
      <>
        <dt className="list_item list_label">{label}</dt>
        <dd className="list_item list_value">
          {children}
          {renderActions()}
        </dd>
      </>
    );
  }

  return (
    <li className="list_item">
      <div className="list_label">{label}</div>
      <div className="list_value">{children}</div>
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
