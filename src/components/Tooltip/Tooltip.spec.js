import React from "react";
import Tooltip from "./Tooltip";
import Badge from "../Badge/Badge.jsx";
import renderer from "react-test-renderer";

describe("Default Tooltip", () => {
  const defaultExample = (
    <Tooltip text="Some additional info">
      <Badge role="strong">Over over me!</Badge>
    </Tooltip>
  );

  test("tooltip snapshop", () => {
    const component = renderer.create(defaultExample);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
