import { Navigate, Outlet } from "react-router-dom";


const isAuthenticate = ()=>{
    return localStorage.getItem("token");
}

const ProtectedRoute = ()=>{
    return isAuthenticate() ? <Outlet/> : Navigate('/login')

}

export default ProtectedRoute;