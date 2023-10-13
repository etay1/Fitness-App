import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivateRoute =  ({ supabase }) => {
   
     const [error, setError] = useState(null);
    
    useEffect(() => {
        const checkUser = async () => {
            const user = await supabase.auth.getUser();
            setError(user.error != null);
        };

        checkUser();
    }, [supabase]);

    console.log(error);



    if (error) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
    }

export default PrivateRoute