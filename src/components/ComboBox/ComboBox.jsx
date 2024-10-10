import React from "react";
import PropTypes from "prop-types";
import RSelect from "react-select";

import "./ComboBox.scss";

const ComboBox = ({ options = [], isMulti, ...props }) => {
  return (
    <RSelect
      options={options}
      isMulti={isMulti}
      closeMenuOnSelect={!isMulti}
      classNamePrefix={"combo-box"}
      className={"combo-box"}
      {...props}
    />
  );
};

ComboBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
};

export default ComboBox;
