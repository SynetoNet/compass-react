### **Typography**

```jsx
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<a href="https://github.com/SynetoNet/compass-react">Link</a>

<br />
<br />

<p>Paragraph text</p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
```

### **Text colors**

The following text colors are available as CSS classes:

```jsx
<p className="text-primary">Primary text</p>
<p className="text-success">Success text</p>
<p className="text-danger">Danger text</p>
<p className="text-warning">Warning text</p>
<p className="text-info">Info text</p>
<p className="text-muted">Muted text</p>
<p className="text-disabled">Disabled text</p>
```

<br/>

The following background colors are available as CSS classes:

```jsx
<p className="bg-primary text-white p-2">Primary block</p>
<p className="bg-success text-white p-2">Success block</p>
<p className="bg-danger text-white p-2">Danger block</p>
<p className="bg-warning text-white p-2">Warning block</p>
<p className="bg-info text-white p-2">Info block</p>
```

<br/>

### **Layout**

For a comprehensive documentation on layout, please checkout react-bootstrap's [Grid System](https://react-bootstrap.github.io/layout/grid/).

```jsx static
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
```

<br/>

### **Spacing**

For a comprehensive documentation on margins and paddings, please checkout Bootstrap's [Spacing System](https://getbootstrap.com/docs/4.3/utilities/spacing/).

```jsx
<span className="p-3 bg-primary text-white">Padded text</span>
<span className="ml-3 py-3 bg-info text-white">Margin left, padded vertical</span>
```