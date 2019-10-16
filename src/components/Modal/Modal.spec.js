import React from "react";
import Modal from "./Modal";

import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Default Modal", () => {
  const example = <Modal show={true} backdrop={"static"} />;

  test("modal without header or content", () => {
    const component = mount(example);
    expect(component.exists(".modal-header")).toBeFalsy();
    expect(component.exists(".modal-body")).toBeFalsy();
    expect(component.exists(".btn-outline-primary")).toBeTruthy();
    expect(component.find(".btn-outline-primary").text()).toEqual("Close");
  });

  test("modal without header or content snapshop", () => {
    const component = shallow(example);
    expect(component).toMatchSnapshot();
  });
});

describe("Simple Modal", () => {
  const example = (
    <Modal show={true} title="modal title" content="modal content" />
  );

  test("modal with title and content", () => {
    const component = mount(example);
    expect(component.exists(".modal-header")).toBeTruthy();
    expect(component.exists(".modal-body")).toBeTruthy();
  });

  test("modal with title and content snapshop", () => {
    const component = shallow(example);
    expect(component).toMatchSnapshot();
  });
});

describe("Actions Modal", () => {
  const example = (
    <Modal
      show={true}
      actions={{
        primary: {
          label: "Primary"
        },
        secondary: {
          label: "Cancel"
        },
        tertiary: {
          label: "Tertiary"
        }
      }}
    />
  );

  test("modal with actions", () => {
    const component = mount(example);
    expect(component.exists(".btn-outline-primary")).toBeTruthy();
    expect(component.find(".btn-outline-primary").text()).toEqual("Cancel");
    expect(component.exists(".btn-primary")).toBeTruthy();
    expect(component.find(".btn-primary").last().text()).toEqual("Primary");
    expect(component.exists(".btn-link")).toBeTruthy();
    expect(component.find(".btn-link").text()).toEqual("Tertiary");
  });

  test("modal with actions snapshop", () => {
    const component = shallow(example);
    expect(component).toMatchSnapshot();
  });
});

describe("Extended Modal", () => {
  const example = (
    <Modal show={true}>
      <Modal.Header>
        <div className="custom-title">title</div>
      </Modal.Header>
      <Modal.Body>
        <p className="custom-body">body</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="custom-footer">footer</div>
      </Modal.Footer>
    </Modal>
  );

  test("extended modal", () => {
    const component = mount(example);
    expect(component.exists(".custom-title")).toBeTruthy();
    expect(component.exists(".custom-body")).toBeTruthy();
    expect(component.exists(".custom-footer")).toBeTruthy();
  });

  test("extended modal snapshop", () => {
    const component = shallow(example);
    expect(component).toMatchSnapshot();
  });
});
