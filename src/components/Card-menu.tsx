// import Card from "./ui/Card";
// import { View, Text, ViewStyle, StyleProp } from "react-native";

// interface ComponentsParentProps {
//     icons: string;
//     title: string;
//     desc: string;
//     route: string;
//     iconsColor: string;
//     backgroundColor: string;
//     className?: string;
//     style?: StyleProp<ViewStyle>;
//     onPress?: () => void;
// }

// export default function CardMenu({
//     icons,
//     title,
//     desc,
//     route,
//     iconsColor,
//     backgroundColor,
//     className,
//     style,
//     onPress
// }: ComponentsParentProps) {
//     return (
//         <Card className="w-[48%] h-[180px] rounded-2xl mb-4 p-5">
//             <View className="w-14 h-14 mb-4 items-center justify-center rounded-xl"
//                 style={{ backgroundColor: iconColor }}>
//                 {icons}
//             </View>
//             <Text className="font-bold text-[16px] text-[#1E1E1E] mb-1">
//                 {title}
//             </Text>
//             <Text className="text-sm text-[#6B7280]">{desc}</Text>
//         </Card>
//     )
// }