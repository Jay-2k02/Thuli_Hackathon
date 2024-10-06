// src/Components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(DataContext);

    // If the user is not authenticated, redirect them to the login page
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
