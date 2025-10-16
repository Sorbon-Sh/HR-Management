import { Users, UserCheck, Clock, Calendar, BarChart2, PieChart, TrendingUp, } from 'lucide-react';
import Button from '../ui/buttons/Button';
import StatsCard from '../ui/StatsCard';
import Card from '../ui/cards/Card';

const Dashboard = () => {

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-1 text-sm text-gray-500">Welcome back! Here's an overview of your HR metrics.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-3">
          <Button
            variant="outline"
            size="sm"
            icon={<BarChart2 size={16} />}
          >
            Export Report
          </Button>
          <Button
            size="sm"
            icon={<PieChart size={16} />}
          >
            Analytics
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Employees"
          value="124"
          icon={<Users size={24} className="text-blue-600" />}
          change={2.5}
          changeText="from last month"
          changeDirection="up"
        />
        <StatsCard
          title="Active Employees"
          value="118"
          icon={<UserCheck size={24} className="text-green-600" />}
          change={95.2}
          changeText="attendance rate"
          changeDirection="up"
        />
        <StatsCard
          title="On Leave Today"
          value="6"
          icon={<Calendar size={24} className="text-orange-600" />}
          change={1.2}
          changeText="from yesterday"
          changeDirection="down"
        />
        <StatsCard
          title="Average Hours"
          value="7.5"
          icon={<Clock size={24} className="text-purple-600" />}
          change={0.3}
          changeText="from last week"
          changeDirection="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employee Distribution */}
        <Card title="Employee Distribution" className="lg:col-span-1">
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <PieChart size={120} className="mx-auto text-gray-300" />
              <p className="mt-4 text-sm text-gray-500">Department distribution chart</p>
            </div>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card title="Recent Activities" className="lg:col-span-2">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <TrendingUp size={16} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Performance Review Completed</p>
                  <p className="text-xs text-gray-500">John Doe completed quarterly review for Mark Johnson</p>
                  <p className="mt-1 text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <Card title="Upcoming Events" className="lg:col-span-1">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-50 flex flex-col items-center justify-center text-blue-600">
                  <span className="text-xs font-semibold">APR</span>
                  <span className="text-sm font-bold">{10 + item}</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Team Meeting</p>
                  <p className="text-xs text-gray-500">10:00 AM - 11:30 AM</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Budget Overview */}
        <Card title="Budget Overview" className="lg:col-span-2">
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart2 size={120} className="mx-auto text-gray-300" />
              <p className="mt-4 text-sm text-gray-500">Monthly department budget allocation</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;