import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import Dropdown from "../../Dropdown/Dropdown";

const customTotal = (from, to, size) => (
  <span className="table-pagination_total">
    Items {from} - {to} of {size}
  </span>
);

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange
}) => (
  <Dropdown label={currSizePerPage} className="d-inline-block">
    <Dropdown.Menu>
      {options.map(option => {
        return (
          <Dropdown.Item
            key={option.text}
            eventKey={option.text}
            onClick={() => onSizePerPageChange(option.page)}
          >
            {option.text}
          </Dropdown.Item>
        );
      })}
    </Dropdown.Menu>
  </Dropdown>
);

const options = {
  hidePageListOnlyOnePage: true,
  alwaysShowAllBtns: true,
  withFirstAndLast: false,
  showTotal: true,
  sizePerPageList: [5, 10, 25],
  paginationTotalRenderer: customTotal,
  sizePerPageRenderer
};

export function getPaginationOptions(pagination) {
  if (!pagination) {
    return {};
  }

  return { pagination: paginationFactory(options) };
}
