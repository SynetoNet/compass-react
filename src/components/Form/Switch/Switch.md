#### **Basic example**

```jsx
import Form from "../Form";
import { useState } from "react";

const BasicExample = () => {
  const [checked, setChecked] = useState(true);

  return <Form.Switch onChange={setChecked} checked={checked} />;
};

<BasicExample />;
```

#### **Disabled example**

```jsx
import Form from "../Form";
import { useState } from "react";

const DisabledExample = () => {
  const [checked, setChecked] = useState(false);

  return <Form.Switch disabled onChange={setChecked} checked={checked} />;
};

<DisabledExample />;
```
