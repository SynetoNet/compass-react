import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BSForm from "react-bootstrap/Form";

import "./Check.scss";

const Check = React.forwardRef(({ disabled = false, inline = false, type = "checkbox", indeterminate = false, ...props }, ref) => {
  const checkboxRef = React.createRef();

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate;
  });

  return <BSForm.Check ref={checkboxRef} disabled={disabled} inline={inline} type={type} indeterminate={indeterminate} custom {...props} />;
});

Check.propTypes = {
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(["radio", "checkbox"]),
  indeterminate: PropTypes.bool
};

export default Check;
