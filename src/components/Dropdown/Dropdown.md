#### **Simple Dropdown**

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
    }
  ]}
/>
```

#### **Extended usage**

```jsx
<Dropdown label="Toggle Dropdown" onSelect={eventKey => console.log(eventKey)}>
  <Dropdown.Menu>
    <Dropdown.Item eventKey="action">Action</Dropdown.Item>
    <Dropdown.Item eventKey="another">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="other">Something else</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item onSelect={() => console.log("Separate action")}>
      Separate action
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
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
