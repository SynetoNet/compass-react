import React from "react";
import List from "./List";
import renderer from "react-test-renderer";

test("should throw if no items or children are passed", () => {
  expect(() => renderer.create(<List />)).toThrow();
});

test("rendering same output using items prop of children", () => {
  const withItems = renderer.create(
    <List
      items={[
        { label: "label 1", value: "value 1" },
        { label: "label 2", value: "value 2" }
      ]}
    />
  );

  const withChildren = renderer.create(
    <List>
      <List.Item label="label 1">value 1</List.Item>
      <List.Item label="label 2">value 2</List.Item>
    </List>
  );

  expect(withItems.toJSON()).toEqual(withChildren.toJSON());
});

test("renders List with title", () => {
  const component = renderer.create(
    <List title="list title">
      <List.Item label="label 1">value 1</List.Item>
      <List.Item label="label 2">value 2</List.Item>
    </List>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("renders tabbled List", () => {
  const component = renderer.create(
    <List tabbed>
      <List.Item label="label 1">value 1</List.Item>
      <List.Item label="label 2">value 2</List.Item>
    </List>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
