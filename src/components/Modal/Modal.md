#### **Simple Modal**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const SimpleModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Toggle modal</Button>
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

#### **Sliding Modal**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const SimpleModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Toggle modal</Button>
      <Modal
        slidingPanel={true}
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
      <Button onClick={() => toggleModal(true)}>Toggle modal</Button>
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

#### **Scrollable Modal**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const ScrollableModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Toggle modal</Button>
      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        scrollable
        content={
          <div>
            scroll down
            <div style={{ height: "100vh" }} />
            ...
            <div style={{ height: "100vh" }} />
            end
          </div>
        }
        title="Modal title"
      />
    </>
  );
};

<ScrollableModal />;
```

#### **Sizes**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const SizedModal = () => {
  const [showModalSm, toggleModalSm] = useState(false);
  const [showModalMd, toggleModalMd] = useState(false);
  const [showModalLg, toggleModalLg] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModalSm(true)}>Small modal</Button>
      <Modal
        show={showModalSm}
        size="sm"
        onHide={() => toggleModalSm(false)}
        content="..."
        title="Small Modal"
      />

      <i className="px-2" />

      <Button onClick={() => toggleModalMd(true)}>Normal modal</Button>
      <Modal
        show={showModalMd}
        onHide={() => toggleModalMd(false)}
        content="..."
        title="Normal Modal"
      />

      <i className="px-2" />

      <Button onClick={() => toggleModalLg(true)}>Large modal</Button>
      <Modal
        show={showModalLg}
        size="lg"
        onHide={() => toggleModalLg(false)}
        content="..."
        title="Large Modal"
      />
    </>
  );
};

<SizedModal />;
```

#### **Stacked Modals**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const SmallModal = () => {
  const [show, toggle] = useState(false);
  return (
    <>
      <Button onClick={() => toggle(true)}>Third Modal</Button>
      <Modal show={show} size="sm" onHide={() => toggle(false)} content="..." />
    </>
  );
};

const MediumModal = () => {
  const [show, toggle] = useState(false);
  return (
    <>
      <Button onClick={() => toggle(true)}>Second modal</Button>
      <Modal
        show={show}
        onHide={() => toggle(false)}
        content={<SmallModal />}
      />
    </>
  );
};

const FirstModal = () => {
  const [show, toggle] = useState(false);
  return (
    <>
      <Button onClick={() => toggle(true)}>First modal</Button>
      <Modal
        show={show}
        size="lg"
        onHide={() => toggle(false)}
        content={<MediumModal />}
      />
    </>
  );
};

<FirstModal />;
```

#### **Non-dismissible Modal**

```jsx
import { useState } from "react";
import { Button } from "../../index";

const NonDismissibleModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Confirm</Button>
      <Modal
        show={showModal}
        title="Do you confirm?"
        actions={{
          primary: {
            label: "Yes, I confirm",
            onClick: () => toggleModal(false)
          }
        }}
      />
    </>
  );
};

<NonDismissibleModal />;
```

#### **Extended usage**

```jsx
import { useState } from "react";
import { Button, Badge } from "../../index";

const ExtendedModal = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Toggle modal</Button>
      <Modal show={showModal} onHide={() => toggleModal(false)}>
        <Modal.Header>
          <Modal.Title>Custom title</Modal.Title>
          <Badge>Info Badge</Badge>
        </Modal.Header>

        <Modal.Body>
          <p>Lorem ipsum dolor sit amet.</p>
        </Modal.Body>

        <Modal.Footer>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button color="danger" onClick={() => toggleModal(false)}>
              No way!!!
            </Button>
            <Button color="success" onClick={() => toggleModal(false)}>
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
