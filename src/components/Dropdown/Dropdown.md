#### **Basic Dropdown**

```jsx
<Dropdown
  label="Toggle Dropdown"
  onSelect={eventKey => console.log(eventKey)}
  items={[
    {
      label: "Action",
      eventKey: "action-key",
      onSelect: () => console.log("Additional handler")
    },
    {
      label: "No event key",
      onSelect: () => console.log("eventKey is the label")
    },
    {
      label: "No additional handler"
    },
    {
      label: "Some very long action name"
    }
  ]}
/>
```

#### **Right aligned Dropdown**

```jsx
<Dropdown
  alignRight
  label="Toggle Dropdown"
  onSelect={eventKey => console.log(eventKey)}
  items={[
    {
      label: "Some very long action name"
    }
  ]}
/>
```

#### **Variants**

```jsx
<Dropdown
  label="Primary Dropdown"
  variant="primary"
  onSelect={eventKey => console.log(eventKey)}
  items={[{ label: "Option 1" }, { label: "Option 2" }]}
/>
<div className="mt-3"></div>
<Dropdown
  label="Tertiary Dropdown"
  variant="tertiary"
  onSelect={eventKey => console.log(eventKey)}
  items={[{ label: "Option 1" }, { label: "Option 2" }]}
/>
```

#### **Extended usage**

```jsx
import { Badge } from "../../index";

<Dropdown label="Toggle Dropdown" onSelect={eventKey => console.log(eventKey)}>
  <Dropdown.Menu>
    <Dropdown.Header>Section header</Dropdown.Header>
    <Dropdown.Item eventKey="action">Action</Dropdown.Item>
    <Dropdown.Item disabled eventKey="disabled">
      Disabled action
    </Dropdown.Item>

    <Dropdown.Divider />

    <Dropdown.Header>Separate actions</Dropdown.Header>
    <Dropdown.Item eventKey="normal">
      <Badge block>Normal action</Badge>
    </Dropdown.Item>
    <Dropdown.Item eventKey="success">
      <Badge color="success" block>
        Success action
      </Badge>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
```

#### **Custom dropdown**

```jsx
import { Badge } from "../../index";

<Dropdown
  label={
    <Badge variant="outline" color="info">
      Custom dropdown
    </Badge>
  }
  onSelect={eventKey => console.log(eventKey)}
  items={[{ label: "Option 1" }, { label: "Option 2" }]}
/>;
```
