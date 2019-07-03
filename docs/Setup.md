This document describes **Compass**, which is the design system used for [Syneto products](https://syneto.eu/products/).

<br />

### **1. Install**

```jsx static
npm i @syneto/compass-react
```

<br />

### **2. Include styles**

Include the following `.css` in your project's main file:

```jsx static
import "@syneto/compass-react/lib/styles.css";
```

<br />

### **3. Import and use components**

```jsx static
import { Badge } from "@syneto/compass-react";
```

<br />

### **4. Include fonts**

If you use **webpack**, you would have to handle font files as well, using [file-loader](https://webpack.js.org/loaders/file-loader):

```jsx static
// webpack.config.js
rules: [
  ...{
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: "file-loader"
      }
    ]
  }
];
```
