#### **Default Buttons**

```jsx
<Button>Default Button</Button>
<i className="pr-2" />
<Button color="success">Success</Button>
<i className="pr-2" />
<Button color="danger">Danger</Button>
<i className="pr-2" />
<Button color="warning">Warning</Button>
<i className="pr-2" />
<Button color="info">Info</Button>
```

#### **Primary Buttons**

```jsx
<Button variant="primary">Primary</Button>
<i className="pr-2" />
<Button variant="primary" color="success">Success</Button>
<i className="pr-2" />
<Button variant="primary" color="danger">Danger</Button>
<i className="pr-2" />
<Button variant="primary" color="warning">Warning</Button>
<i className="pr-2" />
<Button variant="primary" color="info">Info</Button>
```

#### **Tertiary Buttons**

```jsx
<Button variant="tertiary">Tertiary</Button>
<i className="pr-2" />
<Button variant="tertiary" color="success">Success</Button>
<i className="pr-2" />
<Button variant="tertiary" color="danger">Danger</Button>
<i className="pr-2" />
<Button variant="tertiary" color="warning">Warning</Button>
<i className="pr-2" />
<Button variant="tertiary" color="info">Info</Button>
```

#### **Link**

```jsx
<Button variant="link" href="https://github.com/SynetoNet/compass-react">
  Link
</Button>
```

#### **Disabled Buttons**

```jsx
<div>
  <Button disabled>Disabled</Button>
  <i className="pr-2" />
  <Button disabled color="success">Success</Button>
  <i className="pr-2" />
  <Button disabled color="danger">Danger</Button>
  <i className="pr-2" />
  <Button disabled color="warning">Warning</Button>
  <i className="pr-2" />
  <Button disabled color="info">Info</Button>
</div>

<div className="mt-2">
  <Button disabled variant="primary">Disabled</Button>
  <i className="pr-2" />
  <Button disabled variant="primary" color="success">Success</Button>
  <i className="pr-2" />
  <Button disabled variant="primary" color="danger">Danger</Button>
  <i className="pr-2" />
  <Button disabled variant="primary" color="warning">Warning</Button>
  <i className="pr-2" />
  <Button disabled variant="primary" color="info">Info</Button>
</div>

<div className="mt-2">
  <Button disabled variant="tertiary">Disabled</Button>
  <i className="pr-2" />
  <Button disabled variant="tertiary" color="success">Success</Button>
  <i className="pr-2" />
  <Button disabled variant="tertiary" color="danger">Danger</Button>
  <i className="pr-2" />
  <Button disabled variant="tertiary" color="warning">Warning</Button>
  <i className="pr-2" />
  <Button disabled variant="tertiary" color="info">Info</Button>
</div>
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

#### **Loading Button controlled**

To handle Loading state, you could manually control the:

- disabled state
- onClick handler
- Button text

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

#### **Loading Button uncontrolled**

For easier usage and for long running actions, you should use the **`loading`** prop:

- defaults to "Please wait..." when passing true;
- cycles through various messages every 10s;

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
