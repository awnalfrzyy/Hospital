import Card from "../../../components/ui/Card";
import { View, Image, ImageProps } from 'react-native';

interface ComponentsProps {
    image: string;
    name: string;
    specialist: string;
    status: boolean;
    handling: number;
    startDate: number;
    endDate: number;
    onPress: () => void;

}

export default function CardDoctor({ image, name, specialist, status, handling, startDate, endDate, onPress }: ComponentsProps) {
    return (
        <Card className="w-full h-10">
            <View className="">
                <Image source={{ uri: image }} />
            </View>
        </Card>
    )
}