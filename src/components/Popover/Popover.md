#### **Default**

```jsx
import Badge from "../Badge/Badge";

<Popover
  title="Popover title"
  content="Popover content. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
>
  <Badge>Hover over me!</Badge>
</Popover>;
```

#### **Placement**

```jsx
import Badge from "../Badge/Badge";
<>
  <Popover
    placement="left"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Badge>Left</Badge>
  </Popover>

  <i className="mx-1" />

  <Popover
    placement="top"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Badge>Top</Badge>
  </Popover>

  <i className="mx-1" />

  <Popover
    placement="bottom"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Badge>Bottom</Badge>
  </Popover>

  <i className="mx-1" />

  <Popover
    placement="right"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Badge>Right</Badge>
  </Popover>
</>;
```

#### **Trigger**

```jsx
import Button from "../Button/Button";
<>
  <Popover
    trigger="click"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Button>Click me!</Button>
  </Popover>

  <i className="mx-1" />

  <Popover
    trigger="hover"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Button>Hover over me!</Button>
  </Popover>

  <i className="mx-1" />

  <Popover
    trigger="focus"
    title="Title"
    content="Lorem Ipsum is simply dummy text."
  >
    <Button>Focus me!</Button>
  </Popover>
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
      <Button>Click me!</Button>
    </>
  }
  trigger="click"
>
  <Button>Click me!</Button>
</Popover>;
```
