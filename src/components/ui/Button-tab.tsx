import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Home, Calendar, Clock, MessageCircle, User } from 'lucide-react-native';
import HomeScreen from '../../screen/app/HomeScreen';
import CalenderScreen from '../../screen/app/CalenderScreen';
import HistoryScreen from '../../screen/app/HistoryScreen';
import ChatScreen from '../../screen/app/ChatScreen';
import ProfileScreen from '../../screen/app/ProfilScreen';
import AppLayout from '../layout/app-layout';

export type TabParamList = {
    Home: undefined;
    Calendar: undefined;
    History: undefined;
    Chat: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <AppLayout>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#254EDB',
                    tabBarInactiveTintColor: '#d9d9d9',
                    tabBarStyle: {
                        position: "absolute",
                        backgroundColor: '#fff',
                        height: 60,
                        paddingBottom: insets.bottom > 0 ? insets.bottom - 2 : 8,
                        paddingTop: 6,
                        borderTopWidth: 1,
                        borderTopColor: '#E5E5E5',
                        elevation: 0, // hilangin shadow Android
                        shadowOpacity: 0, // hilangin shadow iOS
                    },

                    tabBarIcon: ({ color, size }) => {
                        let IconComponent: React.FC<{ color: string; size?: number }> = Home;

                        switch (route.name) {
                            case 'Home':
                                IconComponent = Home;
                                break;
                            case 'Calendar':
                                IconComponent = Calendar;
                                break;
                            case 'History':
                                IconComponent = Clock;
                                break;
                            case 'Chat':
                                IconComponent = MessageCircle;
                                break;
                            case 'Profile':
                                IconComponent = User;
                                break;
                        }

                        return <IconComponent color={color} size={24} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Calendar" component={CalenderScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </AppLayout>
    );
};

export default TabNavigator;
