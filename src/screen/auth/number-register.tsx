import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native'
import FormNumberRegister from "../../components/form-number-register";
import Button from "../../components/ui/Button";

export default function Register() {
    return (
        <SafeAreaView className="flex-1 bg-white p-4 justify-between">

            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-900 mb-2">Register</Text>
                <Text className="text-gray-600 text-sm">
                    Please enter your number to continue your registration
                </Text>
            </View>
            <View className="mb-6">
                <Text className="text-gray-700 mb-2">Phone number</Text>
                <FormNumberRegister />
            </View>
            <View className="flex flex-col gap-4">
                <Button variant="primary">
                    Continue
                </Button>
                <Text className="text-center text-xs text-gray-400 leading-5 mt-2">
                    By signing up or logging in, I accept the app’s{" "}
                    <Text className="text-blue-500">Terms of Service</Text> and{" "}
                    <Text className="text-blue-500">Privacy Policy</Text>.
                </Text>
            </View>

        </SafeAreaView>
    );
}
