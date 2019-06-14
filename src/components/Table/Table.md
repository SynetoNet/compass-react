#### **Default Table**

```jsx
import { data, columns } from "./Table.utils";

<Table data={data} columns={columns} keyField="id" />;
```

```jsx
import { data, columns } from "./Table.utils";

<Table
  data={data}
  columns={columns}
  keyField="id"
  selectable="single"
  onSelect={({ item }) => console.log(item)}
/>;
```

```jsx
import { data, columns } from "./Table.utils";

<Table
  data={data}
  columns={columns}
  keyField="id"
  selectable="multiple"
  onSelect={({ item, isSelected }) => console.log(item, isSelected)}
/>;
```

```jsx
import { dataBig, columns } from "./Table.utils";

<Table data={dataBig} columns={columns} keyField="id" pagination />;
```

```jsx
import { data, columns } from "./Table.utils";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

function renderPrice(cell, row) {
  if (row.id === 1) {
    return (
      <>
        <Badge color="danger" style={{ verticalAlign: "baseline" }}>
          Sale
        </Badge>{" "}
        <strong>$ {cell}</strong>
      </>
    );
  }

  return `$ ${cell}`;
}

function renderActions(cell, row) {
  return (
    <>
      <Button variant="tertiary" onClick={() => console.log(row)}>
        Edit
      </Button>
      <Button variant="tertiary" onClick={() => console.log(row)}>
        Delete
      </Button>
    </>
  );
}

<Table data={data} keyField="id">
  <Table.Col field="name" align="left">
    Product Name
  </Table.Col>
  <Table.Col field="id" align="center">
    Product ID
  </Table.Col>
  <Table.Col field="price" align="right" sort renderCell={renderPrice}>
    Product Price
  </Table.Col>
  <Table.Col align="center" renderCell={renderActions}>
    Actions
  </Table.Col>
</Table>;
```
