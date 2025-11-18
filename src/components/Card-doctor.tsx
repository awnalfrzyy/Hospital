import Card from "./ui/Card";
import { View, Image, ImageProps } from 'react-native';

interface ComponentsProps {
    image: string;
    name: string;
    specialist: string;
    status: boolean;
}

export default function CardDoctor({ image, name, specialist, status }: ComponentsProps) {
    return (
        <Card className="">
            <View>
                <Image source={uri(image)} />
            </View>
        </Card>
    )
}