import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react-native';

export default function TabLayout() {

  return (
    <>
      <Header image={require("../../assets/images/react-logo.png")}/>
      <Tabs>
        <Tabs.Screen 
          name='index' 
          options={{ 
            headerShown: false, 
            tabBarLabel: 'API Vertical', 
            tabBarLabelStyle: { color: "white", fontSize: 15, fontWeight: "bold" },
            tabBarStyle: {height: 70, backgroundColor: "#5C5C5C"}
          }} 
        />
        <Tabs.Screen 
          name='list' 
          options={{ 
            headerShown: false, 
            tabBarLabel: 'API Horizontal', 
            tabBarStyle: {height: 70, backgroundColor: "#5C5C5C"},
            tabBarLabelStyle: { color: "white", fontSize: 15, fontWeight: "bold" }
          }} 
        />
      </Tabs>
    </>
  );
}
