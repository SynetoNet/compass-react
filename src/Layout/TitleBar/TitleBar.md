#### **Title Bar**

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
