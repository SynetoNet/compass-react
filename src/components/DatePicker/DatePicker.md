#### **Default usage**

By default, **`DatePicker`** should be treated as a controlled component, by binding the **`selected`** value and the **`onChange`** handler.

DatePicker will render a default **`<input />`** element.

```jsx
import { useState } from "react";

const DefaultExample = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker selected={date} onChange={val => setDate(val)} />;
};

<DefaultExample />;
```

#### **Date format**

We use [date-fns](https://date-fns.org/) to format date, see [documentation](https://date-fns.org/v2.0.0-alpha.23/docs/format) for details.

---

> **IMPORTANT NOTE**: This doesn't work with **`redux-form`**, because the update is handled outside this component.

> You should manually format the **initial value** and the **updated value**.

---

```jsx
import { useState } from "react";

const DefaultExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      dateFormat="dd-MMM-yyyy h:mm aa"
    />
  );
};

<DefaultExample />;
```

#### **Custom input**

If you use another library for form handling, like **Formik** or **redux-forms**, you can pass a custom element.

```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const CustomInputExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      customInput={<Form.Control type="text" />}
      dateFormat="dd-MMM-yyyy h:mm aa"
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
  const [showModal, toggleModal] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Open modal
      </Button>

      <Modal show={showModal} onHide={() => toggleModal(false)}>
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
            selected={date}
            onChange={val => setDate(val)}
            customInput={<Form.Control type="text" />}
          />

          {/* continue the long scroll */}
          <br />
          <br />
          {Array.from(Array(30), (_, i) => (
            <p key={i}>...</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => toggleModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

<ExampleModal />;
```

#### **Highlight specific dates**

```jsx
import { useState } from "react";
import { tomorrow, yesterday } from "./example.utils.js";

const HighlightExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      highlightDates={[tomorrow, yesterday]}
    />
  );
};

<HighlightExample />;
```

#### **Inline calendar**

```jsx
import { useState } from "react";

const InlineExample = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker selected={date} onChange={val => setDate(val)} inline />;
};

<InlineExample />;
```

#### **Placeholder**

```jsx
import { useState } from "react";

const PlaceholderExample = () => {
  const [date, setDate] = useState("");

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      placeholderText="Please select a date"
    />
  );
};

<PlaceholderExample />;
```

#### **Filter available dates**

**Minimum date:**

```jsx
import { useState } from "react";
import { yesterday } from "./example.utils.js";

const MinDateExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      minDate={yesterday}
    />
  );
};

<MinDateExample />;
```

**Maximum date:**

```jsx
import { useState } from "react";
import { tomorrow } from "./example.utils.js";

const MaxDateExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      maxDate={tomorrow}
    />
  );
};

<MaxDateExample />;
```

**Include specific dates:**

```jsx
import { useState } from "react";
import { tomorrow, today, yesterday } from "./example.utils.js";

const IncludeDatesExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      includeDates={[tomorrow, today, yesterday]}
    />
  );
};

<IncludeDatesExample />;
```

**Exclude specific dates:**

```jsx
import { useState } from "react";
import { tomorrow, yesterday } from "./example.utils.js";

const ExcludeDatesExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      excludeDates={[tomorrow, yesterday]}
    />
  );
};

<ExcludeDatesExample />;
```

**Filter out dates based on a rule:**

```jsx
import { useState } from "react";

function isWeekday(dateObject) {
  const weekDay = dateObject.getDay();
  return weekDay > 0 && weekDay < 6;
}

const FilterDatesExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      filterDate={isWeekday}
      placeholderText="Select weekdays only "
    />
  );
};

<FilterDatesExample />;
```
