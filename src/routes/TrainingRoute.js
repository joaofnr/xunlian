import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";

const StackNav = createNativeStackNavigator();

export default function TrainingRoute(){
    return <StackNav.Navigator screenOptions={ () => ( { headerShown:false } ) }>
        <StackNav.Screen name='HomeScreen' component={HomeScreen} />
    </StackNav.Navigator> 
}