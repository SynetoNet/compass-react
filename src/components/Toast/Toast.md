#### **Default**

```jsx
<Toast>
  <Toast.Header>
    <strong className="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>
```

#### **Dismissible**

```jsx
class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const { show } = this.state;
    const toggleShow = () => this.setState({ show: !show });
    return (
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    );
  }
}

<ToastExample />;
```

#### **Stacking**

```jsx
class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirst: true,
      showSecond: true
    };
  }

  render() {
    const { showFirst, showSecond } = this.state;
    const toggleShowFirst = () => this.setState({ showFirst: !showFirst });
    const toggleShowSecond = () => this.setState({ showSecond: !showSecond });
    return (
      <>
        <Toast show={showFirst} onClose={toggleShowFirst}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast show={showSecond} onClose={toggleShowSecond}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </>
    );
  }
}

<ToastExample />;
```

#### **Autohide**

Hides after 3 seconds

```jsx
import { Button } from "../../index.js";

class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    const { show } = this.state;
    const toggleShow = () => this.setState({ show: !show });

    return (
      <>
        <Toast show={show} onClose={toggleShow} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>

        <Button onClick={toggleShow}>Show Toast</Button>
      </>
    );
  }
}

<ToastExample />;
```
