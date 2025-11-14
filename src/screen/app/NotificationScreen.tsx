import CardNotification from "../../components/Card-notification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen() {
    return (
        <SafeAreaView className="flex-1">
            <CardNotification
                image="U"
                title="User Name"
                desc="You have a new delivery notification"
                from="Warehouse A"
                to="Your Location"
                date="2024-01-15"
                onReply={() => console.log("Reply pressed")}
                onOptions={() => console.log("Options pressed")}
            />
            <CardNotification
                image="U"
                title="User Name"
                desc="You have a new delivery notification"
                from="Warehouse A"
                to="Your Location"
                date="2024-01-15"
                onReply={() => console.log("Reply pressed")}
                onOptions={() => console.log("Options pressed")}
            />     <CardNotification
                image="U"
                title="User Name"
                desc="You have a new delivery notification"
                from="Warehouse A"
                to="Your Location"
                date="2024-01-15"
                onReply={() => console.log("Reply pressed")}
                onOptions={() => console.log("Options pressed")}
            />
        </SafeAreaView>

    )
};
