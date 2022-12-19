import React from 'react';
import { useAuth } from "../../Context/AuthProvider/useAuth"
import { Navigate } from 'react-router-dom';

export const ProtectedLayout = ({children}) => {

    const auth = useAuth()

    if(!auth.email){
        return <h1>nao tem acesso</h1>
                
    }
    return  children;


}