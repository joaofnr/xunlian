import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TrainingRoute from './TrainingRoute';
import ConfigRoute from './ConfigRoute';

const TabNav = createBottomTabNavigator();

export default function AppRoutes() {
    return <NavigationContainer>
        <TabNav.Navigator screenOptions= { () => ({
                headerShown: false
            })}>
            <TabNav.Screen name='Home' component={TrainingRoute} />
            <TabNav.Screen name='Config' component={ConfigRoute} />
        </TabNav.Navigator>
    </NavigationContainer>
}