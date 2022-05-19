import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';
import auth from './firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    if (!user) {
       return navigate('/login')
    }
    if (loading) {
        return <p>loding...</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }
    else {
        return children
    }    
};

export default RequireAuth;