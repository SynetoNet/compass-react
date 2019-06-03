#### **Default**

```jsx
<Button>Default Button</Button>
<i className="pr-4" />
<Button variant="primary">Primary Button</Button>
<i className="pr-4" />
<Button variant="tertiary">Tertiary Button</Button>
<i className="pr-4" />
<Button variant="link" href="https://github.com/SynetoNet/compass-react">Link</Button>

```

#### **Accept**

```jsx
<Button color="success">Accept</Button>
<i className="pr-4" />
<Button color="success" variant="primary" >Primary Accept</Button>
<i className="pr-4" />
<Button color="success" variant="tertiary">Tertiary Accept</Button>
```

#### **Reject**

```jsx
<Button color="danger">Reject</Button>
<i className="pr-4" />
<Button color="danger" variant="primary">Primary Reject</Button>
<i className="pr-4" />
<Button color="danger" variant="tertiary">Tertiary Reject</Button>
```

#### **Disabled**

```jsx
<Button disabled>Default Disabled</Button>
<i className="pr-4" />
<Button variant="primary" color="success" disabled>Primary Disabled</Button>
<i className="pr-4" />
<Button variant="tertiary" color="danger" disabled>Tertiary Disabled</Button>
```

#### **Modular width**

```jsx
<Button width={32}>32px</Button>
<div className="pt-3" />
<Button width={64}>64px</Button>
<div className="pt-3" />
<Button width={96}>96px</Button>
<div className="pt-3" />
<Button width={128}>128px</Button>
```

#### **Button loading controlled**

To handle Loading state, you could manually control the:

* disabled state
* onClick handler
* Button text

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

#### **Button loading uncontrolled**

For easier usage and for long running actions, you should use the **`loading`** prop:

* defaults to "Please wait..." when passing true;
* cycles through various messages every 10s;

```jsx
import { useState } from "react";

const LoadingExample = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading("Hold on");
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <Button variant="primary" loading={loading} onClick={handleClick}>
      {"Click to load"}
    </Button>
  );
};

<LoadingExample />;
```
