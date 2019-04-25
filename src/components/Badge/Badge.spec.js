import React from "react";
import Badge from "./Badge";
import renderer from "react-test-renderer";

test("renders default Badge", () => {
  const component = renderer.create(<Badge />);
  expect(component.toJSON()).toMatchSnapshot();
});
