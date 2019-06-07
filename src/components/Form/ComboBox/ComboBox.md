#### **Basic example**

```jsx
<ComboBox
  options={[
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "cookieDough", label: "Cookie Dough" },
    { value: "pistachio", label: "Pistachio" },
    { value: "rockyRoad", label: "Rocky Road" }
  ]}
  selected={{ value: "vanilla", label: "Vanilla" }}
  placeholder="Select ice cream flavor..."
/>
```

#### **Multi Select**

```jsx
<ComboBox
  options={[
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "cookieDough", label: "Cookie Dough" },
    { value: "pistachio", label: "Pistachio" },
    { value: "rockyRoad", label: "Rocky Road" }
  ]}
  multiSelect
  selected={{ value: "vanilla", label: "Vanilla" }}
  placeholder="Select ice cream flavor..."
/>
```
