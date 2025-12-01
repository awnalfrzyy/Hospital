import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "../../navigator/Menu-navigator";
import CardMenu from "../../features/menu/components/card-menu";
import menuData from "../../features/menu/local-dummy/data-menu";


// interface MenuScreenProps {
//     navigations: any;
//     // featuredMenus?: number[];
//     title: string;
// }

type NavigationProps = NativeStackNavigationProp<MenuStackParamList, ('AWQ')>

export default function MenuScreen({ navigations }:any) {

    const startIndex = 1;
    const menusToShow = menuData.slice(startIndex);
    const navigation = useNavigation<NavigationProps>();
    // const menusToShow = featuredMenus.length > 0
    //     ? menuData.filter(item => featuredMenus.includes(item.id))
    //     : menuData;


    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mt-8">

                    <View className="flex-1 p-4">
                        {/* <Text className="text-2xl font-bold mb-4">{title}</Text> */}
                        <View className="flex-row flex-wrap justify-between">
                            {menusToShow.map((item) => (
                                <CardMenu
                                    key={item.id}
                                    item={item}
                                    navigation={navigations}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}