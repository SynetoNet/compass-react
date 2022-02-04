import React from "react";
import Dropdown from "./Dropdown";

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Default Dropdown", () => {
  const defaultExample = (
    <Dropdown
      show
      label="Dropdown Label"
      items={[{ label: "option1" }, { label: "option2" }]}
    />
  );

  test("renders modal with items prop", () => {
    const component = mount(defaultExample);

    expect(component.contains("Dropdown Label")).toBeTruthy();
    expect(component.contains("option1")).toBeTruthy();
    expect(component.contains("option2")).toBeTruthy();
  });

  test("dropdown with items prop snapshop", () => {
    const component = shallow(defaultExample);
    expect(component).toMatchSnapshot();
  });
});

test("calls onSelect() handlers", () => {
  const selectHandler = jest.fn();

  const example = (
    <Dropdown
      show
      label="Dropdown Label"
      onSelect={selectHandler}
      items={[
        {
          label: "option1",
          eventKey: "option1-key"
        },
        {
          label: "option2",
          eventKey: "option2-key"
        }
      ]}
    />
  );

  const component = mount(example);

  component
    .find(".dropdown-item")
    .at(1)
    .simulate("click");

  component
    .find(".dropdown-item")
    .at(2)
    .simulate("click");

  expect(selectHandler).toHaveBeenNthCalledWith(
    1,
    "option1-key",
    expect.anything()
  );
  expect(selectHandler).toHaveBeenNthCalledWith(
    2,
    "option2-key",
    expect.anything()
  );
  expect(selectHandler).toHaveBeenCalledTimes(2);
});
