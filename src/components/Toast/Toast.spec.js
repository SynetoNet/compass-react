import React from "react";
import Toast from "./Toast";
import renderer from "react-test-renderer";

describe("Default Toast", () => {
  const defaultExample = (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );

  test("popover snapshop", () => {
    const component = renderer.create(defaultExample);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
