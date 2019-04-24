### **Description**

---

#### **Usage**

Used to communicates various objects states or exceptional situations.

#### **Anatomy**

A badge is composed of:<br/>
Label (regular text)<br/>
Background (color fill)<br/>

### **Color variations**

---

```jsx
<h5>Strong Background</h5>
<Badge color="success">Green</Badge>
<Badge color="danger">Red</Badge>
<Badge color="warning">Yellow</Badge>
<Badge color="primary">Blue</Badge>
<Badge color="secondary">Neutral</Badge>
<br />
<br />
<h5>Light Background</h5>
<Badge color="success" lightBackground>Green</Badge>
<Badge color="danger" lightBackground>Red</Badge>
<Badge color="warning" lightBackground>Yellow</Badge>
<Badge color="primary" lightBackground>Blue</Badge>
<Badge color="secondary" lightBackground>Neutral</Badge>
<br />
<br />
<h5>Light Border</h5>
<Badge color="success" lightBorder>Green</Badge>
<Badge color="danger" lightBorder>Red</Badge>
<Badge color="warning" lightBorder>Yellow</Badge>
<Badge color="primary" lightBorder>Blue</Badge>
<Badge color="secondary" lightBorder>Neutral</Badge>
```

### **Sizes**

---

```jsx
<br />
<br />
<h5>Modular Size Badges</h5>
<Badge color="success" modularWidth widthSize={32}>32px</Badge>
<br />
<Badge color="success" modularWidth widthSize={64}>64px</Badge>
<br />
<Badge color="success" modularWidth widthSize={96}>96px</Badge>
<br />
<Badge color="success" modularWidth widthSize={128}>128px</Badge>
<br />
<br />
<h5>Elastic Size Badges</h5>
<Badge color="success" elasticWidth>Short</Badge>
<br />
<Badge color="warning" elasticWidth>Medium Size</Badge>
<br />
<Badge color="danger" elasticWidth>Longer ass Badge</Badge>
<br />
<br />
```
