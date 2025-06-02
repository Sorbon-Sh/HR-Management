import { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Shield, 
  UserPlus, 
  Users, 
  Building, 
  Mail, 
  Phone, 
//   Map, 
  Calendar, 
  Camera, 
  Save,
  ChevronDown,
  Search,
  Edit
} from 'lucide-react';
import Card from '../ui/cards/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/buttons/Button';


const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your account settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-0 sticky top-20">
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'profile' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} className={`mr-3 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`} />
                Profile
              </button>
              
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'company' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('company')}
              >
                <Building size={18} className={`mr-3 ${activeTab === 'company' ? 'text-blue-600' : 'text-gray-500'}`} />
                Company
              </button>
              
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'team' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('team')}
              >
                <Users size={18} className={`mr-3 ${activeTab === 'team' ? 'text-blue-600' : 'text-gray-500'}`} />
                Team Members
              </button>
              
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'notifications' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell size={18} className={`mr-3 ${activeTab === 'notifications' ? 'text-blue-600' : 'text-gray-500'}`} />
                Notifications
              </button>
              
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'security' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('security')}
              >
                <Shield size={18} className={`mr-3 ${activeTab === 'security' ? 'text-blue-600' : 'text-gray-500'}`} />
                Security
              </button>
              
              <button
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'preferences' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('preferences')}
              >
                <Globe size={18} className={`mr-3 ${activeTab === 'preferences' ? 'text-blue-600' : 'text-gray-500'}`} />
                Preferences
              </button>
            </nav>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <>
              <Card>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="relative">
                      <Avatar 
                        name="John Smith" 
                        size="xl" 
                      />
                      <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50">
                        <Camera size={18} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">John Smith</h3>
                    <p className="text-sm text-gray-500">HR Manager</p>
                    <div className="mt-2 flex space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail size={16} className="mr-1" />
                        john.smith@company.com
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone size={16} className="mr-1" />
                        (555) 123-4567
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card title="Personal Information">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        defaultValue="Smith"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue="john.smith@company.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        defaultValue="(555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        defaultValue="HR Manager"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <select
                        id="department"
                        name="department"
                        defaultValue="HR"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="HR">Human Resources</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        defaultValue="New York, NY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Join Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="joinDate"
                          name="joinDate"
                          defaultValue="2021-06-15"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Calendar size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      defaultValue="HR professional with 8+ years of experience in talent acquisition, employee relations, and HR operations."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      className="mr-3"
                    >
                      Cancel
                    </Button>
                    <Button
                      icon={<Save size={16} />}
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Card>
            </>
          )}
          
          {/* Company Settings */}
          {activeTab === 'company' && (
            <Card title="Company Information">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      defaultValue="Acme Corporation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      defaultValue="Technology"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="companyEmail"
                      name="companyEmail"
                      defaultValue="info@acmecorp.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="companyPhone"
                      name="companyPhone"
                      defaultValue="(555) 987-6543"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      defaultValue="https://www.acmecorp.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Employees
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      defaultValue="50-100"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="50-100">50-100</option>
                      <option value="101-500">101-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue="123 Main St"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      defaultValue="New York"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      defaultValue="NY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      defaultValue="10001"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    defaultValue="Acme Corporation is a leading technology company specializing in innovative software solutions for businesses of all sizes."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    className="mr-3"
                  >
                    Cancel
                  </Button>
                  <Button
                    icon={<Save size={16} />}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Card>
          )}
          
          {/* Team Members Settings */}
          {activeTab === 'team' && (
            <Card title="Team Members">
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Search team members..."
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                </div>
                
                <Button
                  icon={<UserPlus size={16} />}
                >
                  Add Member
                </Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'John Smith', email: 'john.smith@company.com', role: 'HR Manager', department: 'Human Resources' },
                  { name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Senior Developer', department: 'Engineering' },
                  { name: 'Michael Brown', email: 'michael.brown@company.com', role: 'UI/UX Designer', department: 'Design' },
                  { name: 'Emily Davis', email: 'emily.davis@company.com', role: 'HR Specialist', department: 'Human Resources' },
                  { name: 'Robert Wilson', email: 'robert.wilson@company.com', role: 'Marketing Manager', department: 'Marketing' },
                ].map((member, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar name={member.name} size="md" />
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{member.name}</h4>
                          <p className="text-sm text-gray-500">{member.email}</p>
                          <div className="flex mt-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                              {member.role}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {member.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button className="p-2 text-gray-500 hover:text-gray-700">
                          <Edit size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">Showing 5 of 24 team members</p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </Card>
          )}
          
          {/* Other settings tabs would be implemented similarly */}
          {activeTab === 'notifications' && (
            <Card title="Notification Settings">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Email Notifications</h3>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'email-leave', label: 'Leave Requests', description: 'Receive notifications for new leave requests and updates' },
                      { id: 'email-attendance', label: 'Attendance Updates', description: 'Receive notifications for attendance irregularities' },
                      { id: 'email-applicants', label: 'New Applicants', description: 'Receive notifications when new candidates apply' },
                      { id: 'email-documents', label: 'Document Updates', description: 'Receive notifications when documents are updated or shared' },
                      { id: 'email-performance', label: 'Performance Reviews', description: 'Receive notifications for performance review cycles' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={item.id}
                            name={item.id}
                            type="checkbox"
                            defaultChecked={true}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={item.id} className="font-medium text-gray-700">
                            {item.label}
                          </label>
                          <p className="text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">System Notifications</h3>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'system-updates', label: 'System Updates', description: 'Receive notifications for system updates and maintenance' },
                      { id: 'system-reminders', label: 'Task Reminders', description: 'Receive reminders for tasks and deadlines' },
                      { id: 'system-security', label: 'Security Alerts', description: 'Receive notifications for security-related events' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={item.id}
                            name={item.id}
                            type="checkbox"
                            defaultChecked={true}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={item.id} className="font-medium text-gray-700">
                            {item.label}
                          </label>
                          <p className="text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    icon={<Save size={16} />}
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </Card>
          )}
          
          {activeTab === 'security' && (
            <div className="space-y-6">
              <Card title="Change Password">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      id="current-password"
                      name="current-password"
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      id="new-password"
                      name="new-password"
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      icon={<Lock size={16} />}
                    >
                      Update Password
                    </Button>
                  </div>
                </form>
              </Card>
              
              <Card title="Two-Factor Authentication">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="mt-1 text-sm text-gray-500">Add an extra layer of security to your account.</p>
                  </div>
                  <div className="flex items-center">
                    <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-200">
                      <span className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"></span>
                    </button>
                  </div>
                </div>
              </Card>
              
              <Card title="Login Sessions">
                <div className="space-y-4">
                  {[
                    { device: 'MacBook Pro', location: 'New York, NY', time: 'Active now', active: true },
                    { device: 'iPhone 13', location: 'New York, NY', time: '2 hours ago', active: false },
                    { device: 'Windows PC', location: 'Boston, MA', time: '3 days ago', active: false },
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${session.active ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
                          <h4 className="text-sm font-medium text-gray-900">{session.device}</h4>
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          <span>{session.location}</span>
                          <span className="mx-1">•</span>
                          <span>{session.time}</span>
                        </div>
                      </div>
                      
                      {!session.active && (
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Revoke
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          
          {activeTab === 'preferences' && (
            <Card title="System Preferences">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Language & Region</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                        Language
                      </label>
                      <div className="relative">
                        <select
                          id="language"
                          name="language"
                          defaultValue="en"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="zh">Chinese</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                        Time Zone
                      </label>
                      <div className="relative">
                        <select
                          id="timezone"
                          name="timezone"
                          defaultValue="America/New_York"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none"
                        >
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="date-format" className="block text-sm font-medium text-gray-700 mb-1">
                        Date Format
                      </label>
                      <div className="relative">
                        <select
                          id="date-format"
                          name="date-format"
                          defaultValue="MM/DD/YYYY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none"
                        >
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time-format" className="block text-sm font-medium text-gray-700 mb-1">
                        Time Format
                      </label>
                      <div className="relative">
                        <select
                          id="time-format"
                          name="time-format"
                          defaultValue="12h"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none"
                        >
                          <option value="12h">12-hour (AM/PM)</option>
                          <option value="24h">24-hour</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown size={16} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">Theme & Appearance</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Theme
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="border border-gray-200 rounded-md p-3 cursor-pointer bg-white ring-2 ring-blue-500 ring-offset-2">
                          <div className="h-8 bg-white border border-gray-200 rounded-md mb-2"></div>
                          <div className="text-xs font-medium text-center">Light</div>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3 cursor-pointer">
                          <div className="h-8 bg-gray-800 rounded-md mb-2"></div>
                          <div className="text-xs font-medium text-center">Dark</div>
                        </div>
                        <div className="border border-gray-200 rounded-md p-3 cursor-pointer">
                          <div className="h-8 bg-gradient-to-r from-white to-gray-800 rounded-md mb-2"></div>
                          <div className="text-xs font-medium text-center">System</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="font-size" className="block text-sm font-medium text-gray-700 mb-1">
                        Font Size
                      </label>
                      <select
                        id="font-size"
                        name="font-size"
                        defaultValue="medium"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    icon={<Save size={16} />}
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;