### Switch

```jsx
import { useState } from "react";
import { Form } from "../../../index";
const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = checked => {
    setChecked(checked);
  };
  return <Form.Switch onChange={handleChange} checked={checked} />;
};

<SwitchExample />;
```

### Disabled

```jsx
import { useState } from "react";
import { Form } from "../../../index";
const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = checked => {
    setChecked(checked);
  };
  return <Form.Switch disabled onChange={handleChange} checked={checked} />;
};

<SwitchExample />;
```
