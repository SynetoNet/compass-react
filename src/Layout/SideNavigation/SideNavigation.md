### Description
Side navigation panel slides to the right side at mouse **hover**. By default the panel is closed.
<br/>
It supports **menu** and **submenu** objects.
<br/>
The **brand** item should have a different object then the others, as presented in the code below.

```jsx
import Image from '../../base/assets/icons/syneto.svg';
import Logo from '../../base/assets/icons/syneto-icon.svg';
import SideNavigation from "./SideNavigation.jsx";

<div style={{
    /* This wrapper div is only for Styleguidist demo purposes, to keep the component inside this frame */
    height: 500,
    position: "relative",
    transform: "translate3d(0, 0, 0)"
}}
>
    <SideNavigation
        defaultEventKey="dashboard"
        onSelect={ (selected) => {console.log(selected)}}
        items={[
            {
                eventKey: 'brand',
                brandImage: Image,
                brandLogo: Logo,
                brandTitle: "CFM HUB",
                onClick: () => {console.log('brand')}
            },
            {
                icon: 'fas fa-tachometer-alt',
                title: 'Dashboard',
                eventKey: 'dashboard',
            },
            {
                icon: 'fas fa-window-maximize',
                title: 'Virtual Machines',
                eventKey: 'virtual-machines',
                subItems: [
                    {
                        title: 'Machine 1',
                        eventKey: 'virtual-machines/machine-1',
                    },
                    {
                        title: 'Machine 2',
                        eventKey: 'virtual-machines/machine-2',
                    }
                ]
            },
            {
                icon: 'fas fa-database',
                title: 'Datastores',
                eventKey: 'datastores',
            },
            {
                icon: 'fas fa-exchange-alt',
                title: 'Shares',
                eventKey: 'shares',
            }
        ]}
        bottomItems={[
            {
                icon: 'fas fa-layer-group',
                title: 'Virtual Appliance',
                eventKey: 'virtual-appliance',
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Support',
                eventKey: 'support',
            },
        ]}
    />
</div>
```
