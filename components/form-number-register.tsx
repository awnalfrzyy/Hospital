import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";

export default function FormNumberRegister() {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [countryCode, setCountryCode] = useState<CountryCode>("ID");
    const [callingCode, setCallingCode] = useState("+62");

    const onSelect = (country: any) => {
        setCountryCode(country.cca2);
        setCallingCode(`+${country.callingCode[0]}`);
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
                    paddingHorizontal: 10,
                    backgroundColor: "white",
                }}
            >
                {/* Tombol Flag */}
                <TouchableOpacity
                    onPress={() => setVisible(true)}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingRight: 8,
                        borderRightWidth: 1,
                        borderRightColor: "#ddd",
                    }}
                >
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter
                        withFlag
                        withCallingCode
                        visible={visible}
                        onClose={() => setVisible(false)}
                        onSelect={onSelect}
                    />
                    <Text style={{ marginLeft: 6, color: "black" }}>{callingCode}</Text>
                </TouchableOpacity>

                {/* Input nomor */}
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode={countryCode}
                    layout="first"
                    onChangeFormattedText={setValue}
                    renderDropdownImage={<></>} // ini ngeganti arrow jadi kosong
                    flagButtonStyle={{ display: "none" }}
                    textInputStyle={{
                        color: "black",
                        fontSize: 16,
                        paddingLeft: 10,
                    }}
                />


            </View>
        </View>
    );
}
