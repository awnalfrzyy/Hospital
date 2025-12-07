import { ChevronLeft } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HeaderBar({
    title,
    onPress,
}: {
    title: string;
    onPress: () => void;
}) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingTop: insets.top,
                backgroundColor: "white",
                borderBottomColor: "#e5e7eb",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 2,
            }}
            className="flex-row items-center px-3 py-1"
        >
            <TouchableOpacity onPress={onPress} className="p-1 mr-1">
                <ChevronLeft size={22} color="#374151" />
            </TouchableOpacity>

            <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-900 text-center">
                    {title}
                </Text>
            </View>

            <View className="w-8" />
        </View>
    );
}
