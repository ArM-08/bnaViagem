import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}) => {

    const auth = useAuth()

    if(!auth.email){
        return <Navigate to="/login" />
    }
    return  children;


}