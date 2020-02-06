### Documentation and examples for Compass typography, including global settings, headings, size scale, font weight and links. ###
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
<p>Normal weight text.</p>
<p className="font-weight-light">Light weight text.</p>
<p className="font-italic">Italic text.</p>
```

### **Links** ###
```jsx
<a href="https://github.com/SynetoNet/compass-react">Link</a>
```
