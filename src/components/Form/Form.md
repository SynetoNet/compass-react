#### **Form Controls**

```jsx
import { Form } from "../../index";

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInputDisabled">
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
</Form>;
```

#### **Simple Form**

```jsx
import { Form, Button } from "../../index";
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

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
```

#### **Form Grid**

```jsx
import { Form, Col } from "../../index";

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

#### **Complex Layout**

```jsx
import { Form, Col, Button } from "../../index";

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

  <Form.Group controlId="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
```

#### **Validation feedback**

```jsx
import { useState } from "react";
import { Form, Button } from "../../index";

const FormValidation = () => {
  const [isValidated, setValidated] = useState(false);

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function submit(e) {
    e.preventDefault();
    setValidated(true);
  }

  return (
    <Form noValidate validated={isValidated} onSubmit={submit}>
      <Form.Group controlId="formValidationEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          A valid email is required
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formValidationSelect">
        <Form.Label>Gender</Form.Label>
        <Form.Control required as="select">
          <option value="">Please select</option>
          <option value="1">Female</option>
          <option value="2">Male</option>
          <option value="3">Non-binary</option>
          <option value="4">I'd rather not say</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please select your gender
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formValidationCheckbox">
        <Form.Check
          required
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          label="I agree with everything"
          feedback="You must agree with everything"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

<FormValidation />;
```
