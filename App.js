import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/navigation';
export default function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
