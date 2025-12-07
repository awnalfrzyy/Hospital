import { View, Text, } from "react-native";
import Button from "../../components/ui/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center bg-white">
                <View className=" rounded-full w-60 h-60 bg-gray-200" />
                <Text className="text-xl font-semibold text-gray-900 mt-6 mb-2">Riwayat Kosong</Text>
                <Text className="text-center text-gray-500 px-10 mb-6">
                    Anda belum memiliki riwayat janji temu. Jadwalkan janji temu pertama Anda sekarang!
                </Text>
                <Button
                    variant="primary"
                    onPress={() => { }}
                    className="px-8 py-3"
                >
                    Jadwalkan Janji Temu
                </Button>
            </View>
        </SafeAreaView>
    )
};

