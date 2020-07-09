import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Recuperar_Acesso from '../pages/Recuperar_Acesso';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: '',
                        headerStatusBarHeight: -100,
                        headerStyle: {
                            backgroundColor: '#2B337D',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                <Stack.Screen name="Cadastro" component={Cadastro}
                    options={{
                        title: 'Cadastro',
                        headerStyle: {
                            backgroundColor: '#2B337D',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
                <Stack.Screen name="Recuperar_Acesso" component={Recuperar_Acesso}
                    options={{
                        title: 'Recuperar Acesso',
                        headerStyle: {
                            backgroundColor: '#2B337D',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}