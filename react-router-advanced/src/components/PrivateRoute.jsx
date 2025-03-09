import { Navigate } from "react-router-dom";
import useAuthStore from "./authStore"


function PrivateRoute({children}){
    const {isAuthenticated} = useAuthStore(state => state.isAuthenticated);
    return isAuthenticated? children: <Navigate to="/"/>

}

export default PrivateRoute;