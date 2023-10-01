
import { GoogleOAuthProvider } from '@react-oauth/google';

//import components
import Messenger from "./components/Messenger";

import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '751774424948-5d95v56ihat7b6d0c6npb9lmp3p4meku.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
