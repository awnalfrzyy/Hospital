import Notif from "../../components/notif";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function NotificationScreen() {
    return (
        <SafeAreaView className="flex-1">
            <View className="justify-center flex-col flex gap-2 items-center px-3">
                <Notif
                    resource="J"
                    title="dsnadnmas"
                    desc="sdandakmdlas"
                />
                <Notif
                    resource="J"
                    title="dsnadnmas"
                    desc="sdandakmdlas"
                />
                <Notif
                    resource="J"
                    title="dsnadnmas"
                    desc="sdandakmdlas"
                />
            </View>
        </SafeAreaView>
    )
}