import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchInput from '../../components/ui/Search-input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell } from 'lucide-react-native';

const HomeScreen = () => {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-white px-5 pt-6">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <View>
                    <Text className="text-4xl font-extrabold text-[#1E1E1E]">
                        Hi, Awin!
                    </Text>
                    <Text className="text-[14px] text-[#6B7280]">
                        May you always be in good condition
                    </Text>
                </View>

                <TouchableOpacity className="w-14 h-14 rounded-full bg-[#F4F4F4] flex items-center justify-center">
                    <Bell size={26} color="#254EDB" />
                </TouchableOpacity>
            </View>

            <SearchInput
                value={search}
                onChangeText={setSearch}
                onClear={() => setSearch('')}
                placeholder="Cari dokter, rumah sakit, atau layanan..."
            />

            <View className="mt-8">
                <Text className="text-lg font-semibold text-[#1E1E1E]">
                    Rekomendasi untuk kamu
                </Text>
                {/* nanti isi card list atau section di sini */}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
