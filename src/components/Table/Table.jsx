import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Form from "../Form/Form";

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

class Table extends React.Component {
  static Col = "tr";

  handleOnSelect = (row, isSelect, rowIndex, e) => {
    const { onSelect } = this.props;
    onSelect && onSelect({ item: row, isSelected: isSelect });
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
      ...props
    } = this.props;

    // can be memoized
    const _columns = columns || this.getColumnsProp(children);
    const _selectable = this.getSelectableProp(selectable);
    const _pagination = this.getPaginationProp(pagination);

    // const classes = classNames({});

    return (
      <BootstrapTable
        data={data}
        columns={_columns}
        keyField={keyField}
        bootstrap4={true}
        bordered={false}
        hover={true}
        {..._selectable}
        {..._pagination}
        {...props}
      />
    );
  }

  getColumnsProp(children) {
    if (!Array.isArray(children)) {
      throw "children must be an array";
    }

    return children.map(({ props }, index) => {
      return {
        dataField: props.field || "",
        text: props.children || "",
        sort: !!props.sort,
        headerAlign: props.align,
        align: props.align,
        formatter: props.renderCell,
        sortFunc: typeof props.sort === "function" ? props.sort : undefined
      };
    });
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

    const options = {
      onSizePerPageChange: (sizePerPage, page) => {
        console.log("Size per page change!!!");
        console.log("Newest size per page:" + sizePerPage);
        console.log("Newest page:" + page);
      },
      onPageChange: (page, sizePerPage) => {
        console.log("Page change!!!");
        console.log("Newest size per page:" + sizePerPage);
        console.log("Newest page:" + page);
      },
      hidePageListOnlyOnePage: true,
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
      showTotal: true,
      sizePerPageList: [5, 10, 25],
      paginationTotalRenderer: customTotal
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
            onSelect: (row, isSelect, rowIndex, e) => {
              console.log("onSelect", { row, isSelect, rowIndex });
            },
            onSelectAll: (isSelect, rows, e) => {
              console.log("onSelectAll", { isSelect, rows });
            },
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
      dataField: PropTypes.string,
      text: PropTypes.string,
      sort: PropTypes.bool,
      /** `"left", "center", "right"` */
      headerAlign: PropTypes.oneOf(["left", "center", "right"]),
      /** `"left", "center", "right"` */
      align: PropTypes.oneOf(["left", "center", "right"]),
      formatter: PropTypes.func,
      sortFunc: PropTypes.func
    })
  ),
  /** field name to be used as unique keys */
  keyField: PropTypes.string,
  selectable: PropTypes.oneOf(["single", "multiple"]),
  onSelect: PropTypes.func
};

Table.defaultProps = {};

export default Table;
