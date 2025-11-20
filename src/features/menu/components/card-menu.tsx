import Card from "../../../components/ui/Card";
import { View, Text } from 'react-native';
import { MenuItem } from '../local-dummy/data-menu';

interface CardMenuProps {
    item: MenuItem;
    navigation: any;
}

export default function CardMenu({ item, navigation }: CardMenuProps) {
    const IconSvg = item.Icon;

    return (
        <Card
            key={item.id}
            className="w-[48%] h-[180px] rounded-2xl mb-4 p-5"
            style={{ backgroundColor: item.bg }}
            onPress={() => navigation.navigate(item.route as never)}
        >
            <View
                className="w-14 h-14 mb-4 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.iconColor }}
            >
                <IconSvg width={34} height={34} />
            </View>
            <Text className="font-bold text-[16px] text-[#1E1E1E] mb-1">
                {item.title}
            </Text>
            <Text className="text-sm text-[#6B7280]">{item.desc}</Text>
        </Card>
    );
}