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

import {
  NeuView,
  NeuButton,
  NeuSwitch,
  NeuInput,
  NeuBorderView,
  NeuSpinner
} from 'react-native-neu-element';



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
            <NeuBorderView
              width={210}
              height={265}
              color={'#eef2f9'}

              borderWidth={8}

              borderRadius={16}
            >
              <Image source={logo} style={styles.logo}></Image>
              <Text style={styles.logofont}>Driving</Text>
            </NeuBorderView>
          </View>
        </View>

        <View>
          <View style={{ marginBottom: 95 }}>
            <View style={{ alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <NeuInput
                  onChangeText={setCelular}
                  value={Celular}
                  placeholder="Celular"
                  placeholderTextColor="#2B337D"
                  width={217}
                  height={41}
                  borderRadius={100}
                  color={'#eef2f9'} />
                {/* <TextInput
                  style={styles.TextInputSigIn}
                  placeholder="Celular"
                  placeholderTextColor="#2B337D"
                  onChangeText={setCelular}
                /> */}
              </View>
              <View style={{ padding: 10 }}>
                <NeuInput
                  onChangeText={setSenha}
                  value={Senha}
                  placeholder="Senha"
                  placeholderTextColor="#2B337D"
                  width={217}
                  height={41}
                  borderRadius={100}
                  color={'#eef2f9'} />
                {/* <TextInput
                  style={styles.TextInputSigIn}
                  placeholder="Senha"
                  placeholderTextColor="#2B337D"
                  onChangeText={setSenha}
                /> */}
              </View>
            </View>

            <View style={{ alignItems: "center",  marginTop: 10 }}>
              <NeuButton
                color="#eef2f9"
                width={134}
                height={42}
                borderRadius={16}

                isConvex
                onPress={() => { entrar() }}
              >
                <Text style={styles.bottomtextEntrar}>Entrar</Text>
              </NeuButton>
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
              <NeuSwitch
                isPressed={isEnabled}
                setIsPressed={setIsEnabled}
                color="#eef2f9"
                containerHeight={20}
                containerWidth={40}
                buttonHeight={20}
                buttonWidth={21}

                customGradient={['#81b0ff', '#2B337D']}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <View style={{ padding: 15 }}>
              <NeuButton
                color="#eef2f9"
                width={170}
                height={40}
                borderRadius={16}
                active
                onPress={() => { navigation.navigate("Cadastro") }}>
                <Text style={styles.textfooter}>Registre-se</Text>
              </NeuButton>
            </View>
            <View style={{ padding: 15 }}>
              <NeuButton
                color="#eef2f9"
                width={170}
                height={40}
                borderRadius={16}
                active
                onPress={() => { navigation.navigate("Recuperar_Acesso") }}>
                <Text style={styles.textfooter}>Recuperar Acesso</Text>
              </NeuButton>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
