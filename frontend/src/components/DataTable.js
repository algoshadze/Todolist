import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import ReactDataGrid from 'react-data-grid'
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "username",
    headerName: "User Name",
    width: 200,
    sortable: true,
    
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    sortable: true,
  },
  {
    key:'task',
    field: "text",
    headerName: "Text",
    type: "text",
    width: 900,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    username: "Snow",
    email: "Jonsnow483@gmail.com",
    text:
      "Необходимо создать приложение-задачник.Документацию по back-end можно найти тут: https://uxcandy.com/~shapoval/test-task-backend/docs/",
    status: 10,
  },
  {
    id: 2,
    username: "Lannister",
    email: "Cersei83@gmail.com",
    text: "ew",
    status: 0,
  },
  {
    id: 3,
    username: "Lannister",
    email: "Jaime83@gmail.com",
    text: "45",
    status: 0,
  },
  {
    id: 4,
    username: "Stark",
    email: "Arya83@gmail.com",
    text: "16",
    status: 0,
  },
  {
    id: 5,
    username: "Targaryen",
    email: "Daenerys83@gmail.com",
    text: "null",
    status: 0,
  },
  {
    id: 6,
    username: "Melisandre",
    email: "Melisandre@gmail.com",
    text: "150",
    status: 0,
  },
  {
    id: 7,
    username: "Clifford",
    email: "Ferrara383@gmail.com",
    text: "44",
    status: 0,
  },
  {
    id: 8,
    username: "Frances",
    email: "Rossini83@gmail.com",
    text: "36",
    status: 0,
  },
  {
    id: 9,
    username: "Roxie",
    email: "Harvey",
    text: "65",
    status: 0,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
