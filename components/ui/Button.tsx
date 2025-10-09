import clsx from "clsx";
import { TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import GoogleIcon from "../../assets/icons/google.svg";
import AppleIcon from "../../assets/icons/apple.svg";

type ButtonProps = TouchableOpacityProps & {
    variant?: "primary" | "secondary" | "outline" | "danger" | "sosial";
    iconType?: "google" | "apple";
    children: React.ReactNode;
    className?: string;
};

export default function Button({
    variant = "primary",
    iconType,
    children,
    className,
    ...props
}: ButtonProps) {
    const buttonClasses = clsx(
        "px-4 py-4 rounded-2xl flex-row items-center justify-center",
        {
            "bg-blue-500": variant === "primary",
            "bg-gray-500": variant === "secondary",
            "bg-transparent border border-gray-400": variant === "outline",
            "bg-red-500": variant === "danger",
            "bg-white border border-neutral-400 w-full": variant === "sosial",
        },
        className
    );

    const textClasses = clsx("font-semibold text-center", {
        "text-white": variant !== "sosial",
        "text-black": variant === "sosial",
    });

    const renderIcon = () => {
        if (variant !== "sosial") return null;

        const IconComponent =
            iconType === "google"
                ? GoogleIcon
                : iconType === "apple"
                    ? AppleIcon
                    : null;

        if (!IconComponent) return null;

        return <IconComponent width={20} height={20} style={{ marginRight: 8 }} />;
    };

    return (
        <TouchableOpacity className={buttonClasses} {...props}>
            {/* ⬅️ icon di kiri */}
            <View className="flex-row items-center justify-center">
                {renderIcon()}
                <Text className={textClasses}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}
