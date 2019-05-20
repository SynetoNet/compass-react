```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const Example0 = () => {
  const [date, setState] = useState(new Date());

  return <DatePicker selected={date} onChange={val => setState(val)} />;
};

<Example0 />;
```

```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const Example1 = () => {
  const [date, setState] = useState(new Date());

  return (
    <DatePicker
      selected={undefined}
      customInput={<Form.Control type="text" />}
      onChange={val => setState(val)}
    />
  );
};

<Example1 />;
```

```jsx
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const ExampleModal = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          // create a long scroll
          {Array.from(Array(30), (_, i) => (
            <p key={i}>... scroll down</p>
          ))}
          <br />
          <br />
          <br />
          // our DatePicker with custom Input
          <DatePicker
            selected={date}
            customInput={<Form.Control type="text" />}
            onChange={val => setDate(val)}
          />
          // continue the long scroll
          <br />
          <br />
          <br />
          {Array.from(Array(30), (_, i) => (
            <p key={i}>...</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<ExampleModal />;
```
