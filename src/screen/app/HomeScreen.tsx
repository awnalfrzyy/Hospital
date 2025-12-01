import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions
} from 'react-native';
import SearchInput from '../../components/ui/Search-input';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Bell, ChevronLeft, ChevronRight, Filter } from 'lucide-react-native';
import Promo1 from '../../../assets/Promotion Card.svg';
import Promo2 from '../../../assets/Promotion Card(1).svg';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "../../navigator/Home-Navigator";
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import CardMenu from '../../features/menu/components/card-menu';
import menuData from '../../features/menu/local-dummy/data-menu';
interface HomeScreenProps {
    navigations: any;
    featuredMenus?: number[];
    title: string;
}


type NavigationProps = NativeStackNavigationProp<HomeStackParamList, 'Home'>;


const HomeScreen = ({ navigations,
    featuredMenus = [1, 2 , 3, 4], // Default value
    title = "Featured Services" }: HomeScreenProps) => {

    const [search, setSearch] = useState('');
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProps>();
    const menusToShow = featuredMenus && featuredMenus.length > 0
    ? featuredMenus.map(i => menuData[i]).filter(Boolean)
    : menuData.slice(startIndex);



    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];

    const promotions = [Promo1, Promo2];

    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                className="px-5 pt-0"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 1,
                    flexGrow: 1,
                }}
            >
                <View className="flex-row justify-between items-center mb-6 mt-2">
                    <View>
                        <Text className="text-4xl font-extrabold text-[#1E1E1E]">
                            Hi, Awin!
                        </Text>
                        <Text className="text-sm text-neutral-300 ">
                            I hope you are always in good condition
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}
                        className="w-14 h-14 rounded-full bg-[#f4f4f4] flex items-center justify-center">
                        <Bell size={26} color="#254EDB" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center w-full gap-3">
                    <View className="flex-1">
                        <SearchInput
                            value={search}
                            onChangeText={setSearch}
                            onClear={() => setSearch('')}
                            placeholder="Cari dokter atau layanan..."
                        />
                    </View>

                    <TouchableOpacity className="py-4 px-4 rounded-2xl bg-[#f4f4f4] flex items-center justify-center">
                        <Filter size={24} color="#254EDB" />
                    </TouchableOpacity>
                </View>



                {/* Rekomendasi */}
                <View className="mt-8">
                    <Text className="text-lg font-semibold text-[#1E1E1E] mb-4">
                        Menu yang sering dikunjungi
                    </Text>

                    <View className="flex-1 p-0">
                        {/* <Text className="text-2xl font-bold mb-4">{title}</Text> */}
                        <View className="flex-row flex-wrap justify-between">
                            {menusToShow.map((item) => (
                                <CardMenu
                                    key={item.id}
                                    item={item}
                                    navigation={navigation}
                                />
                            ))}
                        </View>
                    </View>
                    <Card
                        onPress={() => navigation.navigate("Menu")}
                        className="flex-row items-center px-2 py-5 bg-blue-100 rounded-2xl justify-end "
                    >
                        <Text className="ml-1 text-black font-medium">Lihat lebih banyak</Text>
                        <ChevronRight size={16} color="black" />
                    </Card>

                </View>

                {/* Promo Section */}
                <View className="mt-2 mb-5">
                    <Text className="text-lg font-semibold text-[#1E1E1E] mb-3">
                        Today's Special Promo
                    </Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={360}
                        decelerationRate="fast"
                        className="flex-row"
                    >
                        {promotions.map((PromoSvg, index) => (
                            <View key={index} className="mr-4">
                                <PromoSvg width={350} height={140} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View className='mt-0 mb-10'>
                    <Text className='text-lg font-semibold text-[#1E1E1E] mb-3'>
                        How to use
                    </Text>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        // contentContainerStyle={{ paddingHorizontal: 0 }}
                        renderItem={({ item }) => (
                            <View className="w-60 h-60 bg-neutral-400 rounded-2xl mr-3" />
                        )}
                    />
                </View>
                <View className='w-full h-40 bg-neutral-400 rounded-2xl p-3 justify-center'>
                    <View className='flex flex-col gap-2 w-[60%]'>
                        <Text className='text-[14px] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                        <Button
                            variant='primary'
                            className=''>
                            <Text>pusat bantuan</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;