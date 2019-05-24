import React from "react";
import DatePicker from "./DatePicker";
import renderer from "react-test-renderer";

test("renders default DatePicker", () => {
  const Component = () => {
    return <DatePicker selected={new Date(2019, 4, 23)} onChange={() => {}} />;
  };

  const component = renderer.create(<Component />);

  expect(component.toJSON()).toMatchSnapshot();
});

test("renders DatePicker with custom input", () => {
  const Component = () => {
    return (
      <DatePicker
        customInput={<input className="custom-input" value="" />}
        selected={new Date(2019, 4, 23)}
        onChange={() => {}}
      />
    );
  };

  const component = renderer.create(<Component />);

  expect(component.toJSON()).toMatchSnapshot();
});
