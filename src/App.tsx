import Routers from './Routers';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_KEY ||"208352236758-jrhfoq6pgbavamflkaiu5hijf1fbo7nb.apps.googleusercontent.com"}>
        <Routers />
      </GoogleOAuthProvider >
    </>
  )
}

export default App