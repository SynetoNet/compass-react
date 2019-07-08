import React from "react";
import Popover from "./Popover";
import Badge from "../Badge/Badge.jsx";
import renderer from "react-test-renderer";

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Default Popover", () => {
  const defaultExample = (
    <Popover title="title" content="content">
      <span>trigger</span>
    </Popover>
  );

  test("popover snapshop", () => {
    const component = shallow(defaultExample);
    expect(component).toMatchSnapshot();
  });
});
