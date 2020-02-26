#### **Layout with Drawer**

```jsx
import Layout from "./Layout.jsx";
import SideNavigation from "../SideNavigation/SideNavigation.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";

import Image from '../../base/assets/icons/syneto.svg';
import Logo from '../../base/assets/icons/syneto-icon.svg';

<div style={{height: 100}}>
    <Layout
        hasDrawer={true}
        drawer={<div>Drawer</div>}
        header={<div>Header</div>}
        content={<div>Main content</div>}
    />
</div>
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
