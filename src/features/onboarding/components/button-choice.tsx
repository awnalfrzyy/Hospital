import Button from "../../../components/ui/Button";
import { View } from 'react-native';
import { ButtonChoiceProps } from "../types/button-choice";

export default function ButtonChoice({ onSkip, onNext }: ButtonChoiceProps) {
    return (
        <View className="flex-row gap-5 items-center">
            <Button
                variant="secondary"
                onPress={onSkip}
                className="flex-1 h-14 justify-center"
            >
                Lewati Intro
            </Button>

            <Button
                variant="primary"
                onPress={onNext}
                className="flex-1 h-14 justify-center"
            >
                Lanjutkan
            </Button>
        </View>
    );
}
