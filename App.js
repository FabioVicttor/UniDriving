/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  CheckBox,
  Switch,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import logo from "./assets/img/Grupo_1.png";

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"
        backgroundColor="#F1F2FE" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F1F2FE" }}>

        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

          <View>
            <View style={{}}>
              <Image source={logo} style={{ width: 200, height: 200 }}></Image>
            </View>
            <Text style={{ textAlign: "center", color: "#2B337D", fontSize: 45, fontFamily: "All Star Resort" }}>Driving</Text>
          </View>

        </View>

        <View>

          <View style={{ marginBottom: 95 }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <TextInput style={{ width: 217, height: 41, borderRadius: 100, backgroundColor: "#FFFFFF", color: "#2B337D" }} placeholder="Celular" placeholderTextColor="#2B337D">
                </TextInput>
              </View>
              <View style={{ padding: 10 }}>
                <TextInput style={{ width: 217, height: 41, borderRadius: 100, backgroundColor: "#FFFFFF" }} placeholder="Senha" placeholderTextColor="#2B337D">
                </TextInput>
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={{ backgroundColor: "#2B337D", borderRadius: 100, width: 134, height: 42, justifyContent: "center" }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
              <Switch style={{ padding: 15 }}></Switch>
              <Text style={{ color: "#2B337D", fontSize: 20, padding: 15 }}>
                Manter Conectado
            </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ padding: 15 }}>
              <TouchableOpacity>
                <Text style={{ color: "#2B337D", fontSize: 19 }}>Registre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: 15 }}>
              <TouchableOpacity>
                <Text style={{ color: "#2B337D", fontSize: 19 }}>Recuperar Acesso</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
