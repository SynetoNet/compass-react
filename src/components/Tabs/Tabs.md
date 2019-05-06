### **Description**

Used when a lot of information should be displayed in a small amount of space.
Information is displayed in tabs by grouping it in several categories, each category becoming a tab head.

<br />
<br />
### Default

---

```jsx
import Tab from "../Tab/Tab.jsx";

<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    Lorem Ipsum first
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Lorem Ipsum second
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Lorem Ipsum third
  </Tab>
</Tabs>;
```

```jsx
import Tab from "../Tab/Tab.jsx";
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" vertical>
  <Tab eventKey="home" title="Home">
    Lorem Ipsum first
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Lorem Ipsum second
  </Tab>
  <Tab eventKey="contact" title="Contact">
    Lorem Ipsum third
  </Tab>
</Tabs>;
```

```jsx
import Tab from "../Tab/Tab.jsx";
// import TestInput from "../TestInput/TestInput.jsx";
import Form from "react-bootstrap/Form";
<Form noValidate>
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" vertical>
    <Tab
      eventKey="home"
      title={<Form.Check type={"radio"} label={"Home"} id={"home"} />}
    >
      Lorem Ipsum first
    </Tab>
    <Tab
      eventKey="profile"
      title={<Form.Check type={"radio"} label={"Profile"} id={"profile"} />}
    >
      Lorem Ipsum second
    </Tab>
    <Tab
      eventKey="contact"
      title={<Form.Check type={"radio"} label={"Contact"} id={"contact"} />}
    >
      Lorem Ipsum third
    </Tab>
  </Tabs>
</Form>;
```
