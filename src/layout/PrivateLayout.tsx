import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

 

const PrivateLayout = () => {
    const isAuthenticated = true;
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated){
            navigate(-1);
        }
    }, [isAuthenticated, navigate])
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default PrivateLayout;