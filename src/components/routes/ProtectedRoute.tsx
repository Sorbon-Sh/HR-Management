// src/components/auth/ProtectedRoute.tsx
import  { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router";
import supabase from "../../shared/api/supabaseClient";

interface IProps {
  children: ReactNode;
}
// * Сначало запускается компонет и читает весь код
export const ProtectedRoute = ({ children }:IProps) => {
  const  [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  let render = 0
 console.log("Rednder ProtectedRoute", ++render);
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
    console.log("Session: ", !!session)
   }

   getSession()
  },[])
// * Понадабится для работы
//  supabase.auth.onAuthStateChange((event, session) => { 
//   console.log("Auth event: ", event)
//   console.log("Session: ", session)
//   })

//   useEffect(() => {
//   console.log("isAuthenticated изменился:", isAuthenticated);
// }, [isAuthenticated]);

// * isLoading нужен, чтобы “заморозить” поведение компонента, 
// * пока React не узнает результат проверки.
  if (isLoading) {

    return <div className="p-6 text-center">Загрузка...</div>;
  }else{
    if(isAuthenticated){
      return <>{children}</>
    }
    // * Иначе useEffect не успеет изменить данные в useState чтобы данные обновились и перерисовались
  return <Navigate to="/login" />
  }
  
  
};
