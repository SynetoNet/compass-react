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
```

### **Color variations**

---

```jsx
<h5>Strong Background</h5>
<Badge variant="success" strong>Green</Badge>
<Badge variant="danger" strong>Red</Badge>
<Badge variant="warning" strong>Yellow</Badge>
<Badge variant="primary" strong>Blue</Badge>
<Badge variant="secondary" strong>Neutral</Badge>
<br />
<br />
<h5>Light Background - Default</h5>
<Badge variant="success">Green</Badge>
<Badge variant="danger">Red</Badge>
<Badge variant="warning">Yellow</Badge>
<Badge variant="primary">Blue</Badge>
<Badge variant="secondary">Neutral</Badge>
<br />
<br />
<h5>Light Border</h5>
<Badge variant="success" border>Green</Badge>
<Badge variant="danger" border>Red</Badge>
<Badge variant="warning" border>Yellow</Badge>
<Badge variant="primary" border>Blue</Badge>
<Badge variant="secondary" border>Neutral</Badge>
```

### **Sizes**

---

```jsx
<br />
<br />
<h5>Modular Size Badges</h5>
<Badge variant="success" modularWidth widthSize={32}>32px</Badge>
<br />
<Badge variant="success" modularWidth widthSize={64}>64px</Badge>
<br />
<Badge variant="success" modularWidth widthSize={96}>96px</Badge>
<br />
<Badge variant="success" modularWidth widthSize={128}>128px</Badge>
<br />
<br />
<h5>Elastic Size Badges</h5>
<Badge variant="success" elasticWidth>Short</Badge>
<br />
<Badge variant="warning" >Medium Size</Badge>
<br />
<Badge variant="danger" elasticWidth>Longer ass Badge</Badge>
<br />
<br />
```
