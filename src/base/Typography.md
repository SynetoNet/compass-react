### Documentation and examples for Compass typography, including global settings, headings ###
<br/>

### **Global settings** ###
Compass sets basic global display, typography, and link styles.
When more control is needed, check out [utility classes](src/base/Utilities.md).

Defaults:
- font-family: `Roboto`
- font-size: `13px`
- we use `px`

### **Headings** ###
```jsx
<table className="table">
    <thead>
        <tr>
            <th>Heading</th>
            <th>Size</th>
            <th>Line height</th>
            <th>Example</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>{`<h1>`}</td>
            <td>24px</td>
            <td>28px</td>
            <td><h1>Heading 1</h1></td>
        </tr>

        <tr>
            <td>{`<h2>`}</td>
            <td>22px</td>
            <td>25px</td>
            <td><h2>Heading 2</h2></td>
        </tr>

        <tr>
            <td>{`<h3>`}</td>
            <td>20px</td>
            <td>24px</td>
            <td><h3>Heading 3</h3></td>
        </tr>

        <tr>
            <td>{`<h4>`}</td>
            <td>18px</td>
            <td>21px</td>
            <td><h4>Heading 4</h4></td>
        </tr>

        <tr>
            <td>{`<h5>`}</td>
            <td>15px</td>
            <td>18px</td>
            <td><h5>Heading 5</h5></td>
        </tr>

        <tr>
            <td>{`<h6>`}</td>
            <td>13px</td>
            <td>15px</td>
            <td><h6>Heading 6</h6></td>
        </tr>
    </tbody>
</table>
```

```jsx
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


### **Spacing**

For a comprehensive documentation on margins and paddings, please checkout Bootstrap's [Spacing System](https://getbootstrap.com/docs/4.3/utilities/spacing/).

```jsx
<span className="p-3 bg-primary text-white">Padded text</span>
<span className="ml-3 py-3 bg-info text-white">Margin left, padded vertical</span>
```
