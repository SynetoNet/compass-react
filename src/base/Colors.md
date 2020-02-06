#### **Bootstrap classes**
For ease of use, we also support the Bootstrap classes:

```jsx
[
  'primary',
  'success',
  'danger',
  'warning',
  'info'
].map(color => (
    <div style={{display: "inline-block"}}>
    <div
        className={`bg-${color}`}
        style={{
            width: 100,
            height: 100,
            margin: 10
        }}
    />
        <p style={{marginLeft: 10}}>{color}</p>
    </div>
))
```

#### **Brand**

```jsx
[
  'brand-dark-80',
  'brand-dark-40',
  'brand-highlight',
  'brand-light-40',
  'brand-light-80'
].map(color => (
    <div style={{display: "inline-block"}}>
    <div
        className={`bg-${color}`}
        style={{
            width: 100,
            height: 100,
            margin: 10
        }}
    />
        <p style={{marginLeft: 10}}>{color}</p>
    </div>
))
```

#### **Accent**

```jsx
[
  'accent',
  'accent-light-85'
].map(color => (
    <div style={{display: "inline-block"}}>
        <div
            className={`bg-${color}`}
            style={{
                width: 100,
                height: 100,
                margin: 10
            }}
        />
        <p style={{marginLeft: 10}}>{color}</p>
    </div>
))
```

#### **Neutrals**

```jsx
[
  'neutral-100',
  'neutral-90',
  'neutral-60',
  'neutral-40',
  'neutral-24',
  'neutral-12',
  'neutral-6',
  'neutral-3',
  'neutral-0'
].map(color => (
    <div style={{display: "inline-block"}}>
    <div
        className={`bg-${color}`}
        style={{
            width: 100,
            height: 100,
            margin: 10
        }}
    />
        <p style={{marginLeft: 10}}>{color}</p>
    </div>
))
```

#### **Adjusted Neutrals**

```jsx
[
  'neutral-90-vivid',
].map(color => (
    <div style={{display: "inline-block"}}>
    <div
        className={`bg-${color}`}
        style={{
            width: 100,
            height: 100,
            margin: 10
        }}
    />
        <p style={{marginLeft: 10}}>{color}</p>
    </div>
))
```

#### **Semantic**

```jsx
<>
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'semantic-info',
              'semantic-info-dark-20',
              'semantic-info-dark-30',
              'semantic-info-light-60',
              'semantic-info-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>

    <br/>

    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'semantic-confirm',
              'semantic-confirm-dark-20',
              'semantic-confirm-dark-30',
              'semantic-confirm-light-60',
              'semantic-confirm-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>
    <br/>

    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'semantic-warn',
              'semantic-warn-dark-20',
              'semantic-warn-dark-30',
              'semantic-warn-light-60',
              'semantic-warn-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>
    <br/>

    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'semantic-danger',
              'semantic-danger-dark-20',
              'semantic-danger-dark-30',
              'semantic-danger-light-60',
              'semantic-danger-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>
    <br/>

    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'semantic-accent-contrast',
              'semantic-accent-dark-20',
              'semantic-accent-dark-30',
              'semantic-accent-light-60',
              'semantic-accent-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>
</>
```

#### **Charting**
```jsx
<>
    <div style={{display: "flex", flexWrap: "wrap"}}>
        {
            [
              'chart-red',
              'chart-red-light-85',
              'chart-orange',
              'chart-orange-light-85',
              'chart-yellow',
              'chart-yellow-light-85',
              'chart-lime',
              'chart-lime-light-85',
              'chart-green',
              'chart-green-light-85',
              'chart-blue',
              'chart-blue-light-85',
              'chart-indigo',
              'chart-indigo-light-85',
              'chart-purple',
              'chart-purple-light-85',
              'chart-magenta',
              'chart-magenta-light-85'
            ].map(color => (
                    <div style={{width: 100, margin: 10}}>
                        <div className={`bg-${color}`} style={{height: 100}}/>
                        <p>{color}</p>
                    </div>
            ))
        }
    </div>
</>
```
