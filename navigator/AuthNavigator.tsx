import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screen/auth/register';
import FristPage from '../screen/auth/firstpage';

export type AuthStackParamList = {
    Register: undefined;
    FristPage: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="FristPage" component={FristPage} />
        </Stack.Navigator>
    )
};
