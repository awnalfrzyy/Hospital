import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import {
    CircleUserRound,
    LockKeyhole,
    Bell,
    Languages,
    Store,
    SunMoon,
    ArrowRight,
    ChevronRight
} from "lucide-react-native";
import React from "react";

type ProfileEntry =
    | { type: 'header'; title: string }
    | { type: 'item'; key: string; label: string; icon: React.ReactNode };

const profileData: ProfileEntry[] = [
    { type: 'header', title: 'Account' },
    { type: 'item', key: 'profile', label: 'Profile', icon: <CircleUserRound size={22} /> },
    { type: 'item', key: 'security', label: 'Security', icon: <LockKeyhole size={22} /> },
    { type: 'item', key: 'notification', label: 'Notification', icon: <Bell size={22} /> },
    { type: 'header', title: 'Preference' },
    { type: 'item', key: 'store', label: 'Store Settings', icon: <Store size={22} /> },
    { type: 'item', key: 'language', label: 'Language', icon: <Languages size={22} /> },
    { type: 'item', key: 'theme', label: 'Theme', icon: <SunMoon size={22} /> },
    { type: 'header', title: 'Support' },
    { type: 'item', key: 'help', label: 'Pusat Bantuan', icon: <ArrowRight size={22} /> },
];

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white px-4">
            <View className="mt-6 mb-3">
                <View className="flex-row items-center gap-3">
                    <View className="w-20 h-20 rounded-full bg-slate-400" />
                    <View>
                        <Text className="text-xl font-bold">username</Text>
                        <Text className="text-neutral-500">type your email</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={profileData}
                keyExtractor={(item) => (item.type === 'header' ? item.title : item.key)}
                renderItem={({ item }) => {
                    if (item.type === 'header') {
                        return (
                            <Text className="text-base font-semibold mt-4 mb-2">{item.title}</Text>
                        );
                    }

                    return <MenuItem label={item.label} icon={item.icon} />;
                }}
                ItemSeparatorComponent={() => <View className="h-2" />}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </SafeAreaView>
    );
}

function MenuItem({ label, icon }: { label: string; icon: React.ReactNode }) {
    return (
        <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl active:bg-neutral-200">
            <View className="flex-row items-center gap-3">
                {icon}
                <Text className="text-base">{label}</Text>
            </View>
            <View>
                <ChevronRight size={14} color="gray" />
            </View>
        </TouchableOpacity>
    );
}