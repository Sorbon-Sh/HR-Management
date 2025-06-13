import { useState } from 'react';
import { 
  DollarSign, 
  Calendar, 
  Download, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  TrendingDown, 
  ChevronDown,
  Send,
  Filter
} from 'lucide-react';
import Button from '../ui/buttons/Button';
import Card from '../ui/cards/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';


const payrollData = [
  {
    id: 1,
    employee: 'John Doe',
    department: 'Engineering',
    position: 'Senior Developer',
    salary: '$85,000',
    payPeriod: 'Apr 1-30, 2023',
    payDate: 'May 5, 2023',
    status: 'Paid',
    netPay: '$5,833.33',
    gross: '$7,083.33',
    deductions: '$1,250.00',
  },
  {
    id: 2,
    employee: 'Jane Smith',
    department: 'Design',
    position: 'UI/UX Designer',
    salary: '$72,000',
    payPeriod: 'Apr 1-30, 2023',
    payDate: 'May 5, 2023',
    status: 'Paid',
    netPay: '$5,000.00',
    gross: '$6,000.00',
    deductions: '$1,000.00',
  },
  {
    id: 3,
    employee: 'Robert Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: '$78,000',
    payPeriod: 'Apr 1-30, 2023',
    payDate: 'May 5, 2023',
    status: 'Processing',
    netPay: '$5,416.67',
    gross: '$6,500.00',
    deductions: '$1,083.33',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    department: 'HR',
    position: 'HR Specialist',
    salary: '$65,000',
    payPeriod: 'Apr 1-30, 2023',
    payDate: 'May 5, 2023',
    status: 'Pending',
    netPay: '$4,583.33',
    gross: '$5,416.67',
    deductions: '$833.34',
  },
  {
    id: 5,
    employee: 'Michael Wilson',
    department: 'Finance',
    position: 'Financial Analyst',
    salary: '$80,000',
    payPeriod: 'Apr 1-30, 2023',
    payDate: 'May 5, 2023',
    status: 'Paid',
    netPay: '$5,500.00',
    gross: '$6,666.67',
    deductions: '$1,166.67',
  },
];

const Payroll = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const selectedPeriod ='Apr 2023'

  // Filter payroll data based on status
  const filteredPayrollData = payrollData.filter((item) => {
    if (currentTab === 'all') return true;
    if (currentTab === 'paid') return item.status === 'Paid';
    if (currentTab === 'processing') return item.status === 'Processing';
    if (currentTab === 'pending') return item.status === 'Pending';
    
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payroll</h2>
          <p className="mt-1 text-sm text-gray-500">Manage employee compensation and payroll processing.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button
            variant="outline"
            size="sm"
            icon={<Calendar size={16} />}
          >
            History
          </Button>
          <Button
            size="sm"
            icon={<Send size={16} />}
          >
            Run Payroll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <DollarSign size={24} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Payroll</p>
              <p className="text-2xl font-semibold text-gray-900">$26,333.33</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>3.2% from last month</span>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CreditCard size={24} className="text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Avg. Salary</p>
              <p className="text-2xl font-semibold text-gray-900">$76,000</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600 text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>2.5% from last quarter</span>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <FileText size={24} className="text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tax Withheld</p>
              <p className="text-2xl font-semibold text-gray-900">$5,333.34</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-red-600 text-sm">
            <TrendingDown size={16} className="mr-1" />
            <span>1.8% from last month</span>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <Calendar size={24} className="text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Next Payday</p>
              <p className="text-2xl font-semibold text-gray-900">May 31</p>
            </div>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            <span>In 12 days</span>
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('all')}
            >
              All
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'paid' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('paid')}
            >
              Paid
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'processing' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('processing')}
            >
              Processing
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'pending' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('pending')}
            >
              Pending
            </button>
          </div>
          
          <div className="ml-auto flex items-center space-x-3">
            <div className="relative">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none flex items-center">
                <span>{selectedPeriod}</span>
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
            
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
                  Pay Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gross Pay
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deductions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Pay
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
              {filteredPayrollData.map((payroll) => (
                <tr key={payroll.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar name={payroll.employee} size="sm" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{payroll.employee}</div>
                        <div className="text-sm text-gray-500">{payroll.position}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{payroll.payPeriod}</div>
                    <div className="text-xs text-gray-400">Pay Date: {payroll.payDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {payroll.gross}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payroll.deductions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {payroll.netPay}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={
                        payroll.status === 'Paid' ? 'success' : 
                        payroll.status === 'Processing' ? 'warning' : 
                        'info'
                      }
                      rounded
                    >
                      {payroll.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                        View
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                        <Download size={18} />
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
  );
};

export default Payroll;