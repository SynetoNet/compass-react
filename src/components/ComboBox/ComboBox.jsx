import React, { useState } from "react";
import PropTypes from "prop-types";
import RSelect from "react-select";

import "./ComboBox.scss";

const ComboBox = ({
  options,
  placeholder,
  selected,
  multiSelect,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(selected);
  const handleChange = selected => {
    setSelectedOption(selected);
  };
  return (
    <RSelect
      placeholder={placeholder}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isMulti={multiSelect}
      closeMenuOnSelect={!multiSelect}
      classNamePrefix={"combo-box"}
      className={"combo-box"}
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
  placeholder: PropTypes.string,
  selected: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })
};

ComboBox.defaultProps = {
  options: [],
  placeholder: "Select...",
  selected: null
};
export default ComboBox;
