import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  rounded?: boolean;
}

const Badge = ({
  children,
  variant = 'default',
  rounded = false,
}: BadgeProps) => {
  // Variant styles
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-indigo-100 text-indigo-800',
  };

  return (
    <span
      className={`
        inline-flex px-2.5 py-0.5 text-xs font-medium
        ${variantStyles[variant]}
        ${rounded ? 'rounded-full' : 'rounded'}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;