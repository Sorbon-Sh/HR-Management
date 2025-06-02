import { useState } from 'react';
import { 
  Users, 
  // UserPlus, 
  Briefcase, 
  FileText, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Filter, 
  Search,
  BarChart2,
  Plus,
  ChevronDown,
  Edit,
  Eye,
  Trash2
} from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/buttons/Button';
import Card from '../ui/cards/Card';
import Avatar from '../ui/Avatar';


const jobOpenings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    applicants: 24,
    status: 'Active',
    posted: 'Apr 10, 2023',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    applicants: 18,
    status: 'Active',
    posted: 'Apr 5, 2023',
  },
  {
    id: 3,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Boston, MA',
    type: 'Full-time',
    applicants: 12,
    status: 'Active',
    posted: 'Mar 28, 2023',
  },
  {
    id: 4,
    title: 'HR Coordinator',
    department: 'HR',
    location: 'Chicago, IL',
    type: 'Part-time',
    applicants: 8,
    status: 'Closed',
    posted: 'Feb 15, 2023',
  },
  {
    id: 5,
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'San Francisco, CA',
    type: 'Contract',
    applicants: 15,
    status: 'Draft',
    posted: 'Unpublished',
  },
];

const applicantsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Senior Frontend Developer',
    email: 'sarah.johnson@example.com',
    status: 'Interview',
    appliedDate: 'Apr 15, 2023',
    experience: '5 years',
  },
  {
    id: 2,
    name: 'Michael Brown',
    position: 'UX/UI Designer',
    email: 'michael.brown@example.com',
    status: 'Screening',
    appliedDate: 'Apr 12, 2023',
    experience: '3 years',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    position: 'Marketing Specialist',
    email: 'emma.wilson@example.com',
    status: 'Rejected',
    appliedDate: 'Apr 8, 2023',
    experience: '2 years',
  },
  {
    id: 4,
    name: 'James Taylor',
    position: 'Senior Frontend Developer',
    email: 'james.taylor@example.com',
    status: 'Offer',
    appliedDate: 'Apr 5, 2023',
    experience: '7 years',
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    position: 'UX/UI Designer',
    email: 'olivia.martinez@example.com',
    status: 'New',
    appliedDate: 'Apr 18, 2023',
    experience: '4 years',
  },
];

const Recruitment = () => {
  const [currentTab, setCurrentTab] = useState('jobs');
  const [jobStatusFilter, setJobStatusFilter] = useState('all');
  const [applicantStatusFilter, setApplicantStatusFilter] = useState('all');
  
  // Filter job openings based on status
  const filteredJobs = jobOpenings.filter((job) => {
    if (jobStatusFilter === 'all') return true;
    if (jobStatusFilter === 'active') return job.status === 'Active';
    if (jobStatusFilter === 'closed') return job.status === 'Closed';
    if (jobStatusFilter === 'draft') return job.status === 'Draft';
    
    return true;
  });
  
  // Filter applicants based on status
  const filteredApplicants = applicantsData.filter((applicant) => {
    if (applicantStatusFilter === 'all') return true;
    if (applicantStatusFilter === 'new') return applicant.status === 'New';
    if (applicantStatusFilter === 'screening') return applicant.status === 'Screening';
    if (applicantStatusFilter === 'interview') return applicant.status === 'Interview';
    if (applicantStatusFilter === 'offer') return applicant.status === 'Offer';
    if (applicantStatusFilter === 'rejected') return applicant.status === 'Rejected';
    
    return true;
  });
  
  // Get badge color based on job status
  const getJobStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge variant="success" rounded>{status}</Badge>;
      case 'Closed':
        return <Badge variant="danger" rounded>{status}</Badge>;
      case 'Draft':
        return <Badge variant="default" rounded>{status}</Badge>;
      default:
        return <Badge variant="default" rounded>{status}</Badge>;
    }
  };
  
  // Get badge color based on applicant status
  const getApplicantStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return <Badge variant="info" rounded>{status}</Badge>;
      case 'Screening':
        return <Badge variant="primary" rounded>{status}</Badge>;
      case 'Interview':
        return <Badge variant="warning" rounded>{status}</Badge>;
      case 'Offer':
        return <Badge variant="success" rounded>{status}</Badge>;
      case 'Rejected':
        return <Badge variant="danger" rounded>{status}</Badge>;
      default:
        return <Badge variant="default" rounded>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recruitment</h2>
          <p className="mt-1 text-sm text-gray-500">Manage job openings and applicants.</p>
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
          >
            New Job
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <Briefcase size={24} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Jobs</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <Users size={24} className="text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Applicants</p>
              <p className="text-2xl font-semibold text-gray-900">77</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <Clock size={24} className="text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Process</p>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <CheckCircle size={24} className="text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Hired</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-100">
          <div className="flex">
            <button
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                currentTab === 'jobs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setCurrentTab('jobs')}
            >
              Job Openings
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                currentTab === 'applicants' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setCurrentTab('applicants')}
            >
              Applicants
            </button>
          </div>
        </div>
        
        {/* Job Openings */}
        {currentTab === 'jobs' && (
          <>
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${jobStatusFilter === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setJobStatusFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${jobStatusFilter === 'active' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setJobStatusFilter('active')}
                >
                  Active
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${jobStatusFilter === 'closed' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setJobStatusFilter('closed')}
                >
                  Closed
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${jobStatusFilter === 'draft' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setJobStatusFilter('draft')}
                >
                  Draft
                </button>
              </div>
              
              <div className="ml-auto flex items-center space-x-3">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500 transition-colors duration-200"
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
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicants
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
                  {filteredJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                        <div className="text-xs text-gray-500">{job.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Users size={16} className="text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900">{job.applicants}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getJobStatusBadge(job.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 text-gray-500 rounded hover:bg-gray-100">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-gray-500 rounded hover:bg-gray-100">
                            <Edit size={16} />
                          </button>
                          <button className="p-1 text-red-500 rounded hover:bg-red-50">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        
        {/* Applicants */}
        {currentTab === 'applicants' && (
          <>
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'new' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('new')}
                >
                  New
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'screening' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('screening')}
                >
                  Screening
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'interview' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('interview')}
                >
                  Interview
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'offer' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('offer')}
                >
                  Offer
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${applicantStatusFilter === 'rejected' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setApplicantStatusFilter('rejected')}
                >
                  Rejected
                </button>
              </div>
              
              <div className="ml-auto flex items-center space-x-3">
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search applicants..."
                    className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-blue-500 transition-colors duration-200"
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <Search size={18} />
                  </div>
                </div>
                
                <div className="relative">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none flex items-center">
                    <span>All Positions</span>
                    <ChevronDown size={16} className="ml-2" />
                  </button>
                </div>
                
                <button className="p-2 text-gray-500 rounded-md hover:bg-gray-100">
                  <Filter size={20} />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied
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
                  {filteredApplicants.map((applicant) => (
                    <tr key={applicant.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Avatar name={applicant.name} size="sm" />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                            <div className="text-sm text-gray-500">{applicant.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {applicant.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {applicant.experience}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {applicant.appliedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getApplicantStatusBadge(applicant.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 text-gray-500 rounded hover:bg-gray-100">
                            <FileText size={16} />
                          </button>
                          <button className="p-1 text-green-500 rounded hover:bg-green-50">
                            <CheckCircle size={16} />
                          </button>
                          <button className="p-1 text-red-500 rounded hover:bg-red-50">
                            <XCircle size={16} />
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        
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
    </div>
  );
};

export default Recruitment;