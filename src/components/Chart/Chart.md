### **Donut Chart** ###
#### Donut Chart can be used to display some values in a circular way, with different colors. ####

- In the middle of the Donut Chart, it can be displayed a single or multiple labels.
<br/>
- It needs an array of objects and the sum of values should be **100** = (60+20+20).

<br/>

##### ** Multiple Values with single label** #####
```jsx
<div style={{width: 100, height: 100}}>
    <Chart
        type="donut"
        data={[
            {
                color: '#1bba80',
                value: 60
            },
            {
                color: '#E1E8F1',
                value: 20
            },
            {
                color: '#e76974',
                value: 20
            }
        ]}
        donutLabel={200}
    />
</div>
```

##### ** Multiple Values with multiple labels** #####
```jsx
<div style={{width: 100, height: 100}}>
    <Chart
        type="donut"
        data={[
            {
                color: '#1bba80',
                value: 60
            },
            {
                color: '#E1E8F1',
                value: 20
            },
            {
                color: '#e76974',
                value: 20
            }
        ]}
        multipleLabels={true}
    />
</div>
```

##### ** Multiple Values without label** #####
```jsx
<div style={{width: 100, height: 100}}>
    <Chart
        type="donut"
        data={[
            {
                color: '#1bba80',
                value: 60
            },
            {
                color: '#E1E8F1',
                value: 20
            },
            {
                color: '#e76974',
                value: 20
            }
        ]}
    />
</div>
```

##### ** Single Value with label ** #####
```jsx
<div style={{width: 100, height: 100}}>
    <Chart
        type="donut"
        data={[
            {
                color: '#1bba80',
                value: 100
            }
        ]}
        donutLabel={200}
    />
</div>
```
