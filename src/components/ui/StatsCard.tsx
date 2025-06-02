
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  change?: number;
  changeText?: string;
  changeDirection?: 'up' | 'down' | 'neutral';
}

const StatsCard = ({
  title,
  value,
  icon,
  change,
  changeText,
  changeDirection = 'neutral',
}: StatsCardProps) => {
  const getChangeColor = () => {
    if (changeDirection === 'up') return 'text-green-600';
    if (changeDirection === 'down') return 'text-red-600';
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          
          {(change !== undefined || changeText) && (
            <div className={`mt-2 flex items-center ${getChangeColor()}`}>
              {changeDirection === 'up' && <ArrowUp size={16} className="mr-1" />}
              {changeDirection === 'down' && <ArrowDown size={16} className="mr-1" />}
              <span className="text-sm font-medium">
                {change !== undefined && `${change}%`}
                {changeText && ` ${changeText}`}
              </span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="p-2 bg-blue-50 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;