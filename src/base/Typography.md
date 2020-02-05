### Documentation and examples for Compass typography, including global settings, headings ###
<br/>

### **Global settings** ###
Compass sets basic global display, typography, and link styles.
When more control is needed, check out Compass custom [utility classes](src/base/Utilities.md) or use the inherited
 [Bootstrap Typography classes](https://getbootstrap.com/docs/4.4/content/typography/)

Defaults:
- font-family: `Roboto`
- font-size: `13px`
- all sizes use `px`

### **Headings** ###
```jsx
<table className="table">
    <thead>
        <tr>
            <th>Heading</th>
            <th>Font size</th>
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

### **Size scale** ###
```jsx
<table className="table">
    <thead>
        <tr>
            <th>Class</th>
            <th>Font size</th>
            <th>Line height</th>
            <th>Example</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>font-size-26</td>
            <td>24px</td>
            <td>30px</td>
            <td><p className="font-size-26">Example</p></td>
        </tr>

        <tr>
            <td>font-size-24</td>
            <td>24px</td>
            <td>28px</td>
            <td><p className="font-size-24">Example</p></td>
        </tr>

        <tr>
            <td>font-size-20</td>
            <td>20px</td>
            <td>24px</td>
            <td><p className="font-size-20">Example</p></td>
        </tr>

        <tr>
            <td>font-size-17</td>
            <td>17px</td>
            <td>20px</td>
            <td><p className="font-size-17">Example</p></td>
        </tr>

        <tr>
            <td>font-size-15</td>
            <td>15px</td>
            <td>18px</td>
            <td><p className="font-size-15">Example</p></td>
        </tr>

        <tr>
            <td>font-size-23</td>
            <td>13px</td>
            <td>15px</td>
            <td><p className="font-size-13">Example</p></td>
        </tr>

        <tr>
            <td>font-size-12</td>
            <td>12px</td>
            <td>14px</td>
            <td><p className="font-size-12">Example</p></td>
        </tr>
    </tbody>
</table>
```

### **Font weight** ###
```jsx
<p className="font-weight-bold">Bold text.</p>
<p className="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p className="font-weight-medium">Medium bold weight text</p>
<p className="font-weight-normal">Normal weight text.</p>
<p className="font-weight-light">Light weight text.</p>
<p className="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p className="font-italic">Italic text.</p>
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
