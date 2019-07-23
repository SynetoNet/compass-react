#### **Card with Icon component**

```jsx
import { Icon } from "../../index.js";
<Card
  icon={<Icon name="fas fa-user fa-md" />}
  title={"Icon Card Title"}
  content={
    " Some quick example text to build on the card title and make up the bulk of the card's content."
  }
/>;
```

#### **Card with img **

In this case, you have to specify the external svg url.

```jsx
<Card
  icon={
    <img width="100px" height="100px" src="https://svgshare.com/i/EDi.svg" />
  }
  content={
    " Some quick example text to build on the card title and make up the bulk of the card's content."
  }
  title={"SVG Card Title"}
/>
```

#### **Card with actions dropdown**

```jsx
import { Badge, Dropdown } from "../../index.js";
<Card
  icon={
    <img width="100px" height="100px" src="https://svgshare.com/i/EDi.svg" />
  }
  content={
    " Some quick example text to build on the card title and make up the bulk of the card's content."
  }
  title={"SVG Card Title"}
  dropdown={
    <Dropdown
      label={"Actions"}
      onSelect={eventKey => console.log(eventKey)}
      variant="tertiary"
      items={[
        {
          label: "Action",
          eventKey: "action-key",
          onSelect: () => console.log("Additional handler")
        },
        {
          label: "No event key",
          onSelect: () => console.log("eventKey is the label")
        },
        {
          label: "No additional handler"
        },
        {
          label: "Some very long action name"
        }
      ]}
    />
  }
/>;
```
