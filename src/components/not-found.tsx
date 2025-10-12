import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFound() {
    return (
        <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
            <View className="items-center">
                <Text className="text-6xl font-extrabold text-gray-900 mb-3">404</Text>
                <Text className="text-xl font-semibold text-gray-800 mb-2">
                    Page Not Found
                </Text>
                <Text className="text-gray-500 text-center mb-8 leading-5 text-sm w-80">
                    The page you’re looking for doesn’t exist or may have been moved.
                </Text>
            </View>
        </SafeAreaView>
    );
}
