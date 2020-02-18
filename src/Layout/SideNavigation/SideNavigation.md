### **Description**

Side navigation panel slides to right when the mouse hovers over it.
<br />
By default the panel is closed.
<br />
It supports menu and submenu.

<br />

### **Side Navigation**

```jsx
import SideNavigation from "./SideNavigation.jsx";

<div style={{height: 400, width: 500}}>
    <SideNavigation
        headerName="FMHub"
        items={[
            {
                icon: 'fas fa-tachometer-alt',
                text: 'Dashboard',
                link: '/dashboard'
            },
            {
                icon: 'fas fa-database',
                text: 'Data Protection',
                subItems: [
                    {
                        text: 'Datastores',
                        link: '/datastores'
                    },
                    {
                        text: 'Shares',
                        link: '/shares'
                    }
                ]
            },
            {
                icon: 'fas fa-user',
                text: 'Users',
                subItems: [
                    {
                        text: 'About me',
                        link: '/about-me'
                    },
                    {
                        text: 'All users',
                        link: '/all-users'
                    }
                ]
            }
        ]}
    />
</div>
```
