// src/components/auth/ProtectedRoute.tsx
import  { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router";
import supabase from "../../shared/api/supabaseClient";
import Loading from "../layouts/Loading";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useReduxTypedHooks";
import { logOut } from "../../shared/redux/slices/authData";

interface IProps {
  children: ReactNode;
}
// * Сначало запускается компонет и читает весь код
export const ProtectedRoute = ({ children }:IProps) => {
  const  [isAuthenticated, setIsAuthenticated] = useState(false)
  const isLoading = useAppSelector((state) => state.userLogOut.logOut)
  const dispatch = useAppDispatch()
 console.log("isAuthenticated изменился:", isAuthenticated);


// * Помтом запускается useEffect ( после ) монтировании компонента
// * useLayoutEffect запускается ( перед ) отрисовкой компонента можно использовать и его
  useEffect(() => {
   const getSession = async () => {
    const {
      data: {session}
    } = await supabase.auth.getSession()

    setIsAuthenticated( !!session )
    dispatch(logOut(false))
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
    return <Loading />
  }
  else{

    if(isAuthenticated){
      return <>{children}</>
    }
    // * Иначе useEffect не успеет изменить данные в useState чтобы данные обновились и перерисовались
  return <Navigate to="/login" />
  }
  
  
};
