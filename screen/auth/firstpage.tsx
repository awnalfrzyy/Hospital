import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigator/AppNavigator';

const { height } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FristPage'>;

export default function FristPage() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Hero Section */}
            <View style={{ height: height * 0.55 }} className="relative overflow-hidden">
                <Image source={require('../../assets/dokter.jpg')}
                    className="w-full h-full" resizeMode="cover" />
            </View>

            {/* Content */}
            <View className="flex-1 bg-white -mt-8 rounded-t-3xl shadow-2xl px-8 pt-10 pb-8">
                {/* Title */}
                <View className="mb-10">
                    <Text className="text-4xl font-extrabold text-gray-900 mb-3">Si - Sehat</Text>
                    <Text className="text-gray-500 text-base leading-6">
                        Begin your journey to better health!
                    </Text>
                </View>

                {/* Buttons Section */}
                <View className="gap-4 mb-8">
                    <Button
                        variant="primary"
                        onPress={() => navigation.navigate('StepTwo' as never)}
                        className="w-full"
                    >
                        Skip Intro
                    </Button>

                    <Button
                        variant="sosial"
                        onPress={() => navigation.navigate('StepTwo' as never)}
                        className="w-full"
                    >
                        Sign in with Google
                    </Button>

                    <Button
                        variant="sosial"
                        onPress={() => navigation.navigate('StepTwo' as never)}
                        className="w-full"
                    >
                        Sign in with Apple
                    </Button>
                </View>

                {/* Footer Text */}
                <View className="mt-auto items-center">
                    <Text className="text-gray-500 text-sm mb-3">
                        Already have an account?{' '}
                        <Text className="text-blue-600 font-semibold">Sign In</Text>
                    </Text>

                    <Text className="text-gray-400 text-xs text-center leading-5">
                        By signing up or logging in, I accept the app’s{' '}
                        <Text className="text-blue-600 font-semibold">Terms of Service</Text> and{' '}
                        <Text className="text-blue-600 font-semibold">Privacy Policy</Text>.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
