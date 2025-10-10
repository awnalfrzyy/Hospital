import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLayout from './components/layout/app-layout';

import './styles/global.css'
import RootNavigator from "./navigator/RootNavigator";
import HomeScreen from "./screen/app/HomeScreen";
import TabNavigator from "./components/ui/Button-tab";



export default function App() {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <AppLayout>
          <TabNavigator />
        </AppLayout>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};
