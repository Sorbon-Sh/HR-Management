import type { ReactNode } from "react";


interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Card = ({ title, children, className = '', noPadding = false }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-800">{title}</h3>
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

export default Card;