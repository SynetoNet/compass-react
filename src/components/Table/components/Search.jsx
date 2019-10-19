import React from "react";
import Form from "../../Form/Form";

const Search = props => {
  let input;

  const handleClick = () => {
    props.onSearch(input.value);
  };

  return (
    <div className="table-search ml-5">
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Control
          type="text"
          ref={n => (input = n)}
          onChange={handleClick}
          placeholder="Search..."
          style={{ width: "200px" }}
          value={props.searchText ? props.searchText : ""}
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
            type="button"
          >
            &times;
          </button>
        )}
      </Form>
    </div>
  );
};

export default Search;
