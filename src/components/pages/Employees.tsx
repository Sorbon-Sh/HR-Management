import { useState } from "react";
import { Search, Plus, Filter, Upload, Trash2, Edit } from "lucide-react";
import Button from "../ui/buttons/Button";
import Card from "../ui/cards/Card";
import Avatar from "../ui/Avatar";
import AddEmployer from "../ui/modals/AddEmployer";
import { createPortal } from "react-dom";
import { useGetEmployerQuery } from "../../shared/api/employerRequest";
import Loading from "../layouts/Loading";
import type { IEmployerForm } from "../../shared/types";

const Employees = () => {
  const { data: employees } = useGetEmployerQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [employerModal, setEmployerModal] = useState(false);
  const [employerData, setEmployerData] = useState<IEmployerForm | null>(null);
  console.log("Employees", "Start");
  const getEmployerId = (employee: IEmployerForm) => {
    setEmployerData(employee);
    setEmployerModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Employees</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your company's employees and their information.
          </p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button variant="outline" size="sm" icon={<Upload size={16} />}>
            Import
          </Button>
          <Button
            size="sm"
            icon={<Plus size={16} />}
            onClick={() => {
              setEmployerModal(true);
            }}
          >
            Add Employee
          </Button>
        </div>
      </div>

      <Card noPadding>
        {/* Filters and search */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500 transition-colors duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search size={18} />
              </div>
            </div>

            <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Employee
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Position
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Join Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees ? (
                employees.map((employee) => (
                  <tr
                    key={employee.employer}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar name={employee.employer} size="sm" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.employer}
                          </div>
                          <div className="text-sm text-gray-500">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.position}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(employee.created_at).toLocaleDateString()}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Text
                  </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => getEmployerId(employee)}
                          className="p-1 text-blue-500 rounded hover:bg-blue-50"
                        >
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-red-500 rounded hover:bg-red-50">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <Loading />
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">5</span> of{" "}
              <span className="font-medium">5</span> results
            </div>
            <div className="flex space-x-2">
              <button
                className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button
                className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Card>
      {employerModal &&
        createPortal(
          <AddEmployer
            employerData={employerData}
            closeModal={setEmployerModal}
          />,
          document.body,
        )}
    </div>
  );
};

export default Employees;
