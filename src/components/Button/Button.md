### **Description**

Used throughout the UI, enabling the user interaction with the application.

<br />
<br />

#### **Default**

```jsx
<Button variant="primary">Primary Button</Button>{" "}
<Button>Secondary Button - Default</Button>{" "}
<Button variant="tertiary">Tertiary Button</Button>
<Button variant="link">Link</Button>

```

#### **Accept**

```jsx
<Button variant="primary" color="success">Primary Button</Button>{" "}
<Button color="success">Secondary Button</Button>{" "}
<Button variant="tertiary" color="success">Tertiary Button</Button>
```

#### **Deny**

```jsx
<Button variant="primary" color="danger">Primary Button</Button>{" "}
<Button color="danger">Secondary Button</Button>{" "}
<Button variant="tertiary" color="danger">Tertiary Button</Button>
```

#### **Disabled**

```jsx
<Button variant="primary" color="danger" disabled>Primary Button</Button>{" "}
<Button color="danger" disabled>Secondary Button</Button>{" "}
<Button variant="tertiary" color="danger" disabled>Tertiary Button</Button>
```

#### **Modular width**

```jsx
<Button width={32}>32px</Button>
<br />
<Button width={64}>64px</Button>
<br />
<Button width={96}>96px</Button>
<br />
<Button width={128}>128px</Button>
```

#### **Button loading state**

```jsx
import { useState } from "react";

const LoadingExample = () => {
  const [isLoading, toggleLoading] = useState(false);
  const handleClick = () => {
    toggleLoading(true);
    new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
      toggleLoading(false);
    });
  };
  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Click to load"}
    </Button>
  );
};

<LoadingExample />;
```
