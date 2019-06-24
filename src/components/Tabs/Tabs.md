### **Description**

Used when a lot of information should be displayed in a small amount of space.
Information is displayed in tabs by grouping it in several categories, each category becoming a tab head.

<br />
<br />

#### **Default Tabs**

By default, tabs are horizontal and left aligned:

```jsx
<Tabs>
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Right aligned**

```jsx
<Tabs align="end">
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Vertical Tabs**

```jsx
<Tabs layout="vertical">
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title="Contact" disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>
```

#### **Custom title**

The **`title`** prop supports any React Component:

```jsx
import Badge from "../Badge/Badge";

const Inbox = (
  <>
    Inbox{" "}
    <Badge color="success" variant="strong" width={32} className="ml-2">
      2
    </Badge>
  </>
);

const Urgent = (
  <>
    Urgent{" "}
    <Badge color="danger" variant="strong" width={32} className="ml-2">
      2
    </Badge>
  </>
);

const Trash = (
  <>
    Trash{" "}
    <Badge variant="outline" width={32}>
      99+
    </Badge>
  </>
);

<Tabs>
  <Tabs.Tab eventKey="home" title={Inbox}>
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title={Urgent}>
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
  <Tabs.Tab eventKey="contact" title={Trash} disabled>
    How do I love you? Let me count the ways. I love your clad ankle, elbows and
    smile. Thinking of your glad elbows fills my days. My love for you is the
    bally air mile.
  </Tabs.Tab>
</Tabs>;
```

#### **Extra content**

You can render any additional content inline with the Tab Navigation. Your content will be rendered inside a flex container, that fills the entire empty space in the Navigation.

```jsx
import Button from "../Button/Button";

<Tabs
  extra={
    <>
      <strong style={{ flex: 1 }}>Extra title</strong>
      <Button variant="link">Extra link</Button>
    </>
  }
  align="end"
>
  <Tabs.Tab eventKey="home" title="Home">
    My heavy fox, you inspire me to write. How I love the way you skip, sleep
    and sneer, Invading my mind day and through the night, Always dreaming about
    the cunning smear.
  </Tabs.Tab>
  <Tabs.Tab eventKey="profile" title="Profile">
    Let me compare you to an ideal spoon? You are more deadpan, stunning and
    scaly. Fun sun heats the surreal peaches of June, And summertime has the
    vernal qualey.
  </Tabs.Tab>
</Tabs>;
```

#### **Controlled Tabs**

By default, the Tabs are uncontrolled, having their own internal state regarding the activeTab. If you specify the **`activeKey`** and the **`onSelect`** handler, you can turn this into a controlled component:

```jsx
import { useState } from "react";

const ControlledTabs = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <>
      <Tabs activeKey={activeKey} onSelect={tab => setActiveKey(tab)}>
        <Tabs.Tab eventKey="home" title="Home">
          Home tab content, my heavy fox, you inspire me to write.
        </Tabs.Tab>
        <Tabs.Tab eventKey="profile" title="Profile">
          Profile tab, let me compare you to an ideal spoon?
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

<ControlledTabs />;
```

#### **Extra Dropdown**

To handle additional actions, it is required to make the Tab a controlled component:

```jsx
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const ControlledTabsWithDropdown = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onSelect={tab => {
          setActiveKey(tab);
          console.log("selected tab", tab);
        }}
        extra={
          <Dropdown
            label="Dropdown"
            variant="tertiary"
            onSelect={eventKey =>
              console.log("selected dropdown option", eventKey)
            }
            items={[{ label: "Option 1" }, { label: "Option 2" }]}
          />
        }
      >
        <Tabs.Tab eventKey="home" title="Home">
          Home tab content, my heavy fox, you inspire me to write.
        </Tabs.Tab>
        <Tabs.Tab eventKey="profile" title="Profile">
          Profile tab, let me compare you to an ideal spoon?
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

<ControlledTabsWithDropdown />;
```
