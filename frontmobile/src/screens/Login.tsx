import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native";

import Button from "../core/components/Button";
import { Feather } from "@expo/vector-icons";
import { makeLogin } from "../core/utils/request";

import eyesOpened from '../core/assets/eyes-opened.png'
import eyesClosed from '../core/assets/eyes-closed.png'
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/core";

export default function Login() {
  const { setUserLogged } = useContext(AuthContext)
  const navigation = useNavigation()
  const [hidePassword, setHidePassword] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      const loginData = { username, password }
      await makeLogin(loginData)
      setUserLogged()
    }
    catch (e) {
      Alert.alert('Ops...', 'Usuário ou senha inválidos! 😕 ', [
        { text: 'OK', style:'cancel' }
      ])
    }
  }

  return (
    <ScrollView contentContainerStyle={ styles.container }>
      <Text style={ styles.title }>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={ colors.placeholder }
        autoCapitalize="none"
        keyboardType="email-address"
        value={ username }
        onChangeText={ event => setUsername(event) }
        style={ styles.textInput }
      />

      <View style={ styles.passwordGroup }>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={ colors.placeholder }
          autoCapitalize="none"
          secureTextEntry={ hidePassword }
          value={ password }
          onChangeText={ event => setPassword(event) }
          style={ styles.textInput }
        />
        <TouchableOpacity
          onPress={ () => setHidePassword(!hidePassword) }
          style={ styles.toggle }
        >
          <Image source={ hidePassword ? eyesOpened : eyesClosed } />
        </TouchableOpacity>
      </View>

      <Button
        title='Fazer Login'
        onPress={ () => handleLogin() }
      >
        <View style={ styles.buttonImageContainer }>
          <Feather
            name='chevron-right'
            style={ styles.buttonImage }
          />
        </View>
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: colors.darkGray,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 30,
    paddingBottom: 100,
    paddingHorizontal: 40
  },

  title: {
    fontFamily: fonts.text,
    fontSize: 40,
    textTransform: "uppercase",
    lineHeight: 41,
    letterSpacing: -0.015,
    color: colors.white,
    marginBottom: 30,
    textAlign: 'center'
  },

  form: {
    marginVertical: 10
  },

  textInput: {
    width: '100%',
    maxWidth: 335,
    height: 50,
    backgroundColor: colors.whiteBackground,
    borderWidth: 1,
    borderColor: colors.whiteBorder,
    borderRadius: 10,
    padding: 10
  },

  passwordGroup: {
    width: '100%',
    maxWidth: 335,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  toggle: {
    margin: -40
  },

  buttonImageContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonImageContainer,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },

  buttonImage: {
    fontSize: 28,
    color: colors.white
  }
})