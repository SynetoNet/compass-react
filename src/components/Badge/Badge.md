### **Description**

Used to communicates various objects states or exceptional situations.

<br />
<br />

#### **Default**

```jsx
<Badge>Default Badge</Badge>
<i className="pr-2" />
<Badge>This is an example with longer text</Badge>
```

#### **Colors**

```jsx
<Badge color="success">Success</Badge>
<i className="pr-2" />
<Badge color="danger">Error</Badge>
<i className="pr-2" />
<Badge color="warning">Warning</Badge>
<i className="pr-2" />
<Badge color="info">Info</Badge>
<i className="pr-2" />
<Badge color="secondary">Neutral</Badge>
```

#### **Strong**

```jsx
<Badge color="success" variant="strong">Success</Badge>
<i className="pr-2" />
<Badge color="danger" variant="strong">Error</Badge>
<i className="pr-2" />
<Badge color="warning" variant="strong">Warning</Badge>
<i className="pr-2" />
<Badge color="info" variant="strong">Info</Badge>
<i className="pr-2" />
<Badge variant="strong">Neutral</Badge>
```

#### **Outline**

```jsx
<Badge color="success" variant="outline">Success</Badge>
<i className="pr-2" />
<Badge color="danger" variant="outline">Error</Badge>
<i className="pr-2" />
<Badge color="warning" variant="outline">Warning</Badge>
<i className="pr-2" />
<Badge color="info" variant="outline">Info</Badge>
<i className="pr-2" />
<Badge variant="outline">Neutral</Badge>
```

#### **Stretch width**

```jsx
<div style={{ width: '250px'}} className="pb-2">
  <Badge color="success" block>250px container</Badge>
</div>
<Badge color="danger" block>Full width</Badge>
```

#### **Modular width**

```jsx

<Badge width={32}>32px</Badge>
<div className="pt-2" />
<Badge color="success" width={64}>64px</Badge>
<div className="pt-2" />
<Badge color="warning" width={96}>96px</Badge>
<div className="pt-2" />
<Badge color="danger" width={128}>128px</Badge>
```
