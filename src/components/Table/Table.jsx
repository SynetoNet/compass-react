import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import Search from "./components/Search";
import { getPaginationOptions } from "./components/paginationOptions";
import { getSelectableOptions } from "./components/selectableOptions";
import { getColumn } from "./components/columnOptions";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./Table.scss";
import "./components/Pagination.scss";

class Table extends React.Component {
  static Col = "tr";

  handleOnSelect = (row, isSelect, rowIndex, e) => {
    const { onSelect } = this.props;
    onSelect && onSelect({ item: row, isSelected: isSelect });
  };

  getSelected = () => {
    return this.node.selectionContext.selected;
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
      scrollable,
      ...props
    } = this.props;

    // can be memoized
    const _columns = columns
      ? this.getColumnsProp(columns)
      : this.getColumnsFromChildren(children);
    const _selectable = getSelectableOptions(selectable, this.handleOnSelect);
    const _pagination = getPaginationOptions(pagination);

    const classes = classNames({
      "table-scrollable": scrollable
    });

    if (search) {
      return (
        <ToolkitProvider
          keyField={keyField}
          data={data}
          columns={_columns}
          search
        >
          {props => (
            <>
              <div className="table-filters-wrapper mb-2">
                {actions || <div />}
                <Search {...props.searchProps} />
              </div>
              <BootstrapTable
                classes={classes}
                bootstrap4={true}
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

    return (
      <BootstrapTable
        classes={classes}
        data={data}
        columns={_columns}
        keyField={keyField}
        bootstrap4={true}
        bordered={false}
        hover={true}
        noDataIndication="No items"
        ref={n => (this.node = n)}
        {..._selectable}
        {..._pagination}
        {...props}
      />
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
  onSelect: PropTypes.func
};

export default Table;
