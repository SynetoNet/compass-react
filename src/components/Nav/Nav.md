#### This is an export of existing React Bootstrap Nav component: https://react-bootstrap.netlify.com/components/navs/ with some custom styling
<br/>

#### **Base Nav**

```jsx
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
```

#### **Pills**

```jsx
<Nav variant="pills" defaultActiveKey="#">
  <Nav.Item>
    <Nav.Link href="#">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
```

#### **Using icons**

```jsx
import Icon from "../Icon/Icon.jsx";

<Nav variant="pills" defaultActiveKey="#">
  <Nav.Item>
    <Nav.Link href="#">
      <Icon name="fas fa-user" size="md"/> Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">
      <Icon name="fas fa-user" size="md"/> Option 2
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      <Icon name="fas fa-user" size="md"/> Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
```

#### **Using only icons**

```jsx
import Icon from "../Icon/Icon.jsx";

<Nav variant="pills" defaultActiveKey="#">
  <Nav.Item>
    <Nav.Link href="#">
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
</Nav>
```

#### **Using dropdowns**
- The first dropdown uses React Bootstrap `NavDropdown` component
- The second dropdown uses Compass's own dropdown component

```jsx
import Dropdown from "../Dropdown/Dropdown.jsx";

<Nav variant="pills" activeKey="1" onSelect={(eventKey) => alert(`selected ${eventKey}`)}>
  <Nav.Item>
    <Nav.Link eventKey="1" href="#">
      NavLink 1
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" title="Item">
      NavLink 2
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3" disabled>
      NavLink 3
    </Nav.Link>
  </Nav.Item>

  <Nav.NavDropdown title="Dropdown" id="nav-dropdown">
    <Nav.NavDropdown.Item eventKey="4.1">Action</Nav.NavDropdown.Item>
    <Nav.NavDropdown.Item eventKey="4.2">Another action</Nav.NavDropdown.Item>
    <Nav.NavDropdown.Item eventKey="4.3">Something else here</Nav.NavDropdown.Item>
    <Nav.NavDropdown.Divider />
    <Nav.NavDropdown.Item eventKey="4.4">Separated link</Nav.NavDropdown.Item>
  </Nav.NavDropdown>

  <Dropdown
    label="Primary Dropdown"
    role="primary"
    onSelect={eventKey => console.log(eventKey)}
    items={[{ label: "Option 1" }, { label: "Option 2" }]}
  />
</Nav>
```

#### **Syneto variant**
- add the class `syneto` to Nav component
- for icon nav.item add the class `syneto-icon-link`
```jsx
import Icon from "../Icon/Icon.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import Button from "../Button/Button.jsx";

<Nav className="syneto" variant="pills" defaultActiveKey="#">
  <Nav.Item>
    <Nav.Link href="#" className="syneto-icon-link">
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" className="syneto-icon-link">
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="1" href="#">
      NavLink 1
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" title="Item">
      <Icon name="fas fa-user" size="md"/> NavLink 2
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3" disabled>
      NavLink 3
    </Nav.Link>
  </Nav.Item>

  <Dropdown
    label={
      <Nav.Item>
        <Nav.Link eventKey="4" title="Item">
          <Icon name="fas fa-user" size="md"/>
          <span> John Doe </span>
          <Icon name="fas fa-caret-down" size="md"/>
        </Nav.Link>
      </Nav.Item>
    }
    onSelect={eventKey => console.log(eventKey)}
    items={[{ label: "Option 1" }, { label: "Option 2" }]}
  />
</Nav>
```

#### **Custom styling**

```jsx
import Icon from "../Icon/Icon.jsx";

<Nav variant="pills" defaultActiveKey="#" style={{background: "pink"}}>
  <Nav.Item>
    <Nav.Link href="#" style={{background: "blue"}}>
      <Icon name="fas fa-user" size="md"/> Active
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      <Icon name="fas fa-user" size="md"/> Disabled
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" style={{background: "green", borderRadius: "100%", color: "white"}}>
      <Icon name="fas fa-user" size="md"/>
    </Nav.Link>
  </Nav.Item>
</Nav>
```
