#### **Checkbox input**

```jsx
import Form from "../Form";
<Form>
  <Form.Check type="checkbox" id="size11" label="S" />
  <Form.Check type="checkbox" id="size12" label="M" />
  <Form.Check type="checkbox" id="size13" label="L" disabled />
</Form>;
```

**Inline checkboxes**

```jsx
import Form from "../Form";
<Form>
  <Form.Check inline type="checkbox" id="size21" label="S" />
  <Form.Check inline type="checkbox" id="size22" label="M" />
  <Form.Check inline type="checkbox" id="size23" label="L" disabled />
</Form>;
```

**Controlled checkbox**

```jsx
import Form from "../Form";
import { useState } from "react";

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Form>
      <Form.Check
        checked={checked}
        onChange={() => setChecked(prev => !prev)}
        type="checkbox"
        id="controlled"
        label="Controlled"
      />
    </Form>
  );
};

<ControlledCheckbox />;
```

#### **Radio input**

```jsx
import Form from "../Form";
<Form>
  <Form.Check type="radio" id="S11" name="size" label="S" />
  <Form.Check type="radio" id="M12" name="size" label="M" />
  <Form.Check type="radio" id="L13" name="size" label="L" disabled />
</Form>;
```

**Inline radios**

```jsx
import Form from "../Form";
<Form>
  <Form.Check inline type="radio" id="S21" name="size2" label="S" />
  <Form.Check inline type="radio" id="M22" name="size2" label="M" />
  <Form.Check inline type="radio" id="L23" name="size2" label="L" disabled />
</Form>;
```

**Controlled radios**

```jsx
import Form from "../Form";
import { useState } from "react";

const ControlledRadio = () => {
  const [selected, setSelected] = useState("M");

  return (
    <Form>
      {["S", "M", "L"].map(size => (
        <Form.Check
          key={`controlled-${size}`}
          type="radio"
          id={`controlled-${size}`}
          name="controlled-radio"
          label={size}
          checked={selected === size}
          onChange={() => setSelected(size)}
          inline
        />
      ))}
    </Form>
  );
};

<ControlledRadio />;
```
