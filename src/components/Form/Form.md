### Simple Form

```jsx
import { Button } from "../../index";
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
```

### Form controls

```jsx
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Disabled Input</Form.Label>
    <Form.Control disabled type="text" placeholder="Disabled Input" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
```

### Plaintext

```jsx
<Form>
  <Form.Group controlId="formPlaintextEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control plaintext readOnly defaultValue="email@example.com" />
  </Form.Group>
  <Form.Group controlId="formPlaintextPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
```

### Checkboxes and Radios - Default

```jsx
<Form>
  {["checkbox", "radio"].map(type => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Group>
        <Form.Check
          custom
          name={type}
          type={type}
          id={`default-${type}`}
          label={`default ${type}`}
        />
        <Form.Check
          name={type}
          type={type}
          id={`default-${type}-1`}
          label={`default ${type}`}
        />
        <Form.Check
          name={type}
          type={type}
          id={`default-${type}-2`}
          label={`default ${type}`}
        />

        <Form.Check
          disabled
          type={type}
          label={`disabled ${type}`}
          id={`disabled-default-${type}`}
        />
      </Form.Group>
    </div>
  ))}
</Form>
```

### Checkboxes and Radios - Inline

```jsx
<Form>
  {["checkbox", "radio"].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="1"
        name={type}
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="2"
        name={type}
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        disabled
        label="3 (disabled)"
        type={type}
        name={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
```

### Combo box

```jsx
import { ComboBox } from "../../index";
<Form>
  <ComboBox
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
      { value: "cookieDough", label: "Cookie Dough" },
      { value: "pistachio", label: "Pistachio" },
      { value: "rockyRoad", label: "Rocky Road" }
    ]}
    selected={{ value: "vanilla", label: "Vanilla" }}
    placeholder="Select ice cream flavor..."
  />
</Form>;
```

### Combo box - Multi Select

```jsx
import { ComboBox } from "../../index";
<Form>
  <ComboBox
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
      { value: "cookieDough", label: "Cookie Dough" },
      { value: "pistachio", label: "Pistachio" },
      { value: "rockyRoad", label: "Rocky Road" }
    ]}
    multiSelect
    selected={{ value: "vanilla", label: "Vanilla" }}
    placeholder="Select ice cream flavor..."
  />
</Form>;
```

### Form Grid

```jsx
import { Col } from "../../index";

<Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
</Form>;
```

### Complex Layout

```jsx
import { Col, Button } from "../../index";

<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
```
