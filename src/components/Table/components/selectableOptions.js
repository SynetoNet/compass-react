import React from "react";
import IndeterminateCheck from "./IndeterminateCheck";
import Form from "../../Form/Form";

function getSingleOptions(onSelect) {
  return {
    selectRow: {
      mode: "radio",
      classes: "selected",
      clickToSelect: true,
      hideSelectColumn: true,
      onSelect
    }
  };
}

function getMultipleOptions(onSelect) {
  return {
    selectRow: {
      mode: "checkbox",
      onSelect,
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
}

export function getSelectableOptions(type, onSelect) {
  switch (type) {
    case "single":
      return getSingleOptions(onSelect);
    case "multiple":
      return getMultipleOptions(onSelect);
    default:
      return {};
  }
}
