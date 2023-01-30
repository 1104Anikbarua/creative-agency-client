import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const RequireAuth = (props) => {
    const { children } = props;
    const location = useLocation();

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (error) {
        console.log(error)
    }
    return children;
};

export default RequireAuth;