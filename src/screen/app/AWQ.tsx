import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { ChevronLeft, Stethoscope } from "lucide-react-native";
import Header from "../../components/ui/header";
import TextArea from "../../components/ui/Text-area";
import Button from "../../components/ui/Button";
import clsx from "clsx";

export default function AppointmentWithQR() {
    const navigation = useNavigation();
    const [bio, setBio] = useState("");
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState<number | null>(null);

    const specialties = [
        { id: 1, title: "Ear, Nose & Throat" },
        { id: 2, title: "Cardiology" },
        { id: 3, title: "Dermatology" },
        { id: 4, title: "Pediatrics" },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white px-5">
            <View
                style={{
                    position: "absolute",
                    top: insets.top,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    backgroundColor: "white",
                }}
                className=" px-5"
            >
                <Header
                    title="Book an Appointment"
                    leftIcon={
                        <View className=" rounded-full bg-transparent">
                            <ChevronLeft size={34} color="#000" />
                        </View>
                    }
                    onPressLeft={() => navigation.goBack()}
                />
            </View>

            <ScrollView

                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom,
                    paddingTop: insets.top + 30,
                }}
            >

                <View className="mb-4 mt-5">
                    <Text className="text-3xl font-bold text-gray-900 mb-1">
                        Medical Specialties
                    </Text>
                    <Text className="text-gray-500">
                        Wide selection of doctor's specialties
                    </Text>
                </View>

                <TextArea
                    value={bio}
                    onChangeText={setBio}
                    placeholder="isi nama kamu"
                    placeholderColor="#9CA3AF"
                    className="mb-6"
                />


                <FlatList
                    data={specialties}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item.id)}
                            activeOpacity={0.8}
                            className={clsx(
                                "flex-row items-center justify-between p-4 mb-3 rounded-2xl border",
                                selected === item.id
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 bg-white"
                            )}
                        >
                            <View className="flex-row items-center gap-3">
                                <View
                                    className={clsx(
                                        "p-3 rounded-full",
                                        selected === item.id ? "bg-blue-500" : "bg-gray-100"
                                    )}
                                >
                                    <Stethoscope
                                        size={22}
                                        color={selected === item.id ? "#fff" : "#254EDB"}
                                    />
                                </View>
                                <Text
                                    className={clsx(
                                        "text-lg font-semibold",
                                        selected === item.id ? "text-blue-600" : "text-gray-800"
                                    )}
                                >
                                    {item.title}
                                </Text>
                            </View>

                            <View
                                className={clsx(
                                    "w-5 h-5 rounded-full border-2",
                                    selected === item.id
                                        ? "border-blue-500 bg-blue-500"
                                        : "border-gray-300 bg-white"
                                )}
                            />
                        </TouchableOpacity>
                    )}
                />
                <View className="mt-6 py2">
                    <Text>Symptoms</Text>
                    <TextArea
                        value={bio}
                        onChangeText={setBio}
                        placeholder="Ceritain tentang dirimu..."
                        placeholderColor="#9CA3AF"
                        maxLength={200}
                        className="mb-6 mt-2"
                    />
                </View>


                <Button
                    variant="primary"
                    className="mt-4"
                    onPress={() =>
                        console.log(
                            "Selected:",
                            selected
                                ? specialties.find((s) => s.id === selected)?.title
                                : "Belum pilih"
                        )
                    }
                >
                    Konfirmasi
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
