import { FC } from "react";
import { useAuth } from '../hooks/useAuth';
import { Navigate } from "react-router-dom";

interface privateRoutesProps {
    children: React.ReactElement;
}
const PrivateRoutes:  FC<privateRoutesProps> = ({ children }) => {
    const { user } = useAuth();
    
    
    if(!user) {
        return <Navigate to='/SignUp' replace={true} />;
    }

    return children;
};

export default PrivateRoutes;