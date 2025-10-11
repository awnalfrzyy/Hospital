import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import clsx from "clsx";
import { LucideProps, ArrowLeft, Settings } from "lucide-react-native"; // contoh icon

interface HeaderProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    style?: ViewStyle;
}

export default function Header({
    title,
    leftIcon,
    rightIcon,
    className,
    onPressLeft,
    onPressRight,
    style,
}: HeaderProps) {
    return (
        <View
            className={clsx("flex-row items-center justify-between px-4 py-2 bg-white")}
            style={style}
        >
            {/* Left Icon */}
            {leftIcon ? (
                <TouchableOpacity onPress={onPressLeft}>
                    {leftIcon}
                </TouchableOpacity>
            ) : (
                <View style={{ width: 24 }} /> // placeholder biar text tetap di tengah
            )}

            {/* Title */}
            <Text className="text-lg font-bold text-center flex-1">{title}</Text>

            {/* Right Icon */}
            {rightIcon ? (
                <TouchableOpacity onPress={onPressRight}>
                    {rightIcon}
                </TouchableOpacity>
            ) : (
                <View style={{ width: 24 }} /> // placeholder biar text tetap di tengah
            )}
        </View>
    );
}
