import { FC } from "react";
import { useAuth } from '../hooks/useAuth';
import { Navigate } from "react-router-dom";

interface publicRoutesProps {
    children: React.ReactElement;
}
const PublicRoutes:  FC<publicRoutesProps> = ({ children }) => {
    const { user } = useAuth();
    
    
    if(user) {
        return <Navigate to='/' replace={true} />;
    }

    return children;
};

export default PublicRoutes;