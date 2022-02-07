#### **Basic usage**

Compass uses [Font Awesome 5.15.4](https://fontawesome.com/icons) for its standard icon set.

All free sets are included:

- [Font-Awesome solid](https://fontawesome.com/icons?d=gallery&s=solid&m=free) (fa / fas)
- [Font-Awesome regular](https://fontawesome.com/icons?d=gallery&s=regular&m=free) (far)
- [Font-Awesome brands](https://fontawesome.com/icons?d=gallery&s=brands&m=free) (fab)

```jsx
<Icon name="fas fa-user" />
<i className="mx-1" />
<Icon name="far fa-user" />
<i className="mx-1" />
<Icon name="fab fa-github" />
```

#### **Sizes**

```jsx
<Icon name="fas fa-user" size="xs"/>
<span className="me-2"/>

<Icon name="fas fa-user" size="sm"/>
<span className="me-2"/>

<Icon name="fas fa-user" size="md"/>
<span className="me-2"/>

<Icon name="fas fa-user" size="lg"/>
```

#### **Colors**

```jsx
<Icon name="fas fa-user" color="#0000FF" />
```

#### **Inherited styles**

Icon component inherits the **`font-size`** and **`color`** styles of their parent:

```jsx
<div style={{ color: "#0000FF", fontSize: "30px" }}>
  <Icon name="fas fa-user" />
</div>
```

#### **Custom styles**

You can pass both **`style`** and **`className`** to customize the Icon:

```jsx
<Icon
  name="fas fa-user"
  style={{ fontSize: "30px" }}
  className="text-success"
/>
```
