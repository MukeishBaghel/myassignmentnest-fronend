import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import isTokenExpired from '../../constants/Token.expire';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExpired()) {
      navigate('/login');
    }
  }, []);

  if (!isTokenExpired()) {
    return <>{children}</>;
  }


  return null
}

export default ProtectedRoute