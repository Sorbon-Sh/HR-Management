import { useState } from 'react';
import { 
  Plus, 
  Calendar, 
  Filter, 
  Download, 
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import Button from '../ui/buttons/Button';
import Card from '../ui/cards/Card';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { createPortal } from 'react-dom';
import LeaveRequest from '../ui/modals/LeaveRequest';


const leaveData = [
  {
    id: 1,
    employee: 'John Doe',
    department: 'Engineering',
    type: 'Annual Leave',
    startDate: 'Apr 10, 2023',
    endDate: 'Apr 15, 2023',
    duration: '5 days',
    status: 'Approved',
  },
  {
    id: 2,
    employee: 'Jane Smith',
    department: 'Design',
    type: 'Sick Leave',
    startDate: 'Apr 18, 2023',
    endDate: 'Apr 19, 2023',
    duration: '2 days',
    status: 'Approved',
  },
  {
    id: 3,
    employee: 'Robert Johnson',
    department: 'Marketing',
    type: 'Family Leave',
    startDate: 'Apr 25, 2023',
    endDate: 'May 2, 2023',
    duration: '8 days',
    status: 'Pending',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    department: 'HR',
    type: 'Annual Leave',
    startDate: 'May 5, 2023',
    endDate: 'May 10, 2023',
    duration: '5 days',
    status: 'Pending',
  },
  {
    id: 5,
    employee: 'Michael Wilson',
    department: 'Finance',
    type: 'Sick Leave',
    startDate: 'Apr 5, 2023',
    endDate: 'Apr 6, 2023',
    duration: '2 days',
    status: 'Rejected',
  },
];

const leaveBalance = [
  { type: 'Annual Leave', used: 5, total: 20, remaining: 15 },
  { type: 'Sick Leave', used: 2, total: 10, remaining: 8 },
  { type: 'Personal Leave', used: 1, total: 5, remaining: 4 },
  { type: 'Family Leave', used: 0, total: 10, remaining: 10 },
];

const Leave = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [leaveModal, setLeaveModal] = useState(false);
  const searchTerm = ''

  // Filter leave data based on tab and search
  const filteredLeaveData = leaveData.filter((leave) => {
    const matchesSearch = 
      leave.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leave.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leave.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentTab === 'all') return matchesSearch;
    if (currentTab === 'approved') return matchesSearch && leave.status === 'Approved';
    if (currentTab === 'pending') return matchesSearch && leave.status === 'Pending';
    if (currentTab === 'rejected') return matchesSearch && leave.status === 'Rejected';
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Leave Management</h2>
          <p className="mt-1 text-sm text-gray-500">Track and manage employee leave requests.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button
            variant="outline"
            size="sm"
            icon={<Calendar size={16} />}
          >
            Calendar View
          </Button>
          <Button
            size="sm"
            icon={<Plus size={16} />}
            onClick={() => setLeaveModal(true)}
          >
            New Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <Calendar size={24} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Requests</p>
              <p className="text-2xl font-semibold text-gray-900">42</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle size={24} className="text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Approved</p>
              <p className="text-2xl font-semibold text-gray-900">28</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <Clock size={24} className="text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">11</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100">
              <XCircle size={24} className="text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Rejected</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leave Balance */}
        <Card title="Leave Balance" className="lg:col-span-1">
          <div className="space-y-4">
            {leaveBalance.map((leave) => (
              <div key={leave.type} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-800">{leave.type}</p>
                  <Badge 
                    variant="primary" 
                    rounded
                  >
                    {leave.remaining} days
                  </Badge>
                </div>
                
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: `${(leave.used / leave.total) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">Used: {leave.used} days</p>
                  <p className="text-xs text-gray-500">Total: {leave.total} days</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <Button
              variant="outline"
              fullWidth
              size="sm"
              icon={<AlertCircle size={16} />}
            >
              View Policy
            </Button>
          </div>
        </Card>

        {/* Leave Requests */}
        <Card className="lg:col-span-2" noPadding>
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex space-x-2">
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setCurrentTab('all')}
              >
                All
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'pending' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setCurrentTab('pending')}
              >
                Pending
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'approved' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setCurrentTab('approved')}
              >
                Approved
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'rejected' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setCurrentTab('rejected')}
              >
                Rejected
              </button>
            </div>
            
            <div className="ml-auto flex items-center space-x-3">
              <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
                <Filter size={20} />
              </button>
              
              <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
                <Download size={20} />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeaveData.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar name={leave.employee} size="sm" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{leave.employee}</div>
                          <div className="text-sm text-gray-500">{leave.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{leave.type}</div>
                      <div className="text-sm text-gray-500">{leave.startDate} - {leave.endDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {leave.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge 
                        variant={
                          leave.status === 'Approved' ? 'success' : 
                          leave.status === 'Pending' ? 'warning' : 
                          'danger'
                        }
                        rounded
                      >
                        {leave.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        {leave.status === 'Pending' && (
                          <>
                            <button className="p-1 text-green-500 rounded hover:bg-green-50">
                              <CheckCircle size={18} />
                            </button>
                            <button className="p-1 text-red-500 rounded hover:bg-red-50">
                              <XCircle size={18} />
                            </button>
                          </>
                        )}
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {leaveModal && createPortal(<LeaveRequest closeModal={setLeaveModal}/>,  document.body)}
    </div>
  );
};

export default Leave;