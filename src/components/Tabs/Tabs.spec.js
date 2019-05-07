import React from "react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import renderer from "react-test-renderer";

test("renders Horizontal Tabs", () => {
  const component = renderer.create(
    <Tabs>
      <Tab eventKey="tab1" title="tab1 title">
        tab1 content
      </Tab>
      <Tab eventKey="tab2" title="tab2 title">
        tab2 content
      </Tab>
      <Tab eventKey="tab3" title="tab3 title">
        tab3 content
      </Tab>
    </Tabs>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("renders Vertical Tabs", () => {
  const component = renderer.create(
    <Tabs vertical>
      <Tab eventKey="tab1" title="tab1 title">
        tab1 content
      </Tab>
      <Tab eventKey="tab2" title="tab2 title">
        tab2 content
      </Tab>
      <Tab eventKey="tab3" title="tab3 title">
        tab3 content
      </Tab>
    </Tabs>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
