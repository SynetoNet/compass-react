import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Dropdown from "../../Dropdown/Dropdown";
import Icon from "../../Icon/Icon";

const ListActions = ({ single, actions }) => {
  const classes =
    classNames({
      ["list-actions--single"]: single
    }) + ` list-actions`;

  return (
    <div className={classes}>
      <Dropdown
        alignRight
        label={<Icon name="fas fa-ellipsis-h" />}
        items={actions}
      />
    </div>
  );
};

ListActions.propTypes = {
  single: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onSelect: PropTypes.func
    })
  )
};

export default ListActions;
