import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyContacts from './screens/MyContacts';
import CreateContact from './screens/CreateContact';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyContacts'>
        <Stack.Screen name="MyContacts" options={{
          headerShown: false,
        }} component={MyContacts} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen name="Profile" component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};