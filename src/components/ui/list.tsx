import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import Avatar from "./avatar";

interface ListComponentsProps {
    image: string;
    title: string;
    subtitle: string;
    onPress: () => void;
    onLongPress: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
}

export default function List({
    image,
    title,
    subtitle,
    onLongPress,
    onPress,
    className,
    style,
}: ListComponentsProps) {
    return (
        <TouchableOpacity
            className=""
            style={style}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Avatar size="md" image={image} />
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </TouchableOpacity>
    )
}