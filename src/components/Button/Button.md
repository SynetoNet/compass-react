#### **Default**

```jsx
<Button>Default Button</Button>{" "}
<Button variant="primary">Primary Button</Button>{" "}
<Button variant="tertiary">Tertiary Button</Button>
<Button variant="link" href="https://github.com/SynetoNet/compass-react">Link</Button>

```

#### **Accept**

```jsx
<Button color="success">Accept</Button>{" "}
<Button color="success" variant="primary" >Primary Accept</Button>{" "}
<Button color="success" variant="tertiary">Tertiary Accept</Button>
```

#### **Reject**

```jsx
<Button color="danger">Reject</Button>{" "}
<Button color="danger" variant="primary">Primary Reject</Button>{" "}
<Button color="danger" variant="tertiary">Tertiary Reject</Button>
```

#### **Disabled**

```jsx
<Button disabled>Default Disabled</Button>{" "}
<Button variant="primary" color="success" disabled>Primary Disabled</Button>{" "}
<Button variant="tertiary" color="danger" disabled>Tertiary Disabled</Button>
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
    setTimeout(() => toggleLoading(false), 2000);
  };

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Please wait 2s" : "Click to load"}
    </Button>
  );
};

<LoadingExample />;
```
