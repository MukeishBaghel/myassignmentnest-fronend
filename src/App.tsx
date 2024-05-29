import Routers from './Routers';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
          limit={2}
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