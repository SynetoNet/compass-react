import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ListItem from "./components/ListItem";
import ListActions from "./components/ListActions";

import "./List.scss";

const List = ({
  title,
  tabbed,
  compact,
  actions,
  items,
  children,
  className = "",
  ...props
}) => {
  const classes = (
    classNames({
      compact,
      actions
    }) + ` list-wrapper ${className}`
  ).trim();

  if (!items && !children) {
    throw `List component require either the "items" prop, or the "children" prop`;
  }

  const content = children || getContent(items);
  const ListElement = tabbed ? "dl" : "ul";

  return (
    <div className={classes}>
      {renderTitle()}
      {renderActions()}
      <ListElement className="list" {...props}>
        {content}
      </ListElement>
    </div>
  );

  function getContent(items) {
    return items.map(({ value, label }, index) => {
      const key = typeof label === "string" ? label : index;
      const _actions = !compact ? actions : undefined;
      return (
        <ListItem key={key} label={label} tabbed={tabbed} actions={_actions}>
          {value}
        </ListItem>
      );
    });
  }

  function renderTitle() {
    return title ? (
      <header className="list_header">
        <h4 className="list_title">{title}</h4>
      </header>
    ) : null;
  }

  function renderActions() {
    if (!actions || !compact) {
      return null;
    }

    return <ListActions actions={actions} single />;
  }
};

List.Item = ListItem;

List.propTypes = {
  title: PropTypes.string,
  compact: PropTypes.bool,
  tabbed: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.node
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: ListItem
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: ListItem
      })
    )
  ]),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onSelect: PropTypes.func
    })
  )
};

List.defaultProps = {
  compact: false,
  tabbed: false
};

export default List;
