import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivateRoute =  ({ supabase }) => {
   
     const [error, setError] = useState(null);
     const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    useEffect(() => {
        const checkUser = async () => {
            const user = await supabase.auth.getUser();
            setError(user.error != null);
            setIsAuthenticated(true);
        };

        checkUser();
    }, [supabase]);

    console.log(error);


    if (!isAuthenticated) {
        return null;
    }
    if (error) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
    }

export default PrivateRoute