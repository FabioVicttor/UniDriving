/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import styles from "./style";
import React, { useState } from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  View,
  Text,
  StatusBar
} from 'react-native';



import logo from "../../../assets/img/Grupo_1.png";

function Login({ navigation }) {
  // Switch - Inicio
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // Switch - Fim

  // Variaveis de Login - Inicio
  const [Celular, setCelular] = useState("");
  const [Senha, setSenha] = useState("");
  // Variaveis de Login - Fim

  function entrar() {
    console.log("Celular: " + Celular + "||Senha: " + Senha);
    if (Celular != "" && Senha != "") {
      alert("Login Success!!!");

    } else {
      alert("Login Fail!!!");
    }

  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#DEE9F7" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#DEE9F7" }}>

        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <View>
            <View>
              <Image source={logo} style={styles.logo}></Image>
            </View>
            <Text style={styles.logofont}>Driving</Text>
          </View>
        </View>

        <View>

          <View style={{ marginBottom: 95 }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <TextInput
                  style={styles.TextInputSigIn}
                  placeholder="Celular"
                  placeholderTextColor="#2B337D"
                  onChangeText={setCelular}
                />
              </View>
              <View style={{ padding: 10 }}>
                <TextInput
                  style={styles.TextInputSigIn}
                  placeholder="Senha"
                  placeholderTextColor="#2B337D"
                  onChangeText={setSenha}
                />
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={styles.bottomEntrar}
                onPress={() => { entrar() }}>
                <Text style={styles.bottomtextEntrar}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.manterconectado}>
              <Text style={{ color: "#2B337D", fontSize: 20, padding: 15 }}>
                Manter Conectado
              </Text>
              <Switch
                style={{ padding: 15 }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#2B337D" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <View style={{ padding: 15 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate("Cadastro") }}>
                <Text style={styles.textfooter}>Registre-se</Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 15 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate("Recuperar_Acesso") }}>
                <Text style={styles.textfooter}>Recuperar Acesso</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
