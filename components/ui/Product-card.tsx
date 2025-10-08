import { View, Text } from "react-native";
import clsx from "clsx";

interface CardProps {
    title: string;
    type: string;
    image: React.ReactNode;
    className?: string;
}

export default function ProductCard({ title, type, image, className }: CardProps) {
    return (
        <View
            className={clsx(
                "bg-white rounded-xl p-4 shadow-md flex items-center",
                className
            )}
        >
            <View className="mb-3">{image}</View>
            <Text className="text-lg font-bold text-gray-800 mb-1">{title}</Text>
            <Text className="text-sm text-neutral-400">{type}</Text>
        </View>
    );
}
