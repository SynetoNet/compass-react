#### **Default**

```jsx
import Badge from "../Badge/Badge";

<Popover title="Default popover">
  <Badge variant="strong">Hover over me!</Badge>
</Popover>;
```

#### **Badge Example on hover**

```jsx
import Badge from "../Badge/Badge";

<Popover
  placement="top"
  title="Popover title"
  content={"Some additional info"}
  trigger="hover"
>
  <Badge variant="strong">Hover over me!</Badge>
</Popover>;
```

#### **Button Example on click**

```jsx
import Button from "../Button/Button";

<Popover
  placement="right"
  title="Popover title"
  content={
    <>
      <div>Here's an example of text and another component</div>
      <br />
      <Button variant="primary">Click me!</Button>
    </>
  }
  trigger="click"
>
  <Button variant="primary">Click me!</Button>
</Popover>;
```

#### **Button Example on focus**

```jsx
import Button from "../Button/Button";
<Popover
  placement="left"
  title="Popover title"
  content={"Some additional info"}
  trigger="focus"
>
  <Button variant="primary">Click me!</Button>
</Popover>;
```
