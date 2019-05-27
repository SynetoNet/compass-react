import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Default Button", () => {
  test("secondary Button", () => {
    const component = renderer.create(<Button>Secondary</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("primary Button", () => {
    const component = renderer.create(
      <Button variant="primary">Primary</Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("tertiary Button", () => {
    const component = renderer.create(
      <Button variant="tertiary">Tertiary</Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Accept Button", () => {
  test("secondary success Button", () => {
    const component = renderer.create(
      <Button color="success">Secondary</Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("primary success Button", () => {
    const component = renderer.create(
      <Button color="success" variant="primary">
        Primary
      </Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("tertiary success Button", () => {
    const component = renderer.create(
      <Button color="success" variant="tertiary">
        Primary
      </Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Disabled Button", () => {
  test("secondary disabled Button", () => {
    const component = renderer.create(<Button disabled>Secondary</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("primary disabled Button", () => {
    const component = renderer.create(
      <Button disabled variant="primary">
        Primary
      </Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("tertiary disabled Button", () => {
    const component = renderer.create(
      <Button disabled variant="tertiary">
        Primary
      </Button>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
