import React, { useMemo, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../../redux/slices/user.slice';
import isTokenExpired from '../../constants/Token.expire';
import { toast } from 'react-toastify';
import newlogo from '/assets/images/logo.jpg'


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

    console.log("first")
    useEffect(() => {

        if (isTokenExpired()) {
            dispatch(logOut())
            toast.info("Session Expired")
            navigate('/');
        }

    }, [decodedToken, navigate]);

    if (decodedToken && decodedToken.scope === "ADMIN") {
        return <>
            <nav className=' bg-primary shadow-Nav_box_Shadow py-2'>
                <div className='px-4 container lg:px-20  flex items-center justify-between'>
                    <Link to={'/'}><img src={newlogo} alt="assignmentHelper" className='w-36 h-12' /></Link>
                    <ul className='flex items-center justify-between gap-4 text-[#454545] text-lg xl:text-xl '>
                        <NavLink to={'/admin'} className={` duration-150 ease-in `}>Query</NavLink>
                        <NavLink to={'/admin/all-orders'} className={` duration-150 ease-in `}>All orders</NavLink>
                        <NavLink to={'/admin/all-payments'} className={` duration-150 ease-in `}>All payments</NavLink>
                    </ul>
                </div>
                {children}
            </nav>
        </>
    }

    return null;
}

export default AdminLayout;
