import React from "react";
import Tooltip from "./Tooltip";
import Badge from "../Badge/Badge.jsx";
import renderer from "react-test-renderer";

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Default Tooltip", () => {
  const defaultExample = (
    <Tooltip text="Some additional info">
      <Badge role="strong">Over over me!</Badge>
    </Tooltip>
  );

  test("popover snapshop", () => {
    const component = shallow(defaultExample);
    expect(component).toMatchSnapshot();
  });
});
