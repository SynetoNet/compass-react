### **Description**

TitleBar is a navigation component that display actions and information related to the current screen.

<br />
<br />

#### **Basic TitleBar**

```jsx
import TitleBar from "./TitleBar.jsx";

<TitleBar title="Title"/>
```

#### **TitleBar with navigation icons**

In this case, you have to provide the array of actions, in which are defined the navigation pages with its corresponding label and/or icon.

```jsx
import TitleBar from "./TitleBar.jsx";

<TitleBar
        title="Title"
        actions={[
          { icon: "fas fa-bell", link: "/another-page" },
          {
            icon: "fas fa-question-circle",
            menuItems: [
              {
                label: "item 1",
                onSelect: () => console.log("Navigate to item 1")
              },
              {
                label: "item 2",
                onSelect: () => console.log("Navigate to item 2")
              },
              {
                label: "item 3",
                onSelect: () => console.log("Navigate to item 3")
              }
            ]
          },
          {
            icon: "fas fa-cog",
            menuItems: [
              {
                label: "item 1",
                onSelect: () => console.log("Navigate to item 1")
              }
            ]
          },
          {
            icon: "fas fa-user",
            menuItems: [
              {
                label: "item 1",
                onSelect: () => console.log("Navigate to item 1")
              },
              {
                label: "item 2",
                onSelect: () => console.log("Navigate to item 2")
              }
            ]
          }
        ]}
      />
```
