import { Navigate, Outlet } from "react-router-dom";


const isAuthenticate = ()=>{
    return localStorage.getItem("token");
}

const ProtectedRoute = ()=>{
    console.log("isAuthenticate() ",isAuthenticate())
    return isAuthenticate() ? <Outlet/> :  <Navigate to="/login" />

}

export default ProtectedRoute;