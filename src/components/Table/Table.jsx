import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import Search from "./components/Search";
import Dropdown from "../Dropdown/Dropdown";
import { getPaginationOptions } from "./components/paginationOptions";
import { getSelectableOptions } from "./components/selectableOptions";
import { getColumn } from "./components/columnOptions";

import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./Table.scss";
import "./components/Pagination.scss";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

const Table = ({
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
}) => {
  const [selected, setSelected] = useState([]);
  const tableRef = useRef(null);

  function handleOnSelect(row, isSelect, rowIndex, e) {
    onSelect && onSelect({ item: row, isSelected: isSelect });
  }

  function getSelected() {
    try {
      return tableRef.current.selectionContext.selected.map(key =>
        data.find(item => item[keyField] === key)
      );
    } catch (error) {
      console.warm("Cannot getSelected()", error);
      return [];
    }
  }

  function clearSelection() {
    setSelected([]);
  }

  // can be memoized
  const _columns = columns
    ? getColumnsProp(columns)
    : getColumnsFromChildren(children);

  const _selectable = getSelectableOptions(
    selectable,
    handleOnSelect,
    selected
  );

  const _pagination = getPaginationOptions(pagination);
  const _actions = getActions(actions);

  const classes = (classNames({}) + ` ${className}`).trim();

  const wrapperClasses = (
    classNames({ "react-bootstrap-table--scrollable": scrollable }) +
    ` ${wrapperClassName}`
  ).trim();

  // Props is overridden by the Toolkit Provider; We save the props in the initialProps variable;
  const initialProps = props;

  return (
    <div className="table-container">
      <ToolkitProvider
        keyField={keyField}
        data={data}
        columns={_columns}
        bootstrap4={true}
        search
      >
        {props => {
          // Here
          if (initialProps.onSearch) {
            props.searchProps.onSearch = initialProps.onSearch;
          }

          return (
          <>
            {_actions || extra || search ? (
              <div className="table-filters-wrapper mb-3">
                {_actions || <div />}
                {extra && extra}
                {search && <Search {...props.searchProps} />}
              </div>
            ) : (
                ""
              )}
            <BootstrapTable
              wrapperClasses={wrapperClasses}
              classes={classes}
              bordered={false}
              hover={true}
              noDataIndication="No items"
              ref={tableRef}
              filter={filterFactory()}
              {..._selectable}
              {..._pagination}
              {...props.baseProps}
              {...initialProps}
            />
          </>)
        }}
      </ToolkitProvider>
    </div>
  );

  function getColumnsProp(columns) {
    if (!Array.isArray(columns)) {
      throw "columns must be an array";
    }

    return columns.map(column => getColumn(column));
  }

  function getColumnsFromChildren(children) {
    if (!Array.isArray(children)) {
      children = [children];
    }

    return children.map(({ props }) => getColumn(props));
  }

  function getActions(actions) {
    if (!actions) {
      return null;
    }

    if (Array.isArray(actions)) {
      return (
        <Dropdown label="Actions" className="mr-5">
          <Dropdown.Menu>
            {actions.map(action => (
              <Dropdown.Item
                key={action.label}
                eventKey="unselect"
                onSelect={() => action.onClick(getSelected())}
              >
                {action.label}
              </Dropdown.Item>
            ))}

            <Dropdown.Divider />

            <Dropdown.Item eventKey="unselect" onSelect={clearSelection}>
              Unselect all
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    return actions;
  }
};

Table.Col = "tr";

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  /**
    hidePageListOnlyOnePage: bool<br/>
    alwaysShowAllBtns: bool<br/>
    withFirstAndLast: bool<br/>
    showTotal: bool<br/>
    sizePerPageList: array
  */
  pagination: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      hidePageListOnlyOnePage: PropTypes.bool,
      alwaysShowAllBtns: PropTypes.bool,
      withFirstAndLast: PropTypes.bool,
      showTotal: PropTypes.bool,
      sizePerPageList: PropTypes.array
    })
  ]),

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
  /** custom search method */
  onSearch: PropTypes.func,
  /** additional CSS classes to be set on the wrapper of the table component */
  wrapperClassName: PropTypes.string,
  /** additional CSS classes to be set on the table component */
  className: PropTypes.string,
  actions: PropTypes.node,
  extra: PropTypes.element
};

export default Table;
