import React from "react";
import Form from "../../Form/Form";

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

export default IndeterminateCheck;
