import React from "react";
import renderer from "react-test-renderer";
import Popover from "./Popover";

describe("Default Popover", () => {
  const defaultExample = (
    <Popover title="title" body="content">
      <span>trigger</span>
    </Popover>
  );

  test("popover snapshop", () => {
    const component = renderer.create(defaultExample);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
