cara pemakaian card menu dengan tanpa Props

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardMenu from '../components/CardMenu';
import { menuData, MenuItem } from '../dummy/dataMenu';

export default function HomeScreen({ navigation }: any) {
  const selectedMenuIds = [1, 2, 4]; (ID menu yang ingin ditampilkan)
  
  const filteredMenus = menuData.filter(item => 
    selectedMenuIds.includes(item.id)
  );

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Featured Services</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between">
          {filteredMenus.map((item) => (
            <CardMenu 
              key={item.id} 
              item={item} 
              navigation={navigation} 
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

cara pemakaian card menu dengan Props

import CardMenu from '../components/CardMenu';
import { menuData } from '../dummy/dataMenu';

interface HomeScreenProps {
  navigation: any;
  featuredMenus?: number[]; // Optional: ID menu yang ingin ditampilkan
  title?: string;
}

export default function HomeScreen({ 
  navigation, 
  featuredMenus = [1, 2, 4], // Default value
  title = "Featured Services" 
}: HomeScreenProps) {
  
  const menusToShow = featuredMenus.length > 0 
    ? menuData.filter(item => featuredMenus.includes(item.id))
    : menuData; <--- (Tampilkan semua jika tidak ada filter)

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">{title}</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between">
          {menusToShow.map((item) => (
            <CardMenu 
              key={item.id} 
              item={item} 
              navigation={navigation} 
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}