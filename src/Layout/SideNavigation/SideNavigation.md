### **Description**
Side navigation panel slides to right when the mouse hovers over it.
<br/>
By default the panel is closed.
<br/>
It supports menu and submenu.

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
                onClick: () => {console.log('Dashboard')}
            },
            {
                icon: 'fas fa-window-maximize',
                title: 'Virtual Machines',
                eventKey: 'virtual-machines',
                subItems: [
                    {
                        title: 'Machine 1',
                        eventKey: 'virtual-machines/machine-1',
                        onClick: () => {console.log('Machine 1')}
                    },
                    {
                        title: 'Machine 2',
                        eventKey: 'virtual-machines/machine-2',
                        onClick: () => {console.log('Machine 2')}
                    }
                ]
            },
            {
                icon: 'fas fa-database',
                title: 'Datastores',
                eventKey: 'datastores',
                onClick: () => {console.log('Datastores')}
            },
            {
                icon: 'fas fa-exchange-alt',
                title: 'Shares',
                eventKey: 'shares',
                onClick: () => {console.log('Shares')}
            },
            {
                icon: 'fas fa-layer-group',
                title: 'Volumes',
                eventKey: 'volumes',
                onClick: () => {console.log('Volumes')}
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Data Protection',
                eventKey: 'data-protection',
                subItems: [
                    {
                        title: 'Volumes',
                        eventKey: 'data-protection/volumes',
                        onClick: () => {console.log('Volumes')}
                    },
                    {
                        title: 'External VMs',
                        eventKey: 'data-protection/external-vms',
                        onClick: () => {console.log('External VMs')}
                    }
                ]
            },
        ]}
    />
</div>

```
