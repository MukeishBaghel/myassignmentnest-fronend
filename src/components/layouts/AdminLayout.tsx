import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../redux/slices/user.slice';
import isTokenExpired from '../../constants/Token.expire';
import { toast } from 'react-toastify';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { token } = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const decodedToken: any = useMemo(() => {
        if (token) {
            try {
                return jwtDecode(token);
            } catch (error) {
                console.error("Invalid token:", error);
                return null;
            }
        }
        return null;
    }, [token]);

    useEffect(() => {
        if (!decodedToken || decodedToken.scope !== "ADMIN") {
            navigate('/');
        }
        else if (isTokenExpired()) {
            dispatch(logOut())
            toast.info("Session Expired")
            navigate('/');
        }
    }, [decodedToken, navigate]);

    if (decodedToken && decodedToken.scope === "ADMIN") {
        return <>{children}</>;
    }

    return null;
}

export default AdminLayout;
