/**
 * Avatar Component
 * 
 * A reusable avatar component that supports images from URI, local assets, or text initials.
 * 
 * @param {string | number} image - Image source: 
 *    - string (URI): "https://example.com/avatar.jpg"
 *    - number (asset): require('./assets/avatar.png')
 *    - string (text): "John Doe" or "👤"
 * @param {function} onPress - Callback when avatar is pressed
 * @param {function} onLongPress - Callback when avatar is long pressed
 * @param {function} onRouter - Callback for navigation (prioritized over onPress)
 * @param {string} className - Additional Tailwind classes for styling
 * @param {ViewStyle} style - Additional React Native styles
 * @param {"sm" | "md" | "lg" | "xl"} size - Avatar size (default: "md")
 * 
 * USAGE EXAMPLES:
 * 
 * // URI Image
 * <Avatar 
 *   image="https://example.com/avatar.jpg"
 *   size="md"
 *   onPress={() => console.log('Pressed')}
 * />
 * 
 * // Local Asset
 * <Avatar 
 *   image={require('./assets/user.png')}
 *   size="lg"
 *   onLongPress={() => console.log('Long Pressed')}
 * />
 * 
 * // Text Initials
 * <Avatar 
 *   image="John Doe"
 *   size="sm"
 *   className="bg-blue-100"
 * />
 * 
 * // Emoji
 * <Avatar 
 *   image="👤"
 *   size="xl"
 *   onRouter={() => navigation.navigate('Profile')}
 * />
 * 
 * // With all props
 * <Avatar 
 *   image="https://example.com/photo.jpg"
 *   size="md"
 *   onPress={handlePress}
 *   onLongPress={handleLongPress}
 *   onRouter={handleNavigate}
 *   className="border-2 border-blue-500"
 *   style={{ shadowColor: '#000' }}
 * />
 */

import {
    TouchableOpacity,
    ViewStyle,
    StyleProp,
    Text,
    Image
} from "react-native";
import React from "react";

interface ComponentsProps {
    image: string | number;
    onPress?: () => void;
    onLongPress?: () => void;
    onRouter?: () => void;
    className?: string;
    style?: StyleProp<ViewStyle>;
    size?: "sm" | "md" | "lg" | "xl";
}

export default function Avatar({
    image,
    onPress,
    onLongPress,
    onRouter,
    className = "",
    style,
    size = "md"
}: ComponentsProps) {

    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-20 h-20"
    };

    const textSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg"
    };

    // Check if image is a URI (string starting with http/https) or asset (number)
    const isUri = typeof image === 'string' && (image.startsWith('http') || image.startsWith('https'));
    const isAsset = typeof image === 'number';
    const isText = typeof image === 'string' && !isUri;

    // Function to get initials from text
    const getInitials = (name: string) => {
        if (!name) return "👤";

        // If it's already an emoji or single character, return as is
        if (name.length === 1 || name.match(/\p{Emoji}/u)) return name;

        // Otherwise, get initials from words
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
            .slice(0, 2);
    };

    const handlePress = () => {
        if (onRouter) {
            onRouter();
        } else if (onPress) {
            onPress();
        }
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            onLongPress={onLongPress}
            className={`
                ${sizeClasses[size]} 
                rounded-full 
                bg-neutral-300 
                justify-center 
                items-center 
                border-2 
                border-white 
                shadow-sm
                overflow-hidden
                ${className}
            `}
            style={style}
            activeOpacity={0.7}
        >

            {isUri && (
                <Image
                    source={{ uri: image }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            )}


            {isAsset && (
                <Image
                    source={image}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            )}


            {isText && (
                <Text className={`font-semibold text-neutral-600 ${textSizes[size]}`}>
                    {getInitials(image)}
                </Text>
            )}
        </TouchableOpacity>
    );
}