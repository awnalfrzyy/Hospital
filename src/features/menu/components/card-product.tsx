import Card from "../../../components/ui/Card";
import { Image, Text, View } from 'react-native';
import React from "react";
import { StatusHelper } from '../../../helper/status-helper';

interface CardProductComponentsProps {
    image: string;
    title: string;
    type: string;
    status: boolean;
    onPress: () => void;
}

export default function CardProduct({
    image,
    title,
    type,
    status,
    onPress
}: CardProductComponentsProps) {
    // Gunakan StatusHelper untuk mendapatkan warna dan teks status
    const statusColor = StatusHelper.getStatusColor(status);
    const statusText = StatusHelper.getDisplayText(status);
    const statusVariant = StatusHelper.getStatusVariant(status);

    return (
        <Card
            className="items-center flex flex-col bg-white border-none shadow-none"
            onPress={onPress}
        >
            <View className="item-center">
                <Image
                    source={{ uri: image }}
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
            </View>
            <View className="flex flex-col gap-2 items-start justify-center mt-2">
                <Text className="text-lg font-semibold">{title}</Text>
                <Text className="text-sm font-medium text-neutral-500">{type}</Text>
                <View className="flex flex-row items-center gap-2">
                    <View
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: statusColor }}
                    />
                    <Text className="text-sm font-medium">{statusText}</Text>
                </View>
            </View>
        </Card>
    );
}