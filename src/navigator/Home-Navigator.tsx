import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookAnAppointment from "../screen/app/BAA";
import AppointmentWithQR from "../screen/app/AWQ";
import HomeScreen from "../screen/app/HomeScreen";
import NotificationScreen from "../screen/app/NotificationScreen";
import MenuScreen from "../screen/app/MenuScreen";
import { useNavigation } from "@react-navigation/native";

export type HomeStackParamList = {
    Home: undefined;
    BAA: undefined;
    AWQ: undefined;
    Notification: undefined;
    Menu: undefined;
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        const unsubscribe = navigation.addListener("state", (e) => {
            const route = e.data?.state?.routes?.[e.data.state.index];
            const currentRoute = route?.name;

            // Sembunyiin tab bar pas masuk ke BookAnAppointment
            navigation.getParent()?.setOptions({
                tabBarStyle:
                    currentRoute === "BAA" || currentRoute === "Menu"
                        ? { display: "none" }
                        : { position: "absolute", backgroundColor: "#fff", height: 60 },

            });
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BAA" component={BookAnAppointment} />
            <Stack.Screen name="AWQ" component={AppointmentWithQR} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
    );
}
