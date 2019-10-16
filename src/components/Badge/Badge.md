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
<Badge appearance="success">Success</Badge>
<i className="pr-2" />
<Badge appearance="danger">Error</Badge>
<i className="pr-2" />
<Badge appearance="warning">Warning</Badge>
<i className="pr-2" />
<Badge appearance="info">Info</Badge>
<i className="pr-2" />
<Badge appearance="secondary">Neutral</Badge>
```

#### **Strong**

```jsx
<Badge appearance="success" role="strong">Success</Badge>
<i className="pr-2" />
<Badge appearance="danger" role="strong">Error</Badge>
<i className="pr-2" />
<Badge appearance="warning" role="strong">Warning</Badge>
<i className="pr-2" />
<Badge appearance="info" role="strong">Info</Badge>
<i className="pr-2" />
<Badge role="strong">Neutral</Badge>
```

#### **Outline**

```jsx
<Badge appearance="success" role="outline">Success</Badge>
<i className="pr-2" />
<Badge appearance="danger" role="outline">Error</Badge>
<i className="pr-2" />
<Badge appearance="warning" role="outline">Warning</Badge>
<i className="pr-2" />
<Badge appearance="info" role="outline">Info</Badge>
<i className="pr-2" />
<Badge role="outline">Neutral</Badge>
```

#### **Stretch width**

```jsx
<div style={{ width: '250px'}} className="pb-2">
  <Badge appearance="success" block>250px container</Badge>
</div>
<Badge appearance="danger" block>Full width</Badge>
```

#### **Modular width**

```jsx

<Badge width={32}>32px</Badge>
<div className="pt-2" />
<Badge appearance="success" width={64}>64px</Badge>
<div className="pt-2" />
<Badge appearance="warning" width={96}>96px</Badge>
<div className="pt-2" />
<Badge appearance="danger" width={128}>128px</Badge>
```
