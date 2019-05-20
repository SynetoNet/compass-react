#### **Default usage**

By default, **`DatePicker`** should be treated as a controlled component, by binding the **`selected`** value and the **`onChange`** handler.

DatePicker will render a default **`<input />`** element.

```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const DefaultExample = () => {
  const [date, setState] = useState(new Date());

  return <DatePicker selected={date} onChange={val => setState(val)} />;
};

<DefaultExample />;
```

#### **Custom input**

If you use another library for form handling, like **Formik** or **redux-forms**, you can pass a custom element.

```jsx
import { Form } from "react-bootstrap";

const CustomInputExample = () => {
  return (
    <DatePicker
      customInput={<Form.Control type="text" />}
      onChange={console.log}
    />
  );
};

<CustomInputExample />;
```

#### **Scrollable Modal example**

```jsx
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const ExampleModal = () => {
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
          {/* create a long scroll */}
          {Array.from(Array(30), (_, i) => (
            <p key={i}>... scroll down</p>
          ))}
          <br />
          <br />

          {/* our DatePicker with custom Input */}
          <DatePicker
            customInput={<Form.Control type="text" />}
            onChange={console.log}
          />

          {/* continue the long scroll */}
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

#### **Highlight specific dates**

```jsx
import { tomorrow, yesterday } from "./example.utils.js";

<DatePicker onChange={console.log} highlightDates={[tomorrow, yesterday]} />;
```

#### **Placeholder**

```jsx
<DatePicker onChange={console.log} placeholderText="Custom placeholder" />
```

#### **Filter available dates**

**Minimum date:**

```jsx
import { yesterday } from "./example.utils.js";

<DatePicker onChange={console.log} minDate={yesterday} />;
```

**Maximum date:**

```jsx
import { tomorrow } from "./example.utils.js";

<DatePicker onChange={console.log} maxDate={tomorrow} />;
```

**Include specific dates:**

```jsx
import { tomorrow, today, yesterday } from "./example.utils.js";

<DatePicker
  onChange={console.log}
  includeDates={[tomorrow, today, yesterday]}
/>;
```

**Exclude specific dates:**

```jsx
import { tomorrow, yesterday } from "./example.utils.js";

<DatePicker onChange={console.log} excludeDates={[tomorrow, yesterday]} />;
```

**Filter out dates based on a rule:**

```jsx
function isWeekday(dateObject) {
  const weekDay = dateObject.getDay();
  return weekDay > 0 && weekDay < 6;
}

<DatePicker
  onChange={console.log}
  filterDate={isWeekday}
  placeholderText="Select weekdays only "
/>;
```
