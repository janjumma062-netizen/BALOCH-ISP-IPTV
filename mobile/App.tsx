import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar } from 'react-native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-community-icons';

import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import SearchScreen from './src/screens/SearchScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  dark: true,
  colors: {
    primary: '#ff0000',
    background: '#111111',
    card: '#1a1a1a',
    text: '#ffffff',
    border: '#333333',
    notification: '#ff0000',
  },
};

const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ff0000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerShown: true,
    }}
  >
    <Stack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{ title: 'BALOCH ISP IPTV' }}
    />
    <Stack.Screen
      name="Player"
      component={PlayerScreen}
      options={({ route }) => ({
        title: route.params?.channelName || 'Player',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopColor: '#333333',
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: '#ff0000',
          tabBarInactiveTintColor: '#888888',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'magnify' : 'magnify';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Channels',
            tabBarAccessibilityLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
