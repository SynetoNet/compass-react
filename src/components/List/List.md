#### **Basic List**

Without title:

```jsx
<List
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

With title:

```jsx
<List
  title="List title"
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

#### **Tabbed List**

```jsx
<List
  title="List title"
  tabbed
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

#### **Compact List**

```jsx
<List
  title="List title"
  compact
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

#### **List item actions**

```jsx
<List
  title="List title"
  actions={[
    {
      label: "Edit",
      onSelect: value => console.log("Edit", value)
    },
    {
      label: "Delete",
      onSelect: value => console.log("Delete", value)
    }
  ]}
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

#### **Actions in compact list**

Without title:

```jsx
<List
  compact
  actions={[
    {
      label: "Edit",
      onSelect: value => console.log("Edit", value)
    },
    {
      label: "Delete",
      onSelect: value => console.log("Delete", value)
    }
  ]}
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

With title:

```jsx
<List
  title="List title"
  compact
  actions={[
    {
      label: "Edit",
      onSelect: value => console.log("Edit", value)
    },
    {
      label: "Delete",
      onSelect: value => console.log("Delete", value)
    }
  ]}
  items={[
    { label: "Phone", value: "(0756) 789 123" },
    { label: "Email Address", value: "jonsnow@winterfell.north" }
  ]}
/>
```

#### **Extended usage**

```jsx
<List title="List title">
  <List.Item label="Phone">(0756) 789 123</List.Item>
  <List.Item label="Email Address">jonsnow@winterfell.north</List.Item>
</List>
```
