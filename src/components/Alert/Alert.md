#### **Default**

```jsx
[
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));
```

#### **Links**

```jsx
[
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert with{" "}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));
```

#### **Additional content**

```jsx
import { Icon } from "../../index.js";
<Alert variant="primary">
  <Alert.Heading>
    Hey, nice to see you! <Icon name="fas fa-user" />
  </Alert.Heading>

  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, click this <Alert.Link href="#">link</Alert.Link>.
  </p>
</Alert>;
```

#### **Dismissing**

```jsx
import { Button } from "../../index.js";
class AlertDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={handleShow}>Show Alert</Button>;
  }
}

<AlertDismissibleExample />;
```
