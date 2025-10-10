import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // ✅ versi baru
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigator/Onboarding-navigator';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'StepOne'>;

export default function StepOne() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View style={{ height: height * 0.6 }} className="relative overflow-hidden">
                <Image
                    source={require('../../assets/dokter.jpg')}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>

            <View className="flex-1 bg-white -mt-10 shadow-2xl px-8 pt-10 pb-12">
                <View className="flex-row mb-10 justify-start gap-2 items-center">
                    <View className="w-14 h-1 rounded-sm bg-blue-600 shadow-lg" />
                    <View className="w-14 h-1 rounded-sm bg-gray-300" />
                    <View className="w-14 h-1 rounded-sm bg-gray-300" />
                </View>

                <View className="mb-14">
                    <Text className="text-4xl font-extrabold text-gray-900 mb-5 text-start">
                        Welcome to{'\n'}MedCare!
                    </Text>
                    <Text className="text-gray-500 text-base leading-7 text-start font-medium">
                        We will assist you in efficiently and easily scheduling appointments
                        with doctors. Let's get started on your healthcare journey!
                    </Text>
                </View>

                <View className="flex-row gap-5 items-center space-x-4">
                    <Button
                        variant="secondary"
                        onPress={() => navigation.navigate('FristPage' as never)}
                        className="flex-1"
                    >
                        Skip Intro
                    </Button>

                    <Button
                        variant="primary"
                        onPress={() => navigation.navigate('StepTwo' as never)}
                        className="flex-1"
                    >
                        Continue
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
