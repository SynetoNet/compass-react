#### This is an export of existing React Bootstrap Nav component: https://react-bootstrap.netlify.com/components/navbar/
<br/>

#### **Navbar Overview**
- Use the expand prop to allow for collapsing the Navbar at lower breakpoints.

```jsx
import Nav from "../Nav/Nav.jsx";
import Form from "../Form/Form.jsx";
import Button from "../Button/Button.jsx";
import Logo from '../../base/assets/icons/syneto-icon.svg';

<Navbar bg="brand-dark-40" expand="lg">
  <Navbar.Brand href="#home">
    <img
      src={Logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="React Bootstrap logo"
    />
    <span className="text-white"> Syneto Compass</span>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <Nav.NavDropdown.Item href="#action/3.1">Action</Nav.NavDropdown.Item>
        <Nav.NavDropdown.Item href="#action/3.2">Another action</Nav.NavDropdown.Item>
        <Nav.NavDropdown.Item href="#action/3.3">Something</Nav.NavDropdown.Item>
        <Nav.NavDropdown.Divider />
        <Nav.NavDropdown.Item href="#action/3.4">Separated link</Nav.NavDropdown.Item>
      </Nav.NavDropdown>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
```

#### **Navbar with Syneto Nav**
- add the class `syneto` to Navbar component
- for icon nav.item add the class `syneto-icon-link`

```jsx
import Nav from "../Nav/Nav.jsx";
import Form from "../Form/Form.jsx";
import Button from "../Button/Button.jsx";
import Logo from '../../base/assets/icons/syneto-icon.svg';
import Icon from "../Icon/Icon.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";

<Navbar bg="white" expand="lg" className="syneto">
  <Navbar.Brand href="#home">
    Syneto Compass
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto syneto" variant="pills" defaultActiveKey="#">
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
  </Navbar.Collapse>
</Navbar>
```
