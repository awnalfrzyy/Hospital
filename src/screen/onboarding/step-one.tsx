import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonChoice from '../../features/onboarding/components/button-choice';
import type { OnboardingStackParamList } from '../../navigator/Onboarding-navigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { height } = Dimensions.get('window');

type StepOneNavigationProp = NativeStackNavigationProp<
    OnboardingStackParamList,
    'StepOne'
>;

interface StepOneProps {
    navigation: StepOneNavigationProp;
}

export default function StepOne({ navigation }: StepOneProps) {
    return (
        <SafeAreaView className="flex-1 bg-white">

            <View style={{ height: height * 0.6 }} className="relative overflow-hidden">
                <Image
                    source={require('../../../assets/dokter.jpg')}
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

                <View className="mb-6">
                    <Text className="text-4xl font-extrabold text-gray-900 mb-5">
                        Selamat Datang{'\n'}di MedCare!
                    </Text>

                    <Text className="text-gray-500 text-base leading-7 font-medium">
                        Kami akan membantu Anda menjadwalkan janji temu...
                    </Text>
                </View>

                <View className="flex-1 justify-end ">
                    <ButtonChoice
                        onSkip={() => navigation.navigate("StepTwo")}
                        onNext={() => navigation.navigate("StepTwo")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
