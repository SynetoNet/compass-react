import React from "react";
import Card from "./Card";
import { Icon } from "../../index.js";
import renderer from "react-test-renderer";

test("renders default Badge", () => {
  const component = renderer.create(
    <Card
      icon={<Icon name="fas fa-user fa-md" />}
      title={"Icon Card Title"}
      content={
        " Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
