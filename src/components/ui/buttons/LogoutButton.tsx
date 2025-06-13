import { useLogout } from "../../../shared/hooks/auth/useLogout";


const LogoutButton = () => {
  const { handleLogout } = useLogout();

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-red-600 px-4 py-2 rounded"
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
