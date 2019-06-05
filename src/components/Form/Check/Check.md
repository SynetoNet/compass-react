### Checkboxes and Radios

```jsx
import { Form } from "../../../index";
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
</Form>;
```

### Inline

```jsx
import { Form } from "../../../index";
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
</Form>;
```
