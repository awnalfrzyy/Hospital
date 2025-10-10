import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepOne from '../screen/onboarding/step-one';
import StepTwo from '../screen/onboarding/step-two';
import StepThree from '../screen/onboarding/step-three';
import FristPage from '../screen/auth/firstpage';
import HomeScreen from '../screen/app/HomeScreen';

export type RootStackParamList = {
    StepOne: undefined;
    StepTwo: undefined;
    StepThree: undefined;
    FristPage: undefined;
    HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StepOne" component={StepOne} />
            <Stack.Screen name="StepTwo" component={StepTwo} />
            <Stack.Screen name="StepThree" component={StepThree} />
            <Stack.Screen name="FristPage" component={FristPage} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}
