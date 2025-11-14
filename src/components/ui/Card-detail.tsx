import { View, Text } from "react-native";

interface ComponentsProps {
    from: string;
    to: string;
    date: string;
}

export default function CardDetail({ from, to, date }: ComponentsProps) {
    return (
        <View className="w-4/5 py-5 px-4 flex flex-col gap-3 bg-neutral-500 rounded-xl shadow-lg border border-neutral-400">
            <Text className="text-lg font-semibold text-neutral-800">Delivery Details</Text>
            <View className="flex flex-col gap-2">
                <Text className="text-base text-neutral-700">
                    <Text className="font-medium">From:</Text> {from}
                </Text>
                <Text className="text-base text-neutral-700">
                    <Text className="font-medium">To:</Text> {to}
                </Text>
                <Text className="text-base text-neutral-700">
                    <Text className="font-medium">Date:</Text> {date}
                </Text>
            </View>
        </View>
    );
}