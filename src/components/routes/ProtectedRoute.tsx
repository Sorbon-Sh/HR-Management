// src/components/auth/ProtectedRoute.tsx
import  { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import supabase from "../../shared/api/supabaseClient";
import Loading from "../layouts/Loading";


// * Сначало запускается компонет и читает весь код
export const ProtectedRoute = () => {
  const  [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // * Нужен триггер чтобы комопнент знал что пользователь нажал на кнопку выхода
   supabase.auth.onAuthStateChange((_event, session) => { 
  if(!session) setIsLoading(true)
  })

 console.log("isAuthenticated изменился:", isAuthenticated);
// * Помтом запускается useEffect ( после ) монтировании компонента
// * useLayoutEffect запускается ( перед ) отрисовкой компонента можно использовать и его
  useEffect(() => {
   const getSession = async () => {
    const {
      data: {session}
    } = await supabase.auth.getSession()

    setIsAuthenticated( !!session )
    setIsLoading(false)
    console.log("effect log")
   }
    
   getSession()

   console.log("Mounted:", performance.now());
return () => console.log("Unmounted:", performance.now());
  },[])




// * Понадабится для работы
//  supabase.auth.onAuthStateChange((event, session) => { 
//   console.log("Auth event: ", event)
//   console.log("Session: ", session)
//   if(event === "SIGNED_OUT") setIsLoading(true)
//   })



//   useEffect(() => {
//   console.log("isAuthenticated изменился:", isAuthenticated);
// }, [isAuthenticated]);

// * isLoading нужен, чтобы “заморозить” поведение компонента, 
// * пока React не узнает результат проверки.
// ! Моя версия с isLoading была провальной Нужно узнать как это работает

  if (isLoading) {
    return <Loading />
  }
  else{

    if(isAuthenticated){
      return <Outlet />
    }
    // * Иначе useEffect не успеет изменить данные в useState чтобы данные обновились и перерисовались
  return <Navigate to="/login" />
  }
  
  
};