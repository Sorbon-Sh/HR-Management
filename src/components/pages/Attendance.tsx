import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Download,
  Check,
  X,
  AlertCircle
} from 'lucide-react';
import Button from '../ui/buttons/Button';
import Card from '../ui/cards/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';


const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Generate attendance data
const attendanceData = [
  {
    id: 1,
    name: 'John Doe',
    checkIn: '09:00 AM',
    checkOut: '05:30 PM',
    status: 'Present',
    totalHours: '8h 30m',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Jane Smith',
    checkIn: '08:45 AM',
    checkOut: '05:15 PM',
    status: 'Present',
    totalHours: '8h 30m',
    department: 'Design',
  },
  {
    id: 3,
    name: 'Robert Johnson',
    checkIn: '--:--',
    checkOut: '--:--',
    status: 'Absent',
    totalHours: '--',
    department: 'Marketing',
  },
  {
    id: 4,
    name: 'Emily Davis',
    checkIn: '09:15 AM',
    checkOut: '06:00 PM',
    status: 'Present',
    totalHours: '8h 45m',
    department: 'HR',
  },
  {
    id: 5,
    name: 'Michael Wilson',
    checkIn: '09:30 AM',
    checkOut: '04:00 PM',
    status: 'Half-day',
    totalHours: '6h 30m',
    department: 'Finance',
  },
];

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [currentMonthDisplay, setCurrentMonthDisplay] = useState(currentMonth);
  const [currentYearDisplay, setCurrentYearDisplay] = useState(currentYear);
  
  // Calendar functions
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    if (currentMonthDisplay === 0) {
      setCurrentMonthDisplay(11);
      setCurrentYearDisplay(currentYearDisplay - 1);
    } else {
      setCurrentMonthDisplay(currentMonthDisplay - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonthDisplay === 11) {
      setCurrentMonthDisplay(0);
      setCurrentYearDisplay(currentYearDisplay + 1);
    } else {
      setCurrentMonthDisplay(currentMonthDisplay + 1);
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonthDisplay, currentYearDisplay);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonthDisplay, currentYearDisplay);
    
    const days = [];
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  // Get month name
  const getMonthName = (month: number) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  };

  // Check if a day is selected
  const isSelectedDay = (day: number | null) => {
    if (day === null) return false;
    
    return (
      day === selectedDate.getDate() &&
      currentMonthDisplay === selectedDate.getMonth() &&
      currentYearDisplay === selectedDate.getFullYear()
    );
  };

  // Check if a day is today
  const isToday = (day: number | null) => {
    if (day === null) return false;
    
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonthDisplay === today.getMonth() &&
      currentYearDisplay === today.getFullYear()
    );
  };

  // Handle day selection
  const selectDay = (day: number | null) => {
    if (day === null) return;
    
    setSelectedDate(new Date(currentYearDisplay, currentMonthDisplay, day));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Attendance</h2>
          <p className="mt-1 text-sm text-gray-500">Track employee attendance and time records.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button
            variant="outline"
            size="sm"
            icon={<Download size={16} />}
          >
            Export
          </Button>
          <Button
            size="sm"
            icon={<Filter size={16} />}
          >
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">
              {getMonthName(currentMonthDisplay)} {currentYearDisplay}
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={prevMonth}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextMonth}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays().map((day, index) => (
              <button
                key={index}
                className={`
                  rounded-full w-8 h-8 mx-auto flex items-center justify-center text-sm
                  ${day === null ? 'invisible' : ''}
                  ${isSelectedDay(day) ? 'bg-blue-600 text-white' : ''}
                  ${isToday(day) && !isSelectedDay(day) ? 'border border-blue-600 text-blue-600' : ''}
                  ${!isSelectedDay(day) && !isToday(day) ? 'hover:bg-gray-100' : ''}
                `}
                onClick={() => selectDay(day)}
                disabled={day === null}
              >
                {day}
              </button>
            ))}
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Present</span>
              </div>
              <span className="text-sm font-medium">21</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm text-gray-600">Half-day</span>
              </div>
              <span className="text-sm font-medium">3</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-gray-600">Absent</span>
              </div>
              <span className="text-sm font-medium">2</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-600">Leave</span>
              </div>
              <span className="text-sm font-medium">4</span>
            </div>
          </div>
        </Card>

        {/* Attendance Table */}
        <Card className="lg:col-span-2" noPadding>
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center">
              <CalendarIcon size={18} className="text-blue-600 mr-2" />
              <h3 className="font-medium text-gray-800">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-blue-600 rounded-md hover:bg-blue-50">
                <Clock size={18} />
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
                    Check In
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Check Out
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hours
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar name={employee.name} size="sm" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.checkIn}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.checkOut}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge 
                        variant={
                          employee.status === 'Present' ? 'success' : 
                          employee.status === 'Half-day' ? 'warning' : 
                          'danger'
                        }
                        rounded
                      >
                        {employee.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.totalHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Attendance Rate</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">92%</p>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <Check size={24} className="text-green-600" />
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Absence Rate</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">5%</p>
            </div>
            <div className="p-3 rounded-full bg-red-100">
              <X size={24} className="text-red-600" />
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: '5%' }}></div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Late Arrivals</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">8%</p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100">
              <AlertCircle size={24} className="text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '8%' }}></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;