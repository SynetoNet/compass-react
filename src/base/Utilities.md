### Documentation and examples for Compass custom utilities to control text and background color, spacing and more. ###
<br/>

### **Bootstrap classes colors**

For **background colors**, the following Bootstrap classes are available:
```jsx
<p className="bg-primary text-white p-2">Primary block</p>
<p className="bg-success text-white p-2">Success block</p>
<p className="bg-danger text-white p-2">Danger block</p>
<p className="bg-warning text-white p-2">Warning block</p>
<p className="bg-info text-white p-2">Info block</p>
<p className="bg-dark text-white p-2">Info block</p>
<p className="bg-light text-black p-2">Info block</p>
<p className="bg-transparent text-black p-2">Info block</p>
```

For **text colors**, the following Bootstrap classes are available:
```jsx
<p className="text-primary">Primary text</p>
<p className="text-success">Success text</p>
<p className="text-danger">Danger text</p>
<p className="text-warning">Warning text</p>
<p className="text-info">Info text</p>
<p className="text-muted">Muted text</p>
<p className="text-disabled">Disabled text</p>
```

<br/>

### **Compass classes colors**

For **background colors**, those can be used the same as Bootstrap classes colors: you need to use the **bg-** prefix and a Compass color,
for example **bg-brand-dark-40** or **bg-neutral-90-vivid**

```jsx
<p className="bg-brand-dark-40 text-white p-2">Example</p>
<p className="bg-neutral-90-vivid text-white p-2">Example</p>
```

For **text colors**, those can be used the same as Bootstrap classes colors: you need to use the **text-** prefix and a Compass color,
for example **text-brand-dark-40** or **text-neutral-90-vivid**

```jsx
<p className="text-brand-dark-40">Example</p>
<p className="text-neutral-90-vivid">Example</p>
```

### **Spacing**

For a comprehensive documentation on margins and paddings, please checkout Bootstrap's [Spacing System](https://getbootstrap.com/docs/4.3/utilities/spacing/).

```jsx
<span className="p-3 bg-primary text-white">Padded text</span>
<span className="ml-3 py-3 bg-info text-white">Margin left, padded vertical</span>
```
