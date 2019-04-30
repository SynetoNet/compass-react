### **Description**

---

#### **Usage**

Used to communicates various objects states or exceptional situations.

#### **Anatomy**

A badge is composed of:<br/>
Label (regular text)<br/>
Background (variant fill)<br/>

### **Default**

---

```jsx
<Badge>Default Badge</Badge>
<Badge>On/Off</Badge>
<Badge>This is an example with longer text</Badge>
```

### **Colors**

---

```jsx
<h5>Default</h5>
<Badge variant="success">Green</Badge>
<Badge variant="danger">Red</Badge>
<Badge variant="warning">Yellow</Badge>
<Badge variant="primary">Blue</Badge>
<Badge>Neutral</Badge>
<br />
<br />
```

### **Strong**

---

```jsx
<h5>Strong Background</h5>
<Badge variant="success" strong>Green</Badge>
<Badge variant="danger" strong>Red</Badge>
<Badge variant="warning" strong>Yellow</Badge>
<Badge variant="primary" strong>Blue</Badge>
<Badge strong>Neutral</Badge>
<br />
<br />
```

### **Bordered**

---

```jsx
<h5>Light Border</h5>
<Badge variant="success" light>Green</Badge>
<Badge variant="danger" light>Red</Badge>
<Badge variant="warning" light>Yellow</Badge>
<Badge variant="primary" light>Blue</Badge>
<Badge light>Neutral</Badge>
```

### **Modular Size**

---

```jsx

<Badge variant="success" modularWidth size={32}>32px</Badge>
<br />
<Badge variant="primary" modularWidth size={64}>64px</Badge>
<br />
<Badge variant="danger" modularWidth size={96}>96px</Badge>
<br />
<Badge modularWidth size={128}>128px</Badge>
```
