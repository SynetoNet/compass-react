import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import Form from "../Form/Form";
import Dropdown from "../Dropdown/Dropdown";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./Table.scss";

const IndeterminateCheck = ({ mode, checked, indeterminate }) => {
  return (
    <Form.Check
      type={mode}
      checked={checked}
      indeterminate={indeterminate}
      label=""
      onChange={() => {}}
    />
  );
};

const MySearch = props => {
  let input;

  const handleClick = () => {
    props.onSearch(input.value);
  };

  return (
    <div className="table-search">
      <Form.Control
        type="text"
        ref={n => (input = n)}
        onChange={handleClick}
        placeholder="Search..."
      />

      {props.searchText && (
        // @todo replace with icon button
        <button
          title="Clear search"
          aria-label="Clear"
          className="table-search__clear"
          onClick={() => {
            input.value = "";
            props.onSearch("");
          }}
        >
          &times;
        </button>
      )}
    </div>
  );
};

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
      ...props
    } = this.props;

    // can be memoized
    const _columns = columns
      ? this.getColumnsProp(columns)
      : this.getColumnsFromChildren(children);
    const _selectable = this.getSelectableProp(selectable);
    const _pagination = this.getPaginationProp(pagination);

    // const classes = classNames({});

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
                <MySearch {...props.searchProps} />
              </div>
              <BootstrapTable
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

  getPaginationProp(pagination) {
    if (!pagination) {
      return {};
    }

    const customTotal = (from, to, size) => (
      <span className="table-pagination_total">
        Items {from} - {to} of {size}
      </span>
    );

    const sizePerPageRenderer = ({
      options,
      currSizePerPage,
      onSizePerPageChange
    }) => (
      <Dropdown label={currSizePerPage} className="d-inline-block">
        <Dropdown.Menu>
          {options.map(option => {
            return (
              <Dropdown.Item
                key={option.text}
                eventKey={option.text}
                onClick={() => onSizePerPageChange(option.page)}
              >
                {option.text}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );

    const options = {
      hidePageListOnlyOnePage: true,
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
      showTotal: true,
      sizePerPageList: [5, 10, 25],
      paginationTotalRenderer: customTotal,
      sizePerPageRenderer
    };

    return { pagination: paginationFactory(options) };
  }

  getSelectableProp(selectable) {
    let prop;

    if (!selectable) {
      return {};
    }

    switch (selectable) {
      case "single":
        prop = {
          selectRow: {
            mode: "radio",
            classes: "selected",
            clickToSelect: true,
            hideSelectColumn: true,
            onSelect: this.handleOnSelect
          }
        };
        break;
      case "multiple":
        prop = {
          selectRow: {
            mode: "checkbox",
            onSelect: (...args) => {
              this.handleOnSelect(...args);
            },
            // onSelect: (row, isSelect, rowIndex, e) => {
            //   console.log("onSelect", { row, isSelect, rowIndex });
            // },
            // onSelectAll: (isSelect, rows, e) => {
            //   console.log("onSelectAll", { isSelect, rows });
            // },
            selectionHeaderRenderer: props => {
              return <IndeterminateCheck {...props} />;
            },
            selectionRenderer: ({ mode, checked, disabled, rowIndex }) => (
              <Form.Check
                type={mode}
                checked={checked}
                disabled={disabled}
                label=""
                onChange={() => console.log(rowIndex)}
              />
            )
          }
        };
        break;
      default:
        prop = {};
    }

    return prop;
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      header: PropTypes.string,
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

Table.defaultProps = {};

export default Table;

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getColumn(column) {
  const {
    field,
    children,
    header,
    sort,
    align,
    renderCell,
    ...otherProps
  } = column;

  return {
    dataField: field || "",
    text: children || capitalize(header) || capitalize(field) || "",
    sort: !!sort,
    headerAlign: align,
    align: align,
    formatter: renderCell,
    sortFunc: typeof sort === "function" ? sort : undefined,
    ...otherProps
  };
}
