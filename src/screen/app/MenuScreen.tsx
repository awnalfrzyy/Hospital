import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../../components/ui/Card";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import DoctorIcon from '../../../assets/menu-board.svg';
import ArticleIcon from '../../../assets/message-favorite.svg';
import Scan from '../../../assets/scan.svg';
import HospitalIcon from '../../../assets/building-3.svg';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "../../navigator/Menu-navigator";

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

type NavigationProps = NativeStackNavigationProp<MenuStackParamList, ('AWQ')>

export default function MenuScreen() {

    const navigation = useNavigation<NavigationProps>();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-4">
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}