import React from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

interface ButtomSheetRootComponentsProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    className?: string;
}

export default function ButtomSheet({
    children,
    style,
    className
}: ButtomSheetRootComponentsProps) {
    return (
        <View className="w-full px-4 bg-white rounded-t-3xl">
            <View className='w-14 h-1 rounded-full bg-neutral-400' />
            {children}
        </View>
    )
}