import Card from "./ui/Card";
import { TouchableOpacity, Text, View } from 'react-native';
import CardDetail from "./ui/Card-detail";
import { useState } from "react";
import { CornerUpLeft, EllipsisVertical, ChevronDown } from "lucide-react-native";
import React from "react";

interface ComponentsParentProps {
    image: string;
    title: string;
    desc: string;
    from: string;
    to: string;
    date: string;
    onReply?: () => void;
    onOptions?: () => void;
}

export default function CardNotification({
    image,
    title,
    desc,
    from,
    to,
    date,
    onReply,
    onOptions
}: ComponentsParentProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    // Handle profile image long press
    const handleProfileLongPress = () => {
        console.log("Profile long pressed");
        // Add your profile long press logic here
        // Example: show profile options, navigate to profile, etc.
    };

    // Handle notification press
    const handleNotificationPress = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    // Handle chevron down press to toggle card detail
    const handleChevronPress = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card
            onLongPress={handleProfileLongPress}
            className="flex-1 py-4 px-3 bg-white rounded-xl shadow-sm border border-neutral-200"
        >
            {/* Main Notification Content */}
            <TouchableOpacity
                onPress={handleNotificationPress}
                activeOpacity={0.7}
                className="flex-row justify-between items-start"
            >
                {/* Left Section - Profile and Content */}
                <View className="flex-row gap-3 flex-1">
                    {/* Profile Image with Long Press */}
                    <TouchableOpacity
                        onLongPress={handleProfileLongPress}
                        className="rounded-full w-12 h-12 bg-neutral-300 justify-center items-center"
                    >
                        <Text className="text-neutral-600 font-medium">
                            {image || "👤"}
                        </Text>
                    </TouchableOpacity>

                    {/* Text Content */}
                    <View className="flex-col gap-1 flex-1">
                        <Text className="text-lg font-semibold text-neutral-800">
                            {title}
                        </Text>
                        <Text className="text-sm font-medium text-neutral-400">
                            {desc}
                        </Text>

                        {/* "Kepada Saya" section with Chevron */}
                        <View className="flex-row items-center gap-1 mt-1">
                            <Text className="text-xs text-neutral-500">Kepada Saya</Text>
                            <TouchableOpacity
                                onPress={handleChevronPress}
                                className="p-1"
                            >
                                <ChevronDown
                                    size={14}
                                    color="#6B7280"
                                    style={{
                                        transform: [{ rotate: isExpanded ? '180deg' : '0deg' }]
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Right Section - Action Buttons */}
                <View className="flex-row gap-1">
                    <TouchableOpacity
                        onPress={onReply}
                        className="justify-center items-center p-2 rounded-full bg-neutral-100"
                    >
                        <CornerUpLeft size={18} color="#374151" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onOptions}
                        className="justify-center items-center p-2 rounded-full bg-neutral-100"
                    >
                        <EllipsisVertical size={18} color="#374151" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            {/* Expandable Card Detail */}
            {isExpanded && (
                <View className="mt-3 ml-12">
                    <CardDetail from={from} to={to} date={date} />
                </View>
            )}

            {/* Full Notification Expanded View */}
            {isNotificationOpen && (
                <View className="mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-300">
                    <Text className="text-sm font-medium text-neutral-700 mb-2">
                        Notification Details:
                    </Text>
                    <Text className="text-sm text-neutral-600">
                        {desc}
                    </Text>
                    <Text className="text-xs text-neutral-500 mt-2">
                        Tap to close
                    </Text>
                </View>
            )}
        </Card>
    );
}