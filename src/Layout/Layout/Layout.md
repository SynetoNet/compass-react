#### **Layout with Drawer**

```jsx
import Layout from "./Layout.jsx";

<Layout
    hasDrawer={true}
    drawer={<div>Drawer</div>}
    header={<div>Header</div>}
    content={<div>Main content</div>}
/>
```

#### **Layout without Drawer**

```jsx
import Layout from "./Layout.jsx";

<Layout
    hasDrawer={false}
    header={<div>Header</div>}
    content={<div>Main content</div>}
/>
```
