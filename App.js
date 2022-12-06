import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/navigation';
// aws amplify
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
//authentication
import { withAuthenticator } from 'aws-amplify-react-native';
// we need to connect amplify and config together


//configure project connect with our backend
Amplify.configure(config)

function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);