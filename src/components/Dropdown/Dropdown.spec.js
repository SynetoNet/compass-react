import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dropdown from "./Dropdown";

describe("Default Dropdown", () => {
  const defaultExample = (
    <Dropdown
      show
      label="Dropdown Label"
      items={[{ label: "option1" }, { label: "option2" }]}
    />
  );

  test("renders modal with items prop", () => {
    render(defaultExample);

    expect(screen.getByLabelText("Dropdown Label")).toBeTruthy();
    expect(screen.getByText("option1")).toBeTruthy();
    expect(screen.getByText("option2")).toBeTruthy();
  });

  test("dropdown with items prop snapshop", () => {
    const component = renderer.create(defaultExample);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("calls onSelect() handlers", async () => {
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

  const user = userEvent.setup();

  render(example);

  await user.click(screen.getAllByRole('button')[1]);
  await user.click(screen.getAllByRole('button')[2]);

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
