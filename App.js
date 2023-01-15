import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/navigation';
// aws amplify
import { Amplify } from 'aws-amplify'

import config from './src/aws-exports'
//authentication
//this is we can check with the link https://docs.amplify.aws/start/q/integration/react-native/
import { withAuthenticator } from 'aws-amplify-react-native';
// we need to connect amplify and config together
//import Authcontext to handle api 
import BasketContextProvider from './src/contexts/BasketContext';
import AuthContextProvider from './src/contexts/AuthContext';

//configure project connect with our backend
// we add only this config
Amplify.configure({ ...config, Analytics: { disabled: true } })

function App() {

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
export default withAuthenticator(App); 