import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { OnboardingStackParamList } from '../../navigator/Onboarding-navigator';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<OnboardingStackParamList, 'StepThree'>;

export default function StepThree() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View style={{ height: height * 0.6 }} className="relative overflow-hidden">
                <Image
                    source={require('../../../assets/pincalender.jpg')}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>

            <View className="flex-1 bg-white -mt-10 shadow-2xl px-8 pt-10 pb-12">
                <View className="flex-row mb-10 justify-start gap-2 items-center">
                    <View className="w-14 h-1 rounded-sm bg-gray-300 " />
                    <View className="w-14 h-1 rounded-sm bg-gray-300" />
                    <View className="w-14 h-1 rounded-sm bg-blue-600 shadow-lg" />
                </View>

                <View className="-mb-3">
                    <Text className="text-4xl font-extrabold text-gray-900 mb-5 text-start">
                        Jadwalkan Janji Pertama Anda
                    </Text>
                    <Text className="text-gray-500 text-base leading-7 text-start font-medium">
                        Pilih waktu dan tanggal yang tepat untuk bertemu dokter pilihan Anda.
                        Mulailah perjalanan Anda menuju kesehatan yang lebih baik!
                    </Text>
                </View>

                <View className="flex-row gap-5 top-16 items-end space-x-4">
                    <Button
                        variant="secondary"
                        onPress={() => navigation.navigate('FristPage' as never)}
                        className="flex-1"
                    >
                        Lewati Intro
                    </Button>

                    <Button
                        variant="primary"
                        onPress={() => navigation.navigate('StepThree' as never)}
                        className="flex-1"
                    >
                        Lanjutkan
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    );
}
