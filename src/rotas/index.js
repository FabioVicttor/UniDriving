import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}