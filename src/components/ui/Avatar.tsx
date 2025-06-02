import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'away' | 'busy' | 'offline';
}

const Avatar = ({
  src,
  alt = 'Avatar',
  name,
  size = 'md',
  status
}: AvatarProps) => {
  // Size map
  const sizeMap = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };
  
  // Status color map
  const statusColorMap = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    offline: 'bg-gray-400',
  };
  
  // Get initials from name
  const getInitials = () => {
    if (!name) return '';
    
    const nameParts = name.split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };
  
  return (
    <div className="relative inline-flex">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeMap[size]} rounded-full object-cover`}
        />
      ) : (
        <div className={`${sizeMap[size]} rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold`}>
          {name ? getInitials() : <User size={size === 'xs' ? 14 : size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 24 : 28} />}
        </div>
      )}
      
      {status && (
        <span className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${statusColorMap[status]}`} style={{ width: '25%', height: '25%' }} />
      )}
    </div>
  );
};

export default Avatar;