import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppointmentWithQR from "../screen/app/AWQ";
import BookAnAppointment from "../screen/app/BAA";

export type MenuStackParamList = {
    AWQ: undefined;
    BAA: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParamList>();

export default function MenuNaigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="AWQ" component={AppointmentWithQR} />
            <Stack.Screen name="BAA" component={BookAnAppointment} />
        </Stack.Navigator>
    );
}