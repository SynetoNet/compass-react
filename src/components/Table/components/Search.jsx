import React from "react";
import Form from "../../Form/Form";

const Search = props => {
  let input;

  const handleClick = () => {
    props.onSearch(input.value);
  };

  return (
    <div className="table-search">
      <Form.Control
        type="text"
        ref={n => (input = n)}
        onChange={handleClick}
        placeholder="Search..."
      />

      {props.searchText && (
        // @todo replace with icon button
        <button
          title="Clear search"
          aria-label="Clear"
          className="table-search__clear"
          onClick={() => {
            input.value = "";
            props.onSearch("");
          }}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Search;
