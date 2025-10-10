import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Search, X } from 'lucide-react-native';

interface SearchInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onClear?: () => void;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Cari sesuatu...',
    value,
    onChangeText,
    onClear,
    className = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            className={`flex-row items-center px-3 rounded-2xl border ${isFocused ? 'border-[#254EDB]' : 'border-[#E5E5E5]'} ${className}`}
        >
            <Search size={20} color={isFocused ? '#254EDB' : '#A1A1A1'} />
            <TextInput
                className="flex-1 px-2 py-4 text-base text-[#333]"
                placeholder={placeholder}
                placeholderTextColor="#A1A1A1"
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {value ? (
                <TouchableOpacity onPress={onClear} className="p-1 rounded-full">
                    <X size={16} color="#666" />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default SearchInput;
