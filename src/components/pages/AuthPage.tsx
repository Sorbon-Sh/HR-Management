import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import supabase from "../../shared/api/supabaseClient";
import { useNavigate } from "react-router";
import type { InputsAuth } from "../../shared/types/AuthTypes";


export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigate()
  const {register,handleSubmit,reset} = useForm<InputsAuth>()
  const submit: SubmitHandler<InputsAuth> = async  (formData) => {

if(isLogin){

    const {data, error} = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: String(formData.password),
  })
  console.log("Login Data: ", data ? data : "загрузка");

  if(error) throw new Error(error.message)

  if(data){
    navigation("/")
  }

reset()

}


//   if(!isLogin){

//     const {data, error} = supabase.auth.signUp({
//   email: formData.email,
//   password: String(formData.password),
// })

// }


  }


  return (
    <div className="flex h-screen">
      {/* Левая часть с картинкой */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Corporate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая часть с формой */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            {isLogin ? "Вход в систему" : "Регистрация"}
          </h1>

          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                {...register("fullName")}
                placeholder="ФИО"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Пароль"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-medium hover:underline"
            >
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
