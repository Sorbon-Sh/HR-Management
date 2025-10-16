import { useNavigate } from "react-router";
import supabase from "../../../shared/api/supabaseClient";

const LogoutButton = () => {
  const navigation = useNavigate()
  const logOut = async () => {
    const {error} = await supabase.auth.signOut()
    if(error) return console.log("Logout error: ", error.message)
    navigation("/login")
  }

  return (
    <button
      className="text-white bg-red-600 px-4 py-2 rounded"
      onClick={logOut}
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
