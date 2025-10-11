import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1">{children}</View>
        </SafeAreaView>
    );
}
