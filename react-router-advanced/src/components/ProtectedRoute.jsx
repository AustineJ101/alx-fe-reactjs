import { Navigate } from "react-router-dom";
import useAuth from "../store/Authentication";

function ProtectedRoute({children}){
    const isAuthenticated = useAuth(state => state.isAuthenticated);

    return isAuthenticated? children : <Navigate to="/"/>

}

export default ProtectedRoute;