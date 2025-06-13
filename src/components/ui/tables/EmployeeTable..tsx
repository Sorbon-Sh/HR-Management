import  { useMemo, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { ColDef } from "ag-grid-community";


const EmployeeTable = () => {
  const searchText = ""
  const [filterStatus, setFilterStatus] = useState("All");

  const rowData = useMemo(
    () => [
      { id: 1, name: "John Doe", email: "john.doe@company.com", department: "Engineering", designation: "Software Engineer", status: "Active", joinDate: "May 15, 2022" },
      { id: 2, name: "Jane Smith", email: "jane.smith@company.com", department: "Design", designation: "UI/UX Designer", status: "Active", joinDate: "Jun 3, 2022" },
      { id: 3, name: "Robert Johnson", email: "robert.johnson@company.com", department: "Marketing", designation: "Marketing Manager", status: "On Leave", joinDate: "Jan 12, 2021" },
      { id: 4, name: "Emily Davis", email: "emily.davis@company.com", department: "HR", designation: "HR Specialist", status: "Active", joinDate: "Mar 24, 2023" },
      { id: 5, name: "Michael Wilson", email: "michael.wilson@company.com", department: "Finance", designation: "Financial Analyst", status: "Active", joinDate: "Nov 8, 2022" },
    ],
    []
  );

  const columnDefs: ColDef[] = useMemo(
    () => [
      { headerName: "Name", field: "name", flex: 1 },
      { headerName: "Email", field: "email", flex: 1.5 },
      { headerName: "ID", field: "id", width: 80 },
      { headerName: "Department", field: "department" },
      { headerName: "Designation", field: "designation" },
      { headerName: "Status", field: "status" },
      { headerName: "Join Date", field: "joinDate" },
    ],
    []
  );

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
  }), []);

  const getFilteredRows = useCallback(() => {
    return rowData.filter(row => {
      const matchesSearch = row.name.toLowerCase().includes(searchText.toLowerCase()) || row.email.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = filterStatus === "All" || row.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [rowData, searchText, filterStatus]);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        {/* <Input
          placeholder="Search employees..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-1/3"
        /> */}

        <select
          className="border rounded px-3 py-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Employees</option>
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
        </select>
      </div>

      <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowData={getFilteredRows()}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
