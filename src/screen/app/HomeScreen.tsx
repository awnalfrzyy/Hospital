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
import DoctorIcon from '../../../assets/menu-board.svg';
import ArticleIcon from '../../../assets/message-favorite.svg';
import Scan from '../../../assets/scan.svg';
import HospitalIcon from '../../../assets/building-3.svg';
import Promo1 from '../../../assets/Promotion Card.svg';
import Promo2 from '../../../assets/Promotion Card(1).svg';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "../../navigator/Home-Navigator";
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';


type NavigationProps = NativeStackNavigationProp<HomeStackParamList, 'Home'>;


const HomeScreen = () => {
    const [search, setSearch] = useState('');
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProps>();

    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];


    const recommendations = [
        {
            id: 1,
            title: 'Book an Appointment',
            desc: 'Find a doctor or specialist',
            bg: '#C6D4F1',
            Icon: DoctorIcon,
            iconColor: '#A0B6EA',
            route: 'BAA',
        },
        {
            id: 2,
            title: 'Nearby Hospitals',
            desc: 'Locate clinics near you',
            bg: '#FFF3B0',
            Icon: HospitalIcon,
            iconColor: '#FFE066',
            route: 'BAA',
        },
        {
            id: 3,
            title: 'Medicine Reminder',
            desc: 'Never miss a dose again',
            bg: '#FDE2E4',
            Icon: ArticleIcon,
            iconColor: '#FAC7CFFF',
            route: 'BAA',

        },

        {
            id: 4,
            title: 'other menus',
            desc: 'See more menus for those of you who need them',
            bg: '#D3F8DF',
            Icon: Scan,
            iconColor: '#AAF0C4',
            route: 'AWQ',
        },
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

                    <View className="flex flex-row flex-wrap justify-between">
                        {recommendations.map((item) => {
                            const IconSvg = item.Icon;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.9}
                                    className="w-[48%] h-[180px] rounded-2xl mb-4 p-5"
                                    style={{ backgroundColor: item.bg }}
                                    onPress={() => navigation.navigate(item.route as never)}
                                >
                                    <View className="w-14 h-14 mb-4 items-center justify-center rounded-xl"
                                        style={{ backgroundColor: item.iconColor }}>
                                        <IconSvg width={34} height={34} />
                                    </View>
                                    <Text className="font-bold text-[16px] text-[#1E1E1E] mb-1">
                                        {item.title}
                                    </Text>
                                    <Text className="text-sm text-[#6B7280]">{item.desc}</Text>
                                </TouchableOpacity>
                            );
                        })}
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