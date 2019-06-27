import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import Search from "./components/Search";
import Dropdown from "../Dropdown/Dropdown";
import { getPaginationOptions } from "./components/paginationOptions";
import { getSelectableOptions } from "./components/selectableOptions";
import { getColumn } from "./components/columnOptions";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./Table.scss";
import "./components/Pagination.scss";

class Table extends React.Component {
  static Col = "tr";

  state = {
    selected: this.props.selected
  };

  handleOnSelect = (row, isSelect, rowIndex, e) => {
    const { onSelect } = this.props;
    onSelect && onSelect({ item: row, isSelected: isSelect });
  };

  getSelected = () => {
    try {
      const { data, keyField } = this.props;
      return this.node.selectionContext.selected.map(key =>
        data.find(item => item[keyField] === key)
      );
    } catch (error) {
      console.warm("Cannot getSelected()", error);
      return [];
    }
  };

  clearSelection = () => {
    this.setState({ selected: [] });
  };

  render() {
    const {
      data,
      columns,
      keyField,
      selectable,
      onSelect,
      pagination,
      children,
      search,
      actions,
      extra,
      scrollable,
      className = "",
      wrapperClassName = "",
      ...props
    } = this.props;

    // can be memoized
    const _columns = columns
      ? this.getColumnsProp(columns)
      : this.getColumnsFromChildren(children);

    const _selectable = getSelectableOptions(
      selectable,
      this.handleOnSelect,
      this.state.selected
    );

    const _pagination = getPaginationOptions(pagination);
    const _actions = this.getActions(actions);

    const classes = (classNames({}) + ` ${className}`).trim();

    const wrapperClasses = (
      classNames({ "react-bootstrap-table--scrollable": scrollable }) +
      ` ${wrapperClassName}`
    ).trim();

    return (
      <ToolkitProvider
        keyField={keyField}
        data={data}
        columns={_columns}
        bootstrap4={true}
        search
      >
        {props => (
          <>
            <div className="table-filters-wrapper mb-3">
              {_actions || <div />}
              {extra && extra}
              {search && <Search {...props.searchProps} />}
            </div>
            <BootstrapTable
              wrapperClasses={wrapperClasses}
              classes={classes}
              bordered={false}
              hover={true}
              noDataIndication="No items"
              ref={n => (this.node = n)}
              {..._selectable}
              {..._pagination}
              {...props.baseProps}
            />
          </>
        )}
      </ToolkitProvider>
    );
  }

  getColumnsProp(columns) {
    if (!Array.isArray(columns)) {
      throw "columns must be an array";
    }

    return columns.map(column => getColumn(column));
  }

  getColumnsFromChildren(children) {
    if (!Array.isArray(children)) {
      throw "children must be an array";
    }

    return children.map(({ props }) => getColumn(props));
  }

  getActions = actions => {
    if (!actions) {
      return null;
    }

    return (
      <Dropdown label="Actions" className="mr-5">
        <Dropdown.Menu>
          {actions.map(action => (
            <Dropdown.Item
              key={action.label}
              eventKey="unselect"
              onSelect={() => action.onClick(this.getSelected())}
            >
              {action.label}
            </Dropdown.Item>
          ))}

          <Dropdown.Divider />

          <Dropdown.Item eventKey="unselect" onSelect={this.clearSelection}>
            Unselect all
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      header: PropTypes.string,
      oneline: PropTypes.bool,
      width: PropTypes.string,
      /** `"bool", "function"` */
      sort: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
      /** `"left", "center", "right"` */
      align: PropTypes.oneOf(["left", "center", "right"])
      // formatter: PropTypes.func
    })
  ),
  /** field name to be used as unique keys */
  keyField: PropTypes.string,
  selectable: PropTypes.oneOf(["single", "multiple"]),
  scrollable: PropTypes.bool,
  onSelect: PropTypes.func,
  /** additional CSS classes to be set on the wrapper of the table component */
  wrapperClassName: PropTypes.string,
  /** additional CSS classes to be set on the table component */
  className: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  extra: PropTypes.element
};

export default Table;
