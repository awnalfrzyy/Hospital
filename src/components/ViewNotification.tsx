import { View, TouchableOpacity, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ChevronLeft, EllipsisVertical, } from 'lucide-react-native'


interface ComponentsParentProps {
    title: string;
    text: string;
}


export default function ViewNotification() {
    return (
        <SafeAreaView className='flex-1'>

            {/* tabs */}
            <View className=''>
                <ChevronLeft size={24} color="black" />
            </View>
        </SafeAreaView>
    )
};
