#### **Default usage**

This is a custom version of [react-datepicker](https://reactdatepicker.com).

By default, **`DatePicker`** should be treated as a controlled component, by binding the **`selected`** value and the **`onChange`** handler.

DatePicker will render a **`<Form.Control />`** element by default.

```jsx
import { useState } from "react";

const DefaultExample = () => {
  const [date, setDate] = useState(new Date());

  return <DatePicker selected={date} onChange={val => setDate(val)} />;
};

<DefaultExample />;
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
  const [date, setDate] = useState("");

  return (
    <DatePicker
      selected={date}
      onChange={val => setDate(val)}
      customInput={
        <Form.Control
          isValid={!!date}
          isInvalid={!date}
          type="text"
          placeholder="You must select a date"
        />
      }
      dateFormat="dd MMM, yyyy h:mm aa"
    />
  );
};

<CustomInputExample />;
```

#### **Scrollable Modal example**

Please use the **`enforceFocus={ false }`** prop on the Modal component, otherwise the month and year dropdowns may have unwanted behavior

```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ExampleModal = () => {
  const [showModal, toggleModal] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Button variant="primary" onClick={() => toggleModal(true)}>
        Open modal
      </Button>

      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        scrollable
        enforceFocus={ false }
        content={
          <div>
            <p>Scroll down</p>
            <div style={{ height: "100vh" }} />
            <DatePicker
              selected={date}
              onChange={val => setDate(val)}
              customInput={<Form.Control type="text" />}
            />
            <div style={{ height: "100vh" }} />
          </div>
        }
        title="Modal title"
      />
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

#### **Time picker**

For a comprehensive list of options, please checkout [react-datepicker's docs](https://reactdatepicker.com).

**Date & Time picker**

```jsx
import { useState } from "react";

const TimeExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      showTimeSelect
      onChange={val => setDate(val)}
      dateFormat="dd-MMM-yyyy hh:mm"
    />
  );
};

<TimeExample />;
```

**Time picker only**

```jsx
import { useState } from "react";

const TimeExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      showTimeSelect
      showTimeSelectOnly
      onChange={val => setDate(val)}
      dateFormat="hh:mm"
    />
  );
};

<TimeExample />;
```

**Control time intervals**

```jsx
import { useState } from "react";

const EveryHour = () => {
  const [date, setDate] = useState("");

  return (
    <DatePicker
      selected={date}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={60}
      onChange={val => setDate(val)}
      placeholderText="Select time (1 hour increments)"
    />
  );
};

<EveryHour />;
```
