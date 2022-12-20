import React from 'react';
import { useAuth } from "../../Context/AuthProvider/useAuth"


export const ProtectedLayout = ({children}) => {

    const auth = useAuth()

    if(!auth.email){
        return <h1>nao tem acesso</h1>
                
    }
    return  children;


}