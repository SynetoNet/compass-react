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

```jsx
const data = [
  { id: 1, name: "Faulkner Henson", gender: "male", age: 35 },
  { id: 2, name: "Haley Cotton", gender: "female", age: 92 },
  { id: 3, name: "Lynda Kline", gender: "female", age: 25 }
];

const columns = [
  { field: "id", header: "ID", width: "50px" },
  { field: "name", header: "Full Name" },
  { field: "age", header: "User Age", width: "100px" }
];

<Table data={data} columns={columns} keyField="id" />;
```

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

<Table
  data={data}
  columns={columns}
  keyField="id"
  selectable="multiple"
  actions={[
    {
      label: "Delete",
      onClick: selected => console.log("Deleting", selected)
    },
    {
      label: "Move to Trash",
      onClick: selected => console.log("Moving to Trash", selected)
    }
  ]}
/>;
```

#### **Custom actions**

```jsx
import { data, columns } from "./Table.utils";
import Dropdown from "../Dropdown/Dropdown";
import Badge from "../Badge/Badge";

<Table
  data={data}
  columns={columns}
  keyField="id"
  selectable="multiple"
  actions={<Dropdown label="Actions" onSelect={eventKey => console.log(eventKey)}>
  <Dropdown.Menu>
    <Dropdown.Header>Section header</Dropdown.Header>
    <Dropdown.Item eventKey="action">Action</Dropdown.Item>
    <Dropdown.Item disabled eventKey="disabled">
      Disabled action
    </Dropdown.Item>

    <Dropdown.Divider />

    <Dropdown.Header>Separate actions</Dropdown.Header>
    <Dropdown.Item eventKey="normal">
      <Badge block>Normal action</Badge>
    </Dropdown.Item>
    <Dropdown.Item eventKey="success">
      <Badge appearance="success" block>
        Success action
      </Badge>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>}
/>;
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
  let appearance = "";
  if (row.age < 30) {
    appearance = "success";
  } else if (row.age < 80) {
    appearance = "info";
  } else {
    appearance = "secondary";
  }

  return (
    <Badge appearance={appearance} style={{ verticalAlign: "baseline" }}>
      {cell}
    </Badge>
  );
}

function renderActions(cell, row) {
  return (
    <>
      <Button role="tertiary" onClick={() => console.log(row)}>
        Edit
      </Button>
      <Button role="tertiary" onClick={() => console.log(row)}>
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

#### **Default Search**

```jsx
import { data, columns } from "./Table.utils";

<Table data={data} columns={columns} keyField="id" search={{ defaultSearch:'al' }} />;
```

#### **Scrollable table**

By default, a **`scrollable`** table has a fixed **250px** height on **`tbody`**. If you need to adjust this height, you should pass a custom CSS class on the table wrapper:

```jsx static
// Component
<Table ... wrapperClassName="my-custom-table" />;

// CSS
.my-custom-table {
  max-height: 50vh;
}

```

```jsx
import { dataBig } from "./Table.utils";

const columns = [
  {
    field: "id",
    header: "User ID",
    width: "30%",
    oneline: true
  },
  { field: "name", header: "Full Name" },
  {
    field: "age",
    header: "User Age",
    width: "80px"
  }
];

<Table data={dataBig} columns={columns} keyField="id" scrollable />;
```

#### **Complex table**

Example includes triggering a Modal on the second Row on Row click;

```jsx
import { dataBig, columns } from "./Table.utils";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { useState } from 'react'

const Example = () => {
  const [showModal, toggleModal] = useState(false);

  function renderPrice(cell, row) {
    let appearance = "";
    if (row.age < 30) {
      appearance = "success";
    } else if (row.age < 80) {
      appearance = "info";
    } else {
      appearance = "secondary";
    }

    return (
      <Badge appearance={appearance} style={{ verticalAlign: "baseline" }}>
        {cell}
      </Badge>
    );
  }

  function renderCellActions(cell, row) {
    return (
      <>
        <Button role="tertiary" onClick={() => console.log(row)}>
          Edit
        </Button>
        <Button role="tertiary" onClick={(e) => e.stopPropagation()}>
          Delete
        </Button>
      </>
    );
  }

  const actions = [
    {
      label: "Delete selected",
      onClick: selected => console.log(selected)
    },
    {
      label: "Move to trash",
      onClick: selected => console.log(selected)
    }
  ];

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => toggleModal(false)}
        content="Modal content"
        title="Modal title"
      />
      <Table
        data={dataBig}
        keyField="id"
        pagination={{ sizePerPageList: [10, 15, 30], showTotal: true, withFirstAndLast: true }}
        search
        actions={actions}
        selectable="multiple"
        extra={
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <Form.Control placeholder="Extra" className="mr-2" />
            <Form.Switch checked />
          </div>
        }
        rowEvents={ {
          onClick: (e, row, rowIndex) => {
            if (rowIndex === 1) {
              toggleModal(true);
            }
          },
        } }
        scrollable
        onSelect={({ item, isSelected }) => console.log(item, isSelected)}

      >
        <Table.Col field="name" align="left" filter="text" />
        <Table.Col field="id" align="center">
          User ID
        </Table.Col>
        <Table.Col
          field="status"
          align="center"
          filter="select"
          filterOptions={[
            { value: "good", label: "good" },
            { value: "bad", label: "bad" },
            { value: "unknown", label: "unknown" }
          ]}
        >
          Status
        </Table.Col>
        <Table.Col field="age" align="right" sort renderCell={renderPrice}>
          User Age
        </Table.Col>
        <Table.Col align="center" renderCell={renderCellActions}>
          Actions
        </Table.Col>
      </Table>
    </>
  );
}

<Example />

```
