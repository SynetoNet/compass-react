```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const Example1 = () => {
  const [date, setState] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      customInput={<Form.Control type="text" />}
      onChange={val => setState(val)}
    />
  );
};

<Example1 />;
```

```jsx
import { useState } from "react";
import { Form } from "react-bootstrap";

const Example2 = () => {
  const [date, setState] = useState(new Date());

  return (
    <div style={{ border: "1px red solid", padding: "1em", overflowY: "scroll", height: "5em" }}>
      <DatePicker
        selected={date}
        customInput={Form.Control}
        onChange={val => setState(val)}
        append
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

<Example2 />;
```
