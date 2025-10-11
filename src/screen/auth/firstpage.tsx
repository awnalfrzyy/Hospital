import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigator/RootNavigator";

const { height } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MainApp">;

export default function FristPage({ onFinish }: { onFinish: () => void }) {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* HEADER IMAGE */}
            <View style={{ height: height * 0.5 }} className="relative overflow-hidden">
                <Image
                    source={require("../../../assets/dokter2.jpg")}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>

            {/* CONTENT CARD */}
            <View className="flex-1 bg-white -mt-10 rounded-t-3xl shadow-2xl px-8 pt-10 pb-8">
                <View className="mb-12">
                    <Text className="text-4xl font-extrabold text-gray-900 mb-3">
                        Clinic Sehat
                    </Text>
                    <Text className="text-gray-500 text-base leading-7 font-medium">
                        Begin your journey to better health!
                    </Text>
                </View>

                <View className="flex-col gap-4 mb-6">
                    <Button
                        variant="primary"
                        onPress={onFinish}
                    >
                        Continue with Phone Number
                    </Button>

                    <Button variant="sosial" iconType="google">
                        Continue with Google
                    </Button>

                    <Button variant="sosial" iconType="apple">
                        Continue with Apple
                    </Button>
                </View>

                <View className="flex-row justify-center items-center mt-0 mb-6">
                    <Text className="text-gray-500 text-sm">Already have an account? </Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500 text-sm font-semibold">Sign In</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-center text-xs text-gray-400 leading-5 mt-auto">
                    By signing up or logging in, I accept the app’s{" "}
                    <Text className="text-blue-500">Terms of Service</Text> and{" "}
                    <Text className="text-blue-500">Privacy Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
}
