import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Onboarding-navigator';
import AuthNavigator from './AuthNavigator';
import TabNavigator from '../components/ui/Button-tab';
import HomeScreen from '../screen/app/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootNavigator() {
    const isLoggedIn = false; // nanti ganti pake context/state auth lo

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
