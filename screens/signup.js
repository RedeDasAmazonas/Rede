import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import {
  Input
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles, colors } from '../styles/global';

export default function SignUp({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/rede.png')}
          style={{
            width: 210,
            height: 210
          }}
        />
      </View>
      <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
        <ScrollView style={{
          width:"100%"
        }}>
          <Input
            label="Insira seu email"
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#CECECECE"
            textContentType="emailAddress"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon
                name='email'
                size={24}
                color="#CECECECE"
                style={styles.icon}
              />
            }
          />
          <Input
            label="Informe sua senha"
            placeholder="******"
            renderToHardwareTextureAndroid={true}
            placeholderTextColor="#CECECECE"
            textContentType="password"
            secureTextEntry={true}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color="#CECECECE"
                style={styles.icon}
              />
            }
          />
          <Input
            label="Informe sua senha"
            placeholder="******"
            renderToHardwareTextureAndroid={true}
            placeholderTextColor="#CECECECE"
            textContentType="password"
            secureTextEntry={true}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color="#CECECECE"
                style={styles.icon}
              />
            }
          />
          <Input
            label="Informe sua senha"
            placeholder="******"
            renderToHardwareTextureAndroid={true}
            placeholderTextColor="#CECECECE"
            textContentType="password"
            secureTextEntry={true}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color="#CECECECE"
                style={styles.icon}
              />
            }
          />
          <Input
            label="Informe sua senha"
            placeholder="******"
            renderToHardwareTextureAndroid={true}
            placeholderTextColor="#CECECECE"
            textContentType="password"
            secureTextEntry={true}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color="#CECECECE"
                style={styles.icon}
              />
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue
  },
  banner: {
    flex: 0.8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    borderBottomStartRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    padding: 2,
    marginBottom: 20
  },
  input: {
    padding: 5,
    color: "#FFF",
    fontWeight: "bold"
  },
  icon: {
    marginLeft: -15,
  },
})