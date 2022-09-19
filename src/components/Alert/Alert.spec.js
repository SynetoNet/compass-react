import React from "react";
import Alert from "./Alert";
import renderer from "react-test-renderer";

describe("Default Alert", () => {
  const defaultExample = (
    <Alert variant={"primary"}>This is a primary alert—check it out!</Alert>
  );

  test("popover snapshop", () => {
    const component = renderer.create(defaultExample);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
