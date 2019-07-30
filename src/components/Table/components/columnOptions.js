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

  return {
    dataField: field || "",
    text: children || capitalize(header) || "",
    sort: !!sort,
    headerAlign: align,
    align: align,
    formatter: renderCell,
    sortFunc: typeof sort === "function" ? sort : undefined,
    style: { ..._style },
    headerStyle: { ..._headerStyle },
    ...otherProps
  };
}
