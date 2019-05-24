import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

test("renders default Button", () => {
  const component = renderer.create(<Button />);
  expect(component.toJSON()).toMatchSnapshot();
});

test("renders primary danger Button", () => {
  const component = renderer.create(
    <Button variant="primary" color="danger">
      Primary Button
    </Button>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("renders disabled Button", () => {
  const component = renderer.create(
    <Button variant="primary" color="danger" disabled>
      Primary Button
    </Button>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
