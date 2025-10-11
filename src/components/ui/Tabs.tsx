import clsx from "clsx";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useState } from "react";

type ButtonTabsProps = TouchableOpacityProps & {
    title: string;
    active?: boolean;
    variant?: 'primary' | 'secondary';
};

export default function Tabs({ tabs }: { tabs: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View className="flex-row bg-gray-100 rounded-lg overflow-hidden">
            {tabs.map((tab, index) => {
                const isActive = index === activeIndex;

                const buttonClasses = clsx(
                    "flex-1 py-2 items-center justify-center",
                    isActive ? "bg-blue-500" : "bg-transparent"
                );

                const textClasses = clsx(
                    "font-semibold",
                    isActive ? "text-white" : "text-gray-600"
                );

                return (
                    <TouchableOpacity
                        key={index}
                        className={buttonClasses}
                        onPress={() => setActiveIndex(index)}
                    >
                        <Text className={textClasses}>{tab}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
