#### **Basic Table**

The most basic usage requires 3 things:

1. **data**: an **`Array`** of `Objects`;
2. **columns**: an **`Array`** of `Objects`;
3. **keyField**: a **`String`** to be used as the `key` prop (should be unique for every item);

```jsx
const data = [
  { id: 1, name: "Faulkner Henson", gender: "male", age: 35 },
  { id: 2, name: "Haley Cotton", gender: "female", age: 92 },
  { id: 3, name: "Lynda Kline", gender: "female", age: 25 }
];

const columns = [
  { field: "id" },
  { field: "name" },
  { field: "age", header: "User Age" }
];

<Table data={data} columns={columns} keyField="id" />;
```

#### **Aligning columns**

```jsx
const data = [
  { id: 1, name: "Faulkner Henson", gender: "male", age: 35 },
  { id: 2, name: "Haley Cotton", gender: "female", age: 92 },
  { id: 3, name: "Lynda Kline", gender: "female", age: 25 }
];

const columns = [
  { field: "id", header: "User ID", align: "left" },
  { field: "name", header: "Full Name", align: "center" },
  { field: "age", header: "User Age", align: "right" }
];

<Table data={data} columns={columns} keyField="id" />;
```

#### **Customizing columns**

You can checkout [Column Props](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/column-props.html#optional) for advanced customization:

#### **Sorting columns**

```jsx
const data = [
  { id: 1, name: "Faulkner Henson", gender: "male", age: 35 },
  { id: 2, name: "Haley Cotton", gender: "female", age: 92 },
  { id: 3, name: "Lynda Kline", gender: "female", age: 25 }
];

const columns = [
  { field: "id", header: "User ID" },
  { field: "name", header: "Full Name", sort: true },
  {
    field: "age",
    header: "User Age",
    align: "right",
    // custom sort function, for Numbers
    sort: (a, b, order) => (order === "desc" ? b - a : a - b)
  }
];

<Table data={data} columns={columns} keyField="id" />;
```

#### **Single row selection**

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

#### **Multiple row selection**

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

#### **Selection actions**

```jsx
import { data, columns } from "./Table.utils";
import Button from "../Button/Button";

let tableRef;

<>
  <Button onClick={() => console.log(tableRef.getSelected())} className="mb-3">
    Get Selected
  </Button>

  <Table
    data={data}
    columns={columns}
    keyField="id"
    selectable="multiple"
    onSelect={({ item, isSelected }) => console.log(item, isSelected)}
    ref={n => (tableRef = n)}
  />
</>;
```

#### **Pagination**

```jsx
import { dataBig, columns } from "./Table.utils";

<Table data={dataBig} columns={columns} keyField="id" pagination />;
```

#### **Custom cell rendering**

If you need to render a custom cell, you should use the extended version, by passing **`<Table.Col />`** childrens. **`<Table.Col />`** have the same props as the Objects in the `columns` Array.

Additionally, you have access to **`renderCell`**, which is a render prop that receives the **`cell`** and **`row`**:

```jsx
import { data, columns } from "./Table.utils";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

function renderPrice(cell, row) {
  let color = "";
  if (row.age < 30) {
    color = "success";
  } else if (row.age < 80) {
    color = "info";
  } else {
    color = "secondary";
  }

  return (
    <Badge color={color} style={{ verticalAlign: "baseline" }}>
      {cell}
    </Badge>
  );
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
    User's Full Name
  </Table.Col>
  <Table.Col field="id" align="center">
    User ID
  </Table.Col>
  <Table.Col field="age" align="right" sort renderCell={renderPrice}>
    User Age
  </Table.Col>
  <Table.Col align="center" renderCell={renderActions}>
    Actions
  </Table.Col>
</Table>;
```

#### **Search**

```jsx
import { data, columns } from "./Table.utils";

<Table data={data} columns={columns} keyField="id" search />;
```

#### **Complex table**

```jsx
import { dataBig, columns } from "./Table.utils";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Form from "../Form/Form";

let tableRef;

function renderPrice(cell, row) {
  let color = "";
  if (row.age < 30) {
    color = "success";
  } else if (row.age < 80) {
    color = "info";
  } else {
    color = "secondary";
  }

  return (
    <Badge color={color} style={{ verticalAlign: "baseline" }}>
      {cell}
    </Badge>
  );
}

function renderCellActions(cell, row) {
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

const tableActions = (
  <Dropdown
    label="Actions"
    onSelect={eventKey => console.log(eventKey)}
    items={[
      {
        label: "Delete selected",
        onSelect: () => console.log(tableRef.getSelected())
      },
      {
        label: "Move to trash",
        onSelect: () => console.log(tableRef.getSelected())
      }
    ]}
  />
);

<Table
  data={dataBig}
  keyField="id"
  pagination
  search
  actions={tableActions}
  selectable="multiple"
  onSelect={({ item, isSelected }) => console.log(item, isSelected)}
  ref={n => (tableRef = n)}
>
  <Table.Col field="name" align="left">
    User's Full Name
  </Table.Col>
  <Table.Col field="id" align="center">
    User ID
  </Table.Col>
  <Table.Col field="age" align="right" sort renderCell={renderPrice}>
    User Age
  </Table.Col>
  <Table.Col align="center" renderCell={renderCellActions}>
    Actions
  </Table.Col>
</Table>;
```
