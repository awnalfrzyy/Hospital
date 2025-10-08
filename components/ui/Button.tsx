import clsx from "clsx";
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type ButtonProps = TouchableOpacityProps & {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'sosial';
    children: React.ReactNode;
    className?: string;
};

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    const buttonClasses = clsx(
        'px-4 py-4 rounded-2xl flex-row items-center justify-center',
        {
            'bg-blue-500': variant === 'primary',
            'bg-gray-500': variant === 'secondary',
            'bg-transparent border border-gray-400': variant === 'outline',
            'bg-red-500': variant === 'danger',
            'bg-white border border-neutral-400': variant === 'sosial',
        },
        className
    );

    const textClasses = clsx(
        'text-white font-semibold text-center',
        {
            'text-black': variant === 'secondary' || variant === 'sosial',
        }
    );

    return (
        <TouchableOpacity className={buttonClasses} {...props}>
            {variant === 'sosial' && (
                <Svg width={20} height={20} viewBox="0 0 24 24" className="mr-2">
                    <Path d="..." fill="#000" />
                </Svg>
            )}
            <Text className={textClasses}>{children}</Text>
        </TouchableOpacity>
    );
}
