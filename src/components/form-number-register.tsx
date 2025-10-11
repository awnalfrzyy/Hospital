import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";

export default function FormNumberRegister() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [visible, setVisible] = useState(false);
    const [countryCode, setCountryCode] = useState<CountryCode>("ID");
    const [callingCode, setCallingCode] = useState("+62");

    const onSelect = (country: any) => {
        setCountryCode(country.cca2);
        setCallingCode(`+${country.callingCode[0]}`);
        setVisible(false);
    };

    return (
        <View className="px-8 mt-10">
            <Text className="mb-3 text-lg font-semibold text-gray-700">
                Enter your phone number
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 16,
                    backgroundColor: "white",
                    height: 56,
                    overflow: "hidden",
                }}
            >
                {/* Country Picker Button */}
                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 12,
                        height: "100%",
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                        backgroundColor: "#FFFFFFFF",
                    }}
                >
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter
                        withFlag
                        withCallingCode
                        withEmoji
                        visible={visible}
                        onClose={() => setVisible(false)}
                        onSelect={onSelect}
                        containerButtonStyle={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    />
                    <Text style={{
                        marginLeft: 6,
                        color: "black",
                        fontSize: 16,
                        fontWeight: "500"
                    }}>
                        {callingCode}
                    </Text>
                </TouchableOpacity>

                {/* Phone Number Input */}
                <TextInput
                    style={{
                        flex: 1,
                        paddingHorizontal: 12,
                        fontSize: 16,
                        color: "black",
                        height: "100%",
                    }}
                    placeholder="Enter phone number"
                    placeholderTextColor="#999"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
            </View>

            {/* Country Picker Modal */}

        </View>
    );
}