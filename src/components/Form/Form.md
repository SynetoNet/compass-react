#### **Form Controls**

```jsx
import Form from "./Form";

<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInputDisabled">
    <Form.Label>Disabled Input</Form.Label>
    <Form.Control disabled type="text" placeholder="Disabled Input" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Select multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>;
```

#### **Simple Form**

```jsx
import Form from "./Form";
import { Button } from "../../index";

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <p>Inline Form Group - add "form-group-inline" class on Form Group</p>

  <Form.Group className="form-group-inline mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="form-group-inline mb-3" controlId="formBasicOccupation">
    <Form.Label>Occupation</Form.Label>
    <Form.Control type="text" placeholder="Occupation" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button type="submit">
    Submit
  </Button>
</Form>;
```

#### **Form Grid**

```jsx
import Form from "./Form";
import { Col, Row } from "../../index";

<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>;
```

#### **Complex Layout**

```jsx
import Form from "./Form";
import { Col, Row, Button } from "../../index";

<Form>
  <Row>
    <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row>
    <Form.Group className="mb-3" as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group className="mb-3" as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group className="mb-3" as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button type="submit">
    Submit
  </Button>
</Form>;
```

#### **Validation feedback**

```jsx
import { useState } from "react";
import Form from "./Form";
import { Button } from "../../index";

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
      <Form.Group className="mb-3" controlId="formValidationEmail">
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

      <Form.Group className="mb-3" controlId="formValidationSelect">
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

      <Form.Group className="mb-3" controlId="formValidationCheckbox">
        <Form.Check
          required
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          label="I agree with everything"
          feedback="You must agree with everything"
        />
      </Form.Group>

      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};

<FormValidation />;
```
