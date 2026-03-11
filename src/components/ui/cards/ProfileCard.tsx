interface IProps {
  name: string | null;
  role: string | null;
}

export const ProfileCard = ({ name, role }: IProps) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
        JS
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium ">{name} </p>
        <p className="text-xs font-medium ">{role}</p>
      </div>
    </div>
  );
};
