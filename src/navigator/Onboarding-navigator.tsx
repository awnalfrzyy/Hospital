import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StepOne from "../screen/onboarding/step-one";
import StepTwo from "../screen/onboarding/step-two";
import StepThree from "../screen/onboarding/step-three";
import FristPage from "../screen/auth/firstpage";

export type OnboardingStackParamList = {
    StepOne: undefined;
    StepTwo: undefined;
    StepThree: undefined;
    FristPage: undefined;
};


const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator({ onFinish }: { onFinish: () => void }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StepOne" component={StepOne} />
            <Stack.Screen name="StepTwo" component={StepTwo} />
            <Stack.Screen name="StepThree" component={StepThree} />
            <Stack.Screen name="FristPage">
                {(props) => <FristPage {...props} onFinish={onFinish} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}
