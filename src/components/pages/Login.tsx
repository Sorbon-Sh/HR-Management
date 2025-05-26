// src/components/auth/Login.tsx
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
      console.log("User:", user);
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Вход</h2>
      {!isAuthenticated ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Войти
        </button>
      ) : (
        <p>Вы уже вошли</p>
      )}
    </div>
  );
}
