import SearchInput from "./ui/Search-input";
import { useState } from "react";
import { View } from "react-native";

export default function SearchScreen() {
    const [query, setQuery] = useState("");

    return (
        <View className="p-4">
            <SearchInput
                placeholder="Cari dokter, rumah sakit..."
                value={query}
                onChangeText={setQuery}
                onClear={() => setQuery("")}
                className="mb-4"
            />
        </View>
    );
}