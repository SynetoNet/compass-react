import React from "react";
import IndeterminateCheck from "./IndeterminateCheck";
import Form from "../../Form/Form";

function getSingleOptions(onSelect, selected) {
  return {
    selectRow: {
      mode: "radio",
      classes: "selected",
      clickToSelect: true,
      hideSelectColumn: true,
      selected,
      onSelect
    }
  };
}

function getMultipleOptions(onSelect, selected) {
  return {
    selectRow: {
      mode: "checkbox",
      onSelect,
      selected,
      headerColumnStyle: { width: "40px" },
      selectColumnStyle: { width: "40px" },
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

export function getSelectableOptions(type, onSelect, selected) {
  switch (type) {
    case "single":
      return getSingleOptions(onSelect, selected);
    case "multiple":
      return getMultipleOptions(onSelect, selected);
    default:
      return {};
  }
}
