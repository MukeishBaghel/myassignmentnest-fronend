import Routers from './Routers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isTokenExpired from './constants/Token.expire';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/slices/user.slice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isTokenExpired()) {
      dispatch(logOut())
      toast.info("Session expired")
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