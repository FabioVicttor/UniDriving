/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
  ActivityIndicator
} from 'react-native';

import logo from "../../../assets/img/Grupo_1.png";

function Login({navigation}) {

  // Switch - Inicio
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // Switch - Fim

  // Variaveis de Login - Inicio
  const [Celular, setCelular] = useState("");
  const [Senha, setSenha] = useState("");

  // Variaveis de Login - Fim

  function entrar() {
    console.log("Celular: "+Celular+"||Senha: "+Senha);
    if(Celular != "" && Senha != ""){
      alert("Login Success!!!");

    } else{
      alert("Login Fail!!!");
    }

  }

  return (
    <>
      <StatusBar barStyle="dark-content"
        backgroundColor="#F1F2FE" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F1F2FE" }}>

        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

          <View>
            <View>
              <Image source={logo} style={styles.logo}></Image>
            </View>
            <Text style={styles.logofont}>Driving</Text>
            <ActivityIndicator size="large" color="#0000ff" style={{display: "none"}} />
          </View>

        </View>

        <View>

          <View style={{ marginBottom: 95 }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <TextInput style={styles.TextInputSigIn} placeholder="Celular" placeholderTextColor="#2B337D"
                  onChangeText={setCelular} />
              </View>
              <View style={{ padding: 10 }}>
                <TextInput style={styles.TextInputSigIn} placeholder="Senha" placeholderTextColor="#2B337D"
                  onChangeText={setSenha} />
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.bottomEntrar} onPress={() => { entrar() }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
              <Switch style={{ padding: 15 }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#2B337D" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled} />
              <Text style={{ color: "#2B337D", fontSize: 20, padding: 15 }}>
                Manter Conectado
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ padding: 15 }}>
              <TouchableOpacity
               onPress={()=> {navigation.navigate("Cadastro")}}>
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
  logo: {
    width: 200,
    height: 200
  },

  logofont: {
    textAlign: "center",
    color: "#2B337D",
    fontSize: 45,
    fontFamily: "All Star Resort"
  },

  TextInputSigIn: {
    width: 217,
    height: 41,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    color: "#2B337D"
  },

  bottomEntrar: {
    backgroundColor: "#2B337D",
    borderRadius: 100,
    width: 134,
    height: 42,
    justifyContent: "center"
  }

});

export default Login;
