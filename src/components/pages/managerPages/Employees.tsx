import { useState } from "react";
import { Search, Trash2, Edit } from "lucide-react";
import Card from "@/components/ui/cards/Card";
import Avatar from "@/components/ui/Avatar";
import EditeEmployees from "@/components/ui/modals/EditeEmployees";
import { createPortal } from "react-dom";
import {
  useDeleteEmployerMutation,
  useGetEmployerQuery,
} from "@/shared/api/employerRequest";
import Loading from "@/components/layouts/Loading";
import type { IProfiles } from "@/shared/types";
import { toast } from "react-toastify";
import { useAppSelector } from "@/shared/hooks/useReduxTypedHooks";

const Employees = () => {
  const teamId = useAppSelector((state) => state.userProfile.team_id);
  console.log("Team ID: ", teamId);
  const { data: employees } = useGetEmployerQuery(teamId);
  console.log("Employee Data: ", employees && employees);
  const [deleteEmployer] = useDeleteEmployerMutation();
  const [EditEmployer, setEditEmployer] = useState(false);
  const [employerData, setEmployerData] = useState<IProfiles | null>(null);
  const [updateEmployer, setUpdateEmployer] = useState(false);
  const getEmployerId = (employee: IProfiles) => {
    setEmployerData(employee);
    setEditEmployer(true);
  };

  const handleDeleteEmployer = async (id: string[]) => {
    const toastId = toast.loading("Удаление сотрудника...");
    await deleteEmployer(id);
    toast.update(toastId, {
      type: "success",
      isLoading: false,
      render: "Сотрудник успешно удален",
      autoClose: 3000,
    });
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
        <div className="mt-4 md:mt-0 space-x-3"></div>
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
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Search size={18} />
              </div>
            </div>
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
                    key={employee.employees.user_id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar name={employee.full_name} size="sm" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.full_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.employees.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.employees.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.employees.position}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(
                        employee.employees.created_at,
                      ).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => getEmployerId(employee)}
                          className="p-1 text-blue-500 rounded hover:bg-blue-50"
                        >
                          <Edit
                            size={16}
                            onClick={() => setUpdateEmployer(true)}
                          />
                        </button>
                        <button
                          onClick={() => handleDeleteEmployer(employee)}
                          className="p-1 text-red-500 rounded hover:bg-red-50"
                        >
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
        </div>
      </Card>
      {EditEmployer &&
        createPortal(
          <EditeEmployees
            employerData={employerData}
            closeModal={setEditEmployer}
            updateEmployer={updateEmployer}
            setUpdateEmployer={setUpdateEmployer}
          />,
          document.body,
        )}
    </div>
  );
};

export default Employees;
