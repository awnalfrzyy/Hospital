declare module "react-native-phone-number-input" {
    import * as React from "react";
    import { ViewStyle, TextStyle } from "react-native";

    export interface PhoneInputProps {
        defaultValue?: string;
        defaultCode?: string;
        layout?: "first" | "second";
        onChangeFormattedText?: (text: string) => void;
        containerStyle?: ViewStyle;
        textContainerStyle?: ViewStyle;
        textInputStyle?: TextStyle;
        codeTextStyle?: TextStyle;
        renderFlagButton?: () => React.ReactNode; // 👈 nambahin ini
    }

    export default class PhoneInput extends React.Component<PhoneInputProps> { }
}
