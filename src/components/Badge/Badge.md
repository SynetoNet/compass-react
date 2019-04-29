### **Description**

---

#### **Usage**

Used to communicates various objects states or exceptional situations.

#### **Anatomy**

A badge is composed of:<br/>
Label (regular text)<br/>
Background (variant fill)<br/>

### **variant variations**

---

```jsx
<h5>Strong Background</h5>
<Badge variant="success">Green</Badge>
<Badge variant="danger">Red</Badge>
<Badge variant="warning">Yellow</Badge>
<Badge variant="primary">Blue</Badge>
<Badge variant="secondary">Neutral</Badge>
<br />
<br />
<h5>Light Background</h5>
<Badge variant="success" lightBackground>Green</Badge>
<Badge variant="danger" lightBackground>Red</Badge>
<Badge variant="warning" lightBackground>Yellow</Badge>
<Badge variant="primary" lightBackground>Blue</Badge>
<Badge variant="secondary" lightBackground>Neutral</Badge>
<br />
<br />
<h5>Light Border</h5>
<Badge variant="success" lightBorder>Green</Badge>
<Badge variant="danger" lightBorder>Red</Badge>
<Badge variant="warning" lightBorder>Yellow</Badge>
<Badge variant="primary" lightBorder>Blue</Badge>
<Badge variant="secondary" lightBorder>Neutral</Badge>
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
