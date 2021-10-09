import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router;