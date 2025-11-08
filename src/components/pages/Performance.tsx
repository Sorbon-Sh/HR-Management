import { useState } from 'react';
import { 
  TrendingUp, 
  BarChart2, 
  Award, 
  Star, 
  ChevronDown, 
  Filter, 
  Download, 
  Plus, 
  CheckCircle, 
//   XCircle,
//   AlertCircle,
  Clock
} from 'lucide-react';
import Button from '../ui/buttons/Button';
import Card from '../ui/cards/Card';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { createPortal } from 'react-dom';
import AddPerformance from '../ui/modals/AddPerformance';


const performanceData = [
  {
    id: 1,
    employee: 'John Doe',
    department: 'Engineering',
    position: 'Senior Developer',
    period: 'Q1 2023',
    rating: 4.8,
    status: 'Completed',
    reviewDate: 'Mar 30, 2023',
  },
  {
    id: 2,
    employee: 'Jane Smith',
    department: 'Design',
    position: 'UI/UX Designer',
    period: 'Q1 2023',
    rating: 4.5,
    status: 'Completed',
    reviewDate: 'Mar 28, 2023',
  },
  {
    id: 3,
    employee: 'Robert Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    period: 'Q1 2023',
    rating: 3.9,
    status: 'In Progress',
    reviewDate: 'Apr 15, 2023',
  },
  {
    id: 4,
    employee: 'Emily Davis',
    department: 'HR',
    position: 'HR Specialist',
    period: 'Q1 2023',
    rating: 4.2,
    status: 'Pending',
    reviewDate: 'Apr 20, 2023',
  },
  {
    id: 5,
    employee: 'Michael Wilson',
    department: 'Finance',
    position: 'Financial Analyst',
    period: 'Q1 2023',
    rating: 4.0,
    status: 'Draft',
    reviewDate: 'Apr 25, 2023',
  },
];

const Performance = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [performanceModal, setPerformanceModal] = useState(false);

  // Filter performance data based on status
  const filteredPerformanceData = performanceData.filter((item) => {
    if (currentTab === 'all') return true;
    if (currentTab === 'completed') return item.status === 'Completed';
    if (currentTab === 'inProgress') return item.status === 'In Progress';
    if (currentTab === 'pending') return item.status === 'Pending';
    if (currentTab === 'draft') return item.status === 'Draft';
    
    return true;
  });

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < fullStars
                ? 'text-yellow-400 fill-current'
                : index === fullStars && hasHalfStar
                ? 'text-yellow-400'
                : 'text-gray-300'
            }
          />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Performance</h2>
          <p className="mt-1 text-sm text-gray-500">Manage employee performance reviews and evaluations.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button
            variant="outline"
            size="sm"
            icon={<BarChart2 size={16} />}
          >
            Analytics
          </Button>
          <Button
            size="sm"
            icon={<Plus size={16} />}
            onClick={() => setPerformanceModal(true)}
          >
            New Review
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Average Rating</p>
              <p className="text-2xl font-semibold text-gray-900">4.3</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {renderStars(4.3)}
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle size={24} className="text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">28</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <Clock size={24} className="text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <Award size={24} className="text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Top Performer</p>
              <p className="text-2xl font-semibold text-gray-900">John D.</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {renderStars(4.8)}
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
              All Reviews
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'completed' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('completed')}
            >
              Completed
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentTab === 'inProgress' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setCurrentTab('inProgress')}
            >
              In Progress
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
                <span>Q1 2023</span>
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
                  Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPerformanceData.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar name={review.employee} size="sm" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{review.employee}</div>
                        <div className="text-sm text-gray-500">{review.position}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {review.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {renderStars(review.rating)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge 
                      variant={
                        review.status === 'Completed' ? 'success' : 
                        review.status === 'In Progress' ? 'warning' : 
                        review.status === 'Pending' ? 'info' :
                        'default'
                      }
                      rounded
                    >
                      {review.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {review.reviewDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                        View
                      </button>
                      {review.status !== 'Completed' && (
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                          Edit
                        </button>
                      )}
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
      {performanceModal && createPortal(<AddPerformance closeModal={setPerformanceModal} />, document.body)}
    </div>
  );
};

export default Performance;