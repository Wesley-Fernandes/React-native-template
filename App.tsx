import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './routes/Homepage';
import Searchpage from './routes/Searchpage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Homepage} />
        <Tab.Screen name="Procurar" component={Searchpage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}