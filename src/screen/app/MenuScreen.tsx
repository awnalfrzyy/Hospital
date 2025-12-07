import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MenuStackParamList } from "../../navigator/Menu-navigator";
import CardMenu from "../../features/menu/components/card-menu";
import menuData from "../../features/menu/local-dummy/data-menu";
import HeaderBar from "../../components/headerbar";


export default function MenuScreen() {

    const startIndex = 1;
    const menusToShow = menuData.slice(startIndex);
    const navigation = useNavigation<NativeStackNavigationProp<MenuStackParamList, 'AWQ'>>();
    // const menusToShow = featuredMenus.length > 0
    //     ? menuData.filter(item => featuredMenus.includes(item.id))
    //     : menuData;


    return (
        <>
            <HeaderBar
                title="Layanan Kesehatan"
                onPress={() => navigation.goBack()}
            />
            <SafeAreaView className="flex-1 bg-white">
                <FlatList
                    data={menusToShow}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ padding: 16, paddingTop: 8 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', }}
                    renderItem={({ item }) => (
                        <CardMenu item={item} navigation={navigation} />
                    )}
                />
            </SafeAreaView>
        </>
    );
}