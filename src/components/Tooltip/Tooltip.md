#### **Default**

```jsx
import Badge from "../Badge/Badge";

<Tooltip text="Some additional info">
  <Badge variant="strong">Over over me!</Badge>
</Tooltip>;
```

#### **Placement**

```jsx
import Badge from "../Badge/Badge";
<>
  <Tooltip placement="top" text="Some additional info" trigger="hover">
    <Badge variant="strong">Tooltip on top</Badge>
  </Tooltip>
  <Tooltip placement="bottom" text="Some additional info" trigger="hover">
    <Badge variant="strong">Tooltip on bottom</Badge>
  </Tooltip>
  <Tooltip placement="right" text="Some additional info" trigger="hover">
    <Badge variant="strong">Tooltip on the right</Badge>
  </Tooltip>
  <Tooltip placement="left" text="Some additional info" trigger="hover">
    <Badge variant="strong">Tooltip on the left</Badge>
  </Tooltip>
</>;
```

#### **Trigger**

```jsx
import Button from "../Button/Button";
<>
  <div>
    Click -
    <Tooltip placement="right" text="Some additional info" trigger="click">
      <Button variant="primary">Click me!</Button>
    </Tooltip>
  </div>
  <div>
    Hover -
    <Tooltip placement="right" text="Some additional info" trigger="hover">
      <Button variant="primary">Hover over me!</Button>
    </Tooltip>
  </div>
  <div>
    Focus -
    <Tooltip placement="right" text="Some additional info" trigger="focus">
      <Button variant="primary">Focus me!</Button>
    </Tooltip>
  </div>
</>;
```

#### **Theme**

```jsx
import Badge from "../Badge/Badge";
<>
  <Tooltip
    placement="top"
    text="Dark theme tooltip"
    trigger="hover"
    theme="dark"
  >
    <Badge variant="strong">Hover</Badge>
  </Tooltip>
  <Tooltip
    placement="top"
    text="Light theme tooltip"
    trigger="hover"
    theme="light"
  >
    <Badge variant="strong">Hover</Badge>
  </Tooltip>
</>;
```
