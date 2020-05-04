import React                          from "react";
import { textFilter, customFilter }   from "react-bootstrap-table2-filter";
import { ColumnFilter }               from "./columnFilter"

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function getColumn(column, key) {
  const {
    field,
    children,
    header,
    sort,
    align,
    renderCell,
    width,
    style,
    headerStyle,
    oneline,
    filter,
    filterOptions,
    ...otherProps
  } = column;

  const _style = { ...style };
  const _headerStyle = { ...headerStyle };

  if (oneline) {
    Object.assign(_style, {
      ..._style,
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap"
    });
  }

  if (width) {
    Object.assign(_style, {
      width,
      flex: "none"
    });
    Object.assign(_headerStyle, {
      width,
      flex: "none"
    });
  }

  let headerFormatter;
  if (React.isValidElement(children)) {
    headerFormatter = () => children;
  }

  return {
    dataField: field || "",
    text: !headerFormatter ? (children ? children : capitalize(header)) : "",
    sort: !!sort,
    headerFormatter: headerFormatter ? headerFormatter : null,
    filter: filter
      ? filter === "text"
        ? textFilter()
        : filter === "select"
        ? customFilter()
        : null
      : null,
    filterRenderer: filter === "select"
                    ? (onFilter, column) => (
                      <ColumnFilter
                        onFilter={ onFilter }
                        column={ column }
                        filterOptions={filterOptions}
                      />
                    ): null,
    headerAlign: align,
    align: align,
    formatter: renderCell,
    sortFunc: typeof sort === "function" ? sort : undefined,
    style: { ..._style },
    headerStyle: { ..._headerStyle },
    ...otherProps
  };
}
