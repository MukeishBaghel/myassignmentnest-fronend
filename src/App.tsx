import Routers from './Routers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isTokenExpired from './constants/Token.expire';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/slices/user.slice';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isTokenExpired()) {
      dispatch(logOut())
      toast.info("Session expired")
      navigate('/')
    }
  }, [])
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
        <Routers />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          limit={1}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Slide}
        />

      </GoogleOAuthProvider >
    </>
  )
}

export default App