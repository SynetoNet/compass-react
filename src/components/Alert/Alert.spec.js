import React from "react";
import Alert from "./Alert";
import renderer from "react-test-renderer";

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Default Alert", () => {
  const defaultExample = (
    <Alert variant={"primary"}>This is a primary alert—check it out!</Alert>
  );

  test("popover snapshop", () => {
    const component = shallow(defaultExample);
    expect(component).toMatchSnapshot();
  });
});
