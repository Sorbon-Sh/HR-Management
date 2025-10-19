// src/components/auth/ProtectedRoute.tsx
import  { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
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
 console.log("---------------------------------------------------------- ")
 console.log("isAuthenticated изменился:", isAuthenticated);
 console.log("isLaoding :", isLoading)
 console.log("---------------------------------------------------------- ")

// * Помтом запускается useEffect ( после ) монтировании компонента
// * useLayoutEffect запускается ( перед ) отрисовкой компонента можно использовать и его
  useLayoutEffect(() => {
   const getSession = async () => {
    // *Когда нужно управлять загрузку компонента, её квлючатель и выключатель нужно делать в самом  компонете если одно есть а другое нет то может быть не корректная работа
     dispatch(logOut(true))

    const {
      data: {session}
    } = await supabase.auth.getSession()
    dispatch(logOut(false))
    setIsAuthenticated(!!session)
    
    console.log("Insede Effect isLoading: ", isLoading)
    console.log("Session: ", !!session)
    console.log("Session: ", session)
    console.log("setIsAuthenticated: ", isAuthenticated)
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
