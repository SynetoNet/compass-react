#### **Import**

ComboBox is based on [react-select](https://react-select.com/home) which is NOT bundled within compass, because it's a big library and not necessary needed.
<br/>
So, you need to install it separately:

```jsx static
npm i react-select@3.0.4
```

All the props given to ComboBox are forwarded to the react-select library.

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
  isMulti
  selected={{ value: "vanilla", label: "Vanilla" }}
  placeholder="Select ice cream flavor..."
/>
```
