import { View, TouchableOpacity, Text, processColor } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ChevronLeft, EllipsisVertical, Trash, Star } from 'lucide-react-native'


interface ComponentsParentProps {
    title: string;
    text: string;
    user: string;
}


export default function ViewNotification({ title, text, user }: ComponentsParentProps) {

    const [filled, setFilled] = useState(false)
    const toggleStar = () => {
        setFilled(!filled);
    };

    return (
        <SafeAreaView className='flex-1'>

            {/* tabs */}
            <View className='flex flex-row justify-between items-center'>
                <ChevronLeft size={24} color="black" />
                <View>
                    <Trash size={24} color="black" />
                    <EllipsisVertical size={24} color="black" />
                </View>
            </View>
            <View className='flex-col flex items-start'>
                <View className=''>
                    <Text>
                        {title}
                        <View className='bg-orange-200 px-3 py-2 justify-center items-center'>
                            <Text className=''>
                                Kontak Masuk
                            </Text>
                        </View>
                    </Text>
                    <TouchableOpacity
                        onPress={toggleStar}
                        className='justify-center items-center py-2 px-2 bg-transparent'>
                        <Star
                            size={20}
                            color={filled ? 'yellow' : 'gray'}
                            fill={filled ? 'yellow' : 'none'}
                        />
                    </TouchableOpacity>
                </View>
                <View className=''>

                </View>
            </View>
        </SafeAreaView>
    )
};
