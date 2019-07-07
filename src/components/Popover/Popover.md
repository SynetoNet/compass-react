#### **Default**

```jsx
import Badge from "../Badge/Badge";

<Popover title="Some additional info" content="Some content">
  <Badge variant="strong">Hover over me!</Badge>
</Popover>;
```

#### **Placement**

```jsx
import Badge from "../Badge/Badge";
<>
  <Popover
    placement="top"
    title="Some additional info"
    trigger="hover"
    content="Some content"
  >
    <Badge variant="strong">Popover on top</Badge>
  </Popover>
  <Popover
    placement="bottom"
    title="Some additional info"
    trigger="hover"
    content="Some content"
  >
    <Badge variant="strong">Popover on bottom</Badge>
  </Popover>
  <Popover
    placement="right"
    title="Some additional info"
    trigger="hover"
    content="Some content"
  >
    <Badge variant="strong">Popover on the right</Badge>
  </Popover>
  <Popover
    placement="left"
    title="Some additional info"
    trigger="hover"
    content="Some content"
  >
    <Badge variant="strong">Popover on the left</Badge>
  </Popover>
</>;
```

#### **Trigger**

```jsx
import Button from "../Button/Button";
<>
  <div>
    Click -
    <Popover
      placement="right"
      title="Some additional info"
      trigger="click"
      content="Some content"
    >
      <Button variant="primary">Click me!</Button>
    </Popover>
  </div>
  <div>
    Hover -
    <Popover
      placement="right"
      title="Some additional info"
      trigger="hover"
      content="Some content"
    >
      <Button variant="primary">Hover over me!</Button>
    </Popover>
  </div>
  <div>
    Focus -
    <Popover
      placement="right"
      title="Some additional info"
      trigger="focus"
      content="Some content"
    >
      <Button variant="primary">Focus me!</Button>
    </Popover>
  </div>
</>;
```

#### **Extra content**

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
