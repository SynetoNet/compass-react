#### **Default**

```jsx
import Badge from "../Badge/Badge";

<Tooltip text="Some additional info">
  <Badge>Hover over me!</Badge>
</Tooltip>;
```

#### **Placement**

Default placement is **`auto`**, but you can specify where to place the tooltip:

```jsx
import Badge from "../Badge/Badge";
<>
  <Tooltip placement="left" text="Some additional info">
    <Badge>Left</Badge>
  </Tooltip>

  <i className="mx-1" />

  <Tooltip placement="top" text="Some additional info">
    <Badge>Top</Badge>
  </Tooltip>

  <i className="mx-1" />

  <Tooltip placement="bottom" text="Some additional info">
    <Badge>Bottom</Badge>
  </Tooltip>

  <i className="mx-1" />

  <Tooltip placement="right" text="Some additional info">
    <Badge>Right</Badge>
  </Tooltip>
</>;
```

#### **Trigger**

```jsx
import Button from "../Button/Button";

<>
  <Tooltip text="Some additional info" trigger="click">
    <Button>Click me!</Button>
  </Tooltip>

  <i className="mx-1" />

  <Tooltip text="Some additional info">
    <Button>Hover over me!</Button>
  </Tooltip>
</>;
```

#### **Theme**

```jsx
import Badge from "../Badge/Badge";
<>
  <Tooltip text="Dark theme tooltip" theme="dark">
    <Badge>Dark</Badge>
  </Tooltip>

  <i className="mx-1" />

  <Tooltip text="Light theme tooltip" theme="light">
    <Badge>Light</Badge>
  </Tooltip>
</>;
```
