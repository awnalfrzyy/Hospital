/**
 *  TextArea Component
 * 
 * Komponen input teks multiline untuk React Native.
 * Teks otomatis turun ke baris berikutnya kalau udah panjang,
 * dan border berubah warna saat fokus. Placeholder bisa dikustom.
 * 
 *  Fitur:
 * -  Multiline input (otomatis turun ke bawah)
 * -  Custom placeholder & warna
 * -  Border highlight saat fokus
 * -  Opsional: karakter counter (pakai maxLength)
 * -  Dukungan className & style kustom
 * 
 * 🧩 Props:
 * | Nama              | Tipe                            | Default            | Deskripsi |
 * |-------------------|---------------------------------|--------------------|------------|
 * | `value`           | `string`                        | `""`               | Nilai teks input |
 * | `onChangeText`    | `(text: string) => void`        | `undefined`        | Handler saat teks berubah |
 * | `placeholder`     | `string`                        | `"Tulis sesuatu..."` | Placeholder teks |
 * | `placeholderColor`| `string`                        | `"#A1A1A1"`        | Warna placeholder |
 * | `className`       | `string`                        | `""`               | Tailwind class tambahan |
 * | `style`           | `ViewStyle`                     | `undefined`        | Custom style container |
 * | `textStyle`       | `TextStyle`                     | `undefined`        | Custom style teks |
 * | `maxLength`       | `number`                        | `undefined`        | Batas maksimal karakter |
 * | `numberOfLines`   | `number`                        | `4`                | Jumlah baris default |
 * 
 *  Contoh Penggunaan:
 * ```tsx
 * import React, { useState } from "react";
 * import { View } from "react-native";
 * import TextArea from "../components/ui/TextArea";
 * 
 * export default function ExampleScreen() {
 *   const [bio, setBio] = useState("");
 * 
 *   return (
 *     <View className="flex-1 bg-white p-4">
 *       <TextArea
 *         value={bio}
 *         onChangeText={setBio}
 *         placeholder="Ceritain tentang dirimu..."
 *         placeholderColor="#9CA3AF"
 *         maxLength={200}
 *         className="mb-4"
 *       />
 *     </View>
 *   );
 * }
 * ```
 * 
 *  Tips:
 * - Tambahkan `maxLength` biar muncul counter otomatis di bawah input.
 * - Mau tinggi input auto-nambah pas ngetik? Gunakan `onContentSizeChange`.
 * - Cocok dikombinasi sama `react-hook-form` untuk validasi input.
 * 
 */


import React, { useState } from "react";
import { TextInput, View, Text, ViewStyle, TextStyle } from "react-native";
import clsx from "clsx";

interface TextAreaProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    placeholderColor?: string;
    className?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    maxLength?: number;
    numberOfLines?: number;
}

export default function TextArea({
    value,
    onChangeText,
    placeholder = "Tulis sesuatu...",
    placeholderColor = "#A1A1A1",
    className,
    style,
    textStyle,
    maxLength,
    numberOfLines = 4,
}: TextAreaProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={clsx(
                "rounded-2xl border px-3",
                isFocused ? "border-[#254EDB]" : "border-[#E5E5E5]",
                className
            )}
            style={style}
        >
            <TextInput
                multiline
                textAlignVertical="top"
                value={value}
                onChangeText={onChangeText}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="text-base py-3 text-[#333]"
                style={textStyle}
            />
            {maxLength && (
                <Text className="text-xs text-neutral-400 text-right pb-2">
                    {value?.length || 0}/{maxLength}
                </Text>
            )}
        </View>
    );
}
