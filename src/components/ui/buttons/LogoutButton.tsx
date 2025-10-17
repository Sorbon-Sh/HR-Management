import { useNavigate } from "react-router";
import supabase from "../../../shared/api/supabaseClient";
import { useAppDispatch } from "../../../shared/hooks/useReduxTypedHooks";
import { logOut } from "../../../shared/redux/slices/authData";


const LogoutButton = () => {
  const navigation = useNavigate()
  const dispatch  = useAppDispatch()
  
  const handleLogOut = async () => {
    dispatch(logOut(true))
    const {error} = await supabase.auth.signOut()
    if(error) return console.log("Logout error: ", error.message)
    navigation("/login")
  }

  return (
    <button
      className="text-white bg-red-600 px-4 py-2 rounded"
      onClick={handleLogOut}
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
