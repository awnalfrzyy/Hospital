import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/ui/Search-input";
import HeaderBar from "../../components/headerbar";

export default function ChatDenganDokter() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* <HeaderBar title="Chat dengan Dokter" /> */}
            <View className="px-5 pt-4">
                <SearchInput placeholder="Search chat dengan dokter" />
            </View>
            <View className="rounded-xl bg-white p-3 shadow-md mx-3 my-3">
                <Text className="text-base font-semibold">Cari Dokter atau Spesialisasi</Text>
                <Text className="text-sm text-neutral-500 mb-3">Pilih Kategori yang tersedia sesuai kondisimu</Text>

                <FlatList
                    data={[
                        'Dokter umum',
                        'Spesialis Anak',
                        'Spesialis Kulit',
                        'Spesialis Penyakit Dalam',
                        'Spesialis THT',
                        'Spesialis Kandungan',
                        'Spesialis Paru',
                        'Psikiater',
                        'Lainnya',
                    ]}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'flex-start' }}
                    renderItem={({ item }) => (
                        <View className="w-1/3 items-center mb-4">
                            <TouchableOpacity className="rounded-full bg-neutral-300 w-20 h-20" />
                            <Text className="text-center mt-2 text-sm">{item}</Text>
                        </View>
                    )}
                />
            </View>

            <View className="mx-3 my-2">
                <Text className="text-base font-semibold">Peduli Kesehatan Mental</Text>
                <Text className="text-sm text-neutral-500 mb-3">Cari Profesional dengan keahlian yang sesuai</Text>

                <FlatList
                    data={['Stres', 'Gangguan Kecemasan', 'Depresi', 'Keluarga dan Hubungan', 'Trauma', 'Lainnya']}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'flex-start' }}
                    renderItem={({ item }) => (
                        <View className="w-1/3 items-center mb-4">
                            <TouchableOpacity className="rounded-full bg-neutral-300 w-20 h-20" />
                            <Text className="text-center mt-2 text-sm">{item}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}