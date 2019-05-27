#### **Simple Modal**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const SimpleModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Toggle modal
      </Button>
      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        content="Modal content"
        title="Modal title"
      />
    </>
  );
};

<SimpleModal />;
```

#### **Action buttons**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const ActionsModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Toggle modal
      </Button>
      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        content="Modal content"
        title="Modal title"
        actions={{
          primary: {
            label: "Submit",
            onClick: () => console.log("Submit clicked")
          },
          secondary: {
            label: "Cancel"
          },
          tertiary: {
            label: "See documentation",
            onClick: () => console.log("See documentation clicked")
          }
        }}
      />
    </>
  );
};

<ActionsModal />;
```

#### **Extended usage**

```jsx
import { useState } from "react";
import { Button, Badge } from "../../index";

const ExtendedModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Toggle modal
      </Button>
      <Modal show={showModal} onHide={() => toggleModal(false)}>
        <Modal.Header>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Modal.Title>
              Custom title <Badge variant="outline">With Badge</Badge>
            </Modal.Title>
            <Badge color="info" variant="strong">
              Extra
            </Badge>
          </div>
        </Modal.Header>

        <Modal.Body>
          <p>Lorem ipsum dolor sit amet:</p>
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button
              variant="secondary"
              color="danger"
              onClick={() => toggleModal(false)}
            >
              No way!!!
            </Button>
            <Button
              variant="primary"
              color="success"
              onClick={() => toggleModal(false)}
            >
              Sure, anytime
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<ExtendedModal />;
```

#### **Scrollable Modal**

```jsx
import { useState } from "react";
import { Button, Badge } from "../../index";

const ScrollableModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Toggle modal
      </Button>
      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        scrollable
        content={
          <div>
            <div style={{ height: "100vh" }} />
            content
            <div style={{ height: "100vh" }} />
          </div>
        }
        title="Modal title"
      />
    </>
  );
};

<ScrollableModal />;
```
