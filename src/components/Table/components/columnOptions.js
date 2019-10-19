import { textFilter, selectFilter } from "react-bootstrap-table2-filter";
import React from "react";

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
  const _style = {
    ...style
  };
  const _headerStyle = {
    ...headerStyle
  };

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
    text: (headerFormatter === '') ? children || capitalize(header) : "",
    sort: !!sort,
    headerFormatter: headerFormatter ? headerFormatter : null,
    filter: filter
      ? filter === "text"
        ? textFilter()
        : filter === "select"
        ? selectFilter({ options: filterOptions })
        : null
      : null,
    headerAlign: align,
    align: align,
    formatter: renderCell,
    sortFunc: typeof sort === "function" ? sort : undefined,
    style: { ..._style },
    headerStyle: { ..._headerStyle },
    ...otherProps
  };
}
