
/**
 *  Header Component
 * 
 * Komponen ini digunakan sebagai header (app bar) yang reusable di seluruh screen.
 * Bisa menampilkan icon kiri, icon kanan, dan judul di tengah.
 *
 *  Fitur:
 * - Mendukung `leftIcon` & `rightIcon` (bisa pakai icon dari lucide-react-native atau custom)
 * - Mendukung event `onPressLeft` dan `onPressRight`
 * - Judul (`title`) selalu rata tengah, bahkan kalau cuma ada satu icon di kiri/kanan
 * - Bisa dikustom lewat `className` dan `style`
 *
 *  Props:
 * @prop {string}: teks di tengah header.
 * @prop {React.ReactNode}: komponen icon di kiri (optional).
 * @prop {React.ReactNode}: komponen icon di kanan (optional).
 * @prop {string}: tailwind class tambahan untuk style custom.
 * @prop {function}: event handler untuk klik icon kiri.
 * @prop {function}: event handler untuk klik icon kanan.
 * @prop {ViewStyle}: untuk inline style tambahan.
 *
 *  Contoh Penggunaan:
 * 
 * ```tsx
 * import Header from "@/components/Header";
 * import { ChevronLeft, Settings } from "lucide-react-native";
 * 
 * export default function ProfileScreen({ navigation }) {
 *   return (
 *     <Header
 *       title="My Profile"
 *       leftIcon={<ChevronLeft size={24} color="black" />}
 *       rightIcon={<Settings size={24} color="black" />}
 *       onPressLeft={() => navigation.goBack()}
 *       onPressRight={() => console.log("Open Settings")}
 *       className="border-b border-gray-300"
 *     />
 *   );
 * }
 * ```
 *  Tips:
 * - Kalau pengen header tanpa border: hapus class `border-b`.
 * - Kalau cuma butuh title doang: cukup kirim `title` tanpa icon.
 * - Kalau mau sticky di atas (misal untuk ScrollView): bungkus di dalam SafeAreaView.
 */


import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import clsx from "clsx";
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
            className={clsx(
                "flex-row items-center justify-between bg-white border-b border-neutral-100 mt-0 pb-6 ",
                className
            )}
            style={style}
        >
            {leftIcon ? (
                <TouchableOpacity onPress={onPressLeft}>
                    {leftIcon}
                </TouchableOpacity>
            ) : (
                <View style={{ width: 24 }} />
            )}

            <Text className="text-lg font-bold text-center flex-1">{title}</Text>

            {rightIcon ? (
                <TouchableOpacity onPress={onPressRight}>
                    {rightIcon}
                </TouchableOpacity>
            ) : (
                <View style={{ width: 24 }} />
            )}
        </View>
    );
}

