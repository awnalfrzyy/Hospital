import RegisterLayout from "../../components/layout/register-layout";
import { SafeAreaView } from "react-native-safe-area-context";
import FormNumberRegister from "../../components/form-number-register";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from "../../navigator/AuthNavigator";

export default function Register() {
    return (
        <SafeAreaView>

            <FormNumberRegister />

        </SafeAreaView>
    )
};
