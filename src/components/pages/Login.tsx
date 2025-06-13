// src/components/auth/Login.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

export default function Login() {
  const { loginWithPopup, user, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithPopup();
      console.log("User:", user);
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  };

    if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    // <div className="p-6 max-w-sm mx-auto">
    //   <h2 className="text-lg font-semibold mb-4">Вход</h2>
    //   {!isAuthenticated ? (
    //     <button
    //       onClick={handleLogin}
    //       className="bg-blue-600 text-white px-4 py-2 rounded"
    //     >
    //       Войти
    //     </button>
    //   ) : (
    //     <p>Вы уже вошли</p>
    //   )}
    // </div>
    <div className="flex h-screen bg-white">
      {/* Левая часть: Иллюстрация */}
      <div className="hidden md:flex w-1/2 bg-blue-100 justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=800&q=80"
          alt="HR Illustration"
          className="w-3/4 h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Правая часть: Форма входа */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Добро пожаловать 👋</h1>
          <p className="text-gray-600">Войдите в HR System, чтобы продолжить</p>

          <button
            onClick={() => handleLogin()}
            disabled={isLoading}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            {isLoading ? "Загрузка..." : "Войти"}
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Надёжно защищено с помощью Auth0
          </p>
        </div>
      </div>
    </div>
  );
}
