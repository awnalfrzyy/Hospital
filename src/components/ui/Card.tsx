import { TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import React from "react";

interface ComponentsProps {
    children: React.ReactNode;
    onPress?: () => void;
    onLongPress?: () => void;
    onFocus?: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
}

export default function Card({
    children,
    onPress,
    onFocus,
    onLongPress,
    className,
    style
}: ComponentsProps) {
    return (
        <TouchableOpacity
            className={className}
            style={style}
            onPress={onPress}
            onLongPress={onLongPress}
            onFocus={onFocus}
        >
            {children}
        </TouchableOpacity>
    );
}