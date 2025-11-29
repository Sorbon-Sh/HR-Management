import { useNavigate } from "react-router";
import supabase from "../../../shared/api/supabaseClient";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../shared/hooks/useReduxTypedHooks";
import { rootApi } from "../../../shared/redux/slices/rootApi";
const LogoutButton = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogOut = async () => {
    toast.loading("Выход из системы...");
    const { error } = await supabase.auth.signOut();
    dispatch(rootApi.util.resetApiState());

    if (error) return console.log("Logout error: ", error.message);
    navigation("/login");
  };

  return (
    <button
      className="text-white bg-red-600 px-4 py-2 rounded cursor-pointer hover:bg-red-700 transition"
      onClick={handleLogOut}
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
