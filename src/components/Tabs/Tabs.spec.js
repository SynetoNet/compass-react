import React from "react";
import Tabs from "./Tabs";
import renderer from "react-test-renderer";

test("renders Horizontal Tabs", () => {
  const component = renderer.create(
    <Tabs>
      <Tabs.Tab eventKey="tab1" title="tab1 title">
        tab1 content
      </Tabs.Tab>
      <Tabs.Tab eventKey="tab2" title="tab2 title">
        tab2 content
      </Tabs.Tab>
      <Tabs.Tab eventKey="tab3" title="tab3 title">
        tab3 content
      </Tabs.Tab>
    </Tabs>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("renders Vertical Tabs", () => {
  const component = renderer.create(
    <Tabs vertical>
      <Tabs.Tab eventKey="tab1" title="tab1 title">
        tab1 content
      </Tabs.Tab>
      <Tabs.Tab eventKey="tab2" title="tab2 title">
        tab2 content
      </Tabs.Tab>
      <Tabs.Tab eventKey="tab3" title="tab3 title">
        tab3 content
      </Tabs.Tab>
    </Tabs>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
