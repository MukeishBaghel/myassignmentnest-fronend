import React, { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/slices/user.slice';
import isTokenExpired from '../../constants/Token.expire';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { token } = useSelector(selectCurrentUser);

    const decodedToken = useMemo(() => {
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
        if (!decodedToken || decodedToken.scope !== "ADMIN" || isTokenExpired()) {
            navigate('/');
        }
    }, [decodedToken, navigate]);

    if (decodedToken && decodedToken.scope === "ADMIN") {
        return <>{children}</>;
    }

    return null;
}

export default AdminLayout;
