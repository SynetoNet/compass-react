### **Description**

Used to communicates various objects states or exceptional situations.

<br />
<br />

#### **Default**

```jsx
<Badge>Default Badge</Badge>
<Badge>This is an example with longer text</Badge>
```

#### **Colors**

```jsx
<Badge color="success">Success</Badge>
<Badge color="danger">Error</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
<Badge color="secondary">Neutral</Badge>
```

#### **Strong**

```jsx
<Badge color="success" variant="strong">Success</Badge>
<Badge color="danger" variant="strong">Error</Badge>
<Badge color="warning" variant="strong">Warning</Badge>
<Badge color="info" variant="strong">Info</Badge>
<Badge variant="strong">Neutral</Badge>
```

#### **Outline**

```jsx
<Badge color="success" variant="outline">Success</Badge>
<Badge color="danger" variant="outline">Error</Badge>
<Badge color="warning" variant="outline">Warning</Badge>
<Badge color="info" variant="outline">Info</Badge>
<Badge variant="outline">Neutral</Badge>
```

#### **Stretch width**

```jsx
<div style={{ width: '250px'}}>
<Badge color="success" block>250px container</Badge>
<br />
</div>
<Badge color="danger" block>Full width</Badge>
<br />
```

#### **Modular width**

```jsx

<Badge width={32}>32px</Badge>
<br />
<Badge color="success" width={64}>64px</Badge>
<br />
<Badge color="warning" width={96}>96px</Badge>
<br />
<Badge color="danger" width={128}>128px</Badge>
```
