import React from "react";
import { View, Text } from "react-native";

type LayoutProps = {
    children: React.ReactNode;
    title?: string;
    showFooter?: boolean;
};

export default function RegisterLayout({ children, title = "Clinic Sehat", showFooter = true }: LayoutProps) {
    return (
        <View className="flex-1 bg-white">
            {/* HEADER */}
            <View className="bg-blue-500 py-4 px-6">
                <Text className="text-white text-xl font-bold">{title}</Text>
            </View>

            {/* CONTENT */}
            <View className="flex-1 px-6 py-4">{children}</View>

            {/* FOOTER */}
            {showFooter && (
                <View className="border-t border-gray-200 py-4 items-center">
                    <Text className="text-gray-400 text-sm">© 2025 Clinic Sehat</Text>
                </View>
            )}
        </View>
    );
}
