import Card from "./ui/Card";
import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import Avatar from "./ui/avatar";
import { ChevronLeft, X } from "lucide-react-native";
import { useRoute } from "@react-navigation/native";
import { useViewProfile } from "../hooks/useViewProfile";
import { useBackHandler } from "../hooks/useBackHandler";

interface ComponentsProps {
    resource: string;
    title: string;
    desc: string;
}

export default function Notif({ resource, title, desc }: ComponentsProps) {
    const navigation = useRoute();
    const {
        modalVisible,
        selectedImage,
        openModal,
        closeModal,
        handleOverlayPress,
        handleContentPress
    } = useViewProfile();

    // Handle Android back button
    useBackHandler(() => {
        if (modalVisible) {
            closeModal();
            return true; // Prevent default back behavior
        }
        return false;
    }, modalVisible);

    return (
        <>
            <Card className="flex flex-row gap-2 items-center py-3 px-1 bg-white border-2 border-neutral-500">
                <View className="flex-row items-center flex-1 gap-3">
                    {/* Avatar yang bisa di-click untuk preview */}
                    <TouchableOpacity onPress={() => openModal(resource)}>
                        <Avatar
                            image={resource}
                            size="md"
                        />
                    </TouchableOpacity>

                    <View className="flex-col flex-1">
                        <Text className="text-xl font-semibold text-black">{title}</Text>
                        <Text className="text-sm font-medium text-neutral-500">{desc}</Text>
                    </View>
                </View>

                <TouchableOpacity className="items-center justify-center">
                    <ChevronLeft width={24} color="black" />
                </TouchableOpacity>
            </Card>

            {/* Modal untuk preview gambar full screen */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)' }}
                    activeOpacity={1}
                    onPress={handleOverlayPress}
                >
                    <View className="flex-1 justify-center items-center">
                        {/* Content modal - click di sini tidak akan menutup modal */}
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={handleContentPress}
                            className="relative"
                        >
                            <Image
                                source={{ uri: selectedImage || '' }}
                                className="w-80 h-80 rounded-lg"
                                resizeMode="contain"
                            />

                            {/* Close button */}
                            <TouchableOpacity
                                onPress={closeModal}
                                className="absolute -top-10 -right-10 bg-gray-800 rounded-full p-2"
                            >
                                <X width={24} height={24} color="white" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
}