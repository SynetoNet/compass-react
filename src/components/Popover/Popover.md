#### **Basic usage**

```jsx
import Badge from "../Badge/Badge";

<Popover content="Popover content. Lorem Ipsum is simply dummy text.">
  <Badge>Hover over me!</Badge>
</Popover>;
```

#### **Optional title**

```jsx
import Badge from "../Badge/Badge";

<Popover
  title="Popover title"
  content="Popover content. Lorem Ipsum is simply dummy text."
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
    width={500}
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

#### **Nested Popovers**

```jsx
import Button from "../Button/Button";

<Popover
  title="First popover"
  content={
    <div>
      <p>Lorem Ipsum is simply dummy text.</p>
      <Popover
        title="Second popover"
        content={
          <div>
            <p>Lorem Ipsum is simply dummy text. </p>
            <Popover
              title="Third popover"
              content={<div>Lorem Ipsum is simply dummy text.</div>}
              trigger="click"
            >
              <Button>Click to open #3</Button>
            </Popover>
          </div>
        }
        trigger="click"
      >
        <Button>Click to open #2</Button>
      </Popover>
    </div>
  }
  trigger="click"
>
  <Button>Click to open #1</Button>
</Popover>;
```
