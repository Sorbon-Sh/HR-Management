import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import supabase from "../../shared/api/supabaseClient";
import { useNavigate } from "react-router";
import type { InputsAuth } from "../../shared/types/AuthTypes";
import { toast, ToastContainer } from "react-toastify";


export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigate()
  const {register,handleSubmit,reset,formState: { errors }} = useForm<InputsAuth>()

// * Блок обработки ошибок формы
  const onError = () => {
  if (errors.password?.message) {
    toast.error(errors.password.message);
  }
};

  const submit: SubmitHandler<InputsAuth> = async  (formData) => {

// * Блок Входа в систему
if(isLogin){
   const toastLoading = toast.loading("Вход в систему...")
    const {data, error} = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: String(formData.password),
  })

  // * Блок Обработка ошибок входа
  if(error){ 
      toast.update(toastLoading, 
{render: "Не правильный логин или пароль!",
   type: "error", 
   isLoading: false,
   autoClose: 3000})

    throw new Error(error.message)
  }

  if(data) navigation("/")
reset()
}

// * Блок Регистрации пользователя
  if(!isLogin){
  const toastLoading = toast.loading("Регистрация пользователя...")

  const { data, error } = await supabase.auth.signUp({
  email: formData.email,
  password: String(formData.password),
})

// * Блок создания профиля пользователя
// * Создаем доп данные пользователя в Supabase (Cоздаём профиль) с методом Profiles
if (data.user) {

  const {error: profileError } = await supabase.from("profiles").insert({
    id: data.user.id,
    fullname: formData.fullName,
    role: "user", // можно задать по умолчанию
  });

  if (profileError) throw new Error(profileError.message);
}

// * Блок Обработка ошибок регистрации
if(error){ 
  
    if(error.status === 422) {
         toast.update(toastLoading, 
{render: "Такой пользователь уже существует!",
   type: "error", 
   isLoading: false,
   autoClose: 3000})
  }

      if(error.status === 0) {
         toast.update(toastLoading, 
{render: "Нет интернета!",
   type: "error", 
   isLoading: false,
   autoClose: 3000})
  }

  throw new Error(`${error.status}`)
}

if(data.user) navigation("/")
}
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

          <form onSubmit={handleSubmit(submit, onError)} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                {...register("fullName", {
                  required: true,
                  setValueAs: (value) => value.trim(),
                })}
                placeholder="ФИО"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <input
              type="email"
              {...register("email", {
                 required: true,
                 setValueAs: (value) => value.trim() })}
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
             {...register("password", {
    setValueAs: (value) => value.trim(),
    required: true,
    minLength: {
      value: 8,
      message: "Минимальная длина пароля — 8 символов",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        "Пароль должен содержать хотя бы одну цифру, одну заглавную и одну строчную букву",
    },
  })}
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
      <ToastContainer />
    </div>
  );
}
