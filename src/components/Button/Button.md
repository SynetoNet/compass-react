#### **Primary Buttons**

```jsx
<Button >Primary</Button>
<i className="pe-2" />
<Button  appearance="success">Success</Button>
<i className="pe-2" />
<Button  appearance="danger">Danger</Button>
<i className="pe-2" />
<Button  appearance="warning">Warning</Button>
<i className="pe-2" />
<Button  appearance="info">Info</Button>
```

#### **Secondary Buttons**

```jsx
<Button role="secondary">Secondary Button</Button>
<i className="pe-2" />
<Button role="secondary" appearance="success">Success</Button>
<i className="pe-2" />
<Button role="secondary" appearance="danger">Danger</Button>
<i className="pe-2" />
<Button role="secondary" appearance="warning">Warning</Button>
<i className="pe-2" />
<Button role="secondary" appearance="info">Info</Button>
```

#### **Tertiary Buttons**

```jsx
<Button role="tertiary">Tertiary</Button>
<i className="pe-2" />
<Button role="tertiary" appearance="success">Success</Button>
<i className="pe-2" />
<Button role="tertiary" appearance="danger">Danger</Button>
<i className="pe-2" />
<Button role="tertiary" appearance="warning">Warning</Button>
<i className="pe-2" />
<Button role="tertiary" appearance="info">Info</Button>
```

#### **Link**

```jsx
<Button role="link" href="https://github.com/SynetoNet/compass-react">
  Link
</Button>
```

#### **Block Buttons**

```jsx
<Button block>Primary</Button>
<i className="pe-2" />
<Button block appearance="success">Success</Button>
<i className="pe-2" />
```

#### **Button types**

```jsx
<Button>Normal button</Button>
<i className="pe-2" />
<Button type="submit">Submit button</Button>
<i className="pe-2" />
<Button type="reset">Reset button</Button>
```

#### **Disabled Buttons**

```jsx
<div>
  <Button disabled>Disabled</Button>
  <i className="pe-2" />
  <Button disabled appearance="success">Success</Button>
  <i className="pe-2" />
  <Button disabled appearance="danger">Danger</Button>
  <i className="pe-2" />
  <Button disabled appearance="warning">Warning</Button>
  <i className="pe-2" />
  <Button disabled appearance="info">Info</Button>
</div>

<div className="mt-2">
  <Button disabled role="secondary">Disabled</Button>
  <i className="pe-2" />
  <Button disabled role="secondary" appearance="success">Success</Button>
  <i className="pe-2" />
  <Button disabled role="secondary" appearance="danger">Danger</Button>
  <i className="pe-2" />
  <Button disabled role="secondary" appearance="warning">Warning</Button>
  <i className="pe-2" />
  <Button disabled role="secondary" appearance="info">Info</Button>
</div>

<div className="mt-2">
  <Button disabled role="tertiary">Disabled</Button>
  <i className="pe-2" />
  <Button disabled role="tertiary" appearance="success">Success</Button>
  <i className="pe-2" />
  <Button disabled role="tertiary" appearance="danger">Danger</Button>
  <i className="pe-2" />
  <Button disabled role="tertiary" appearance="warning">Warning</Button>
  <i className="pe-2" />
  <Button disabled role="tertiary" appearance="info">Info</Button>
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
      role="primary"
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
    <Button role="primary" loading={loading} onClick={handleClick}>
      {"Click to load"}
    </Button>
  );
};

<LoadingExample />;
```
