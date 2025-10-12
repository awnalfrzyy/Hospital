import { View, Text, TouchableOpacity, FlatList } from "react-native";
import SearchInput from "../../components/ui/Search-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { Filter, ChevronRight, ChevronLeft } from "lucide-react-native";
import Header from "../../components/ui/header";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Spesialist = [
    {
        title: "Ear, Nose & Throat",
        description: "Wide selection of doctor's specialties",
    },
    {
        title: "Psychiatrist",
        description: "Wide selection of doctor's specialties",
    },
    {
        title: "Dentist",
        description: "Wide selection of doctor's specialties",
    },
];

export default function BookAnAppointment() {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-white px-4 pt-2">
            <Header
                title="Book an Appointment"
                leftIcon={<ChevronLeft size={34} color="#000" />}
                onPressLeft={() => navigation.goBack()}

            />
            <View className="mb-4 mt-5">
                <Text className="text-3xl font-bold text-gray-900 mb-1">
                    Medical Specialties
                </Text>
                <Text className="text-gray-500">
                    Wide selection of doctor's specialties
                </Text>
            </View>

            <View className="flex-row items-center gap-3 mb-5 mt-1">
                <View className="flex-1">
                    <SearchInput
                        value={search}
                        onChangeText={setSearch}
                        onClear={() => setSearch("")}
                        placeholder="Search doctor or service..."
                    />
                </View>
                <TouchableOpacity className="p-3 rounded-2xl bg-[#f4f4f4] items-center justify-center">
                    <Filter size={22} color="#254EDB" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={Spesialist}
                keyExtractor={(item) => item.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="flex-row justify-between items-center bg-[#f9f9f9] p-4 mb-3 rounded-2xl border border-gray-100"
                    >
                        <View className="flex-1">
                            <Text className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </Text>
                            <Text className="text-gray-500 text-sm">
                                {item.description}
                            </Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}
