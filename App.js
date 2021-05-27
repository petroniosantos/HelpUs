import React from 'react';

import { Alert, ScrollView, StyleSheet } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App() {

  return (
      <View style={styles.screen}>

        <Text style={styles.copyrihigt}>Bem Vindo!</Text>

        <Image style={styles.logo}
        source={require('../ReactLogin/src/assets/helpUs.png')}/>

        <Text style={styles.txtTexto}>Faça login utilizando</Text>

        <View style={styles.emailbox}>
          <TextInput style={styles.txtinput}
          placeholder="Digite seu e-mail"
          keyboardType={'email-address'}/>
        </View>

        <View style={styles.senhabox}>
          <TextInput style={styles.txtinput}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          />
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={ () => {this.clicou()} }
        >
          <Text style={styles.txtLogin}>Login</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={ () => {this.clicou()} }
        >
          <Text style={styles.txtCadastro}>Cadastre-se</Text>

        </TouchableOpacity>

        <Text style={styles.termoUso}>Ao criar uma conta, você concorda com nosso Termos de uso!</Text>
        <Text style={styles.txtTexto}>Copyright Helpus 2021 ©</Text>

      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#98fb98',
    flex: 1,
    alignContent: 'center',
  },
  logo: {
    width: 350,
    left: 25,
    right: -70,
    height:160,
    marginTop: 25, 
  },
  emailbox: {
    backgroundColor: '#fff',
    color: "blue",
    marginTop: 25,
    borderRadius: 25,
    width: 300,
    marginLeft: 50,
  },

  senhabox: {
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 25,
    width: 300,
    marginLeft: 50,
  },

  txtinput: {
    fontSize: 20,
    marginLeft: 20,
  },


  btnLogin: {
   width: 300,
   height: 42,
   backgroundColor: '#3498dc',
   marginTop: 25,
   borderRadius: 25,
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft: 50,
  },

  btnCadastro: {
    width: 300,
    height: 42,
    backgroundColor: '#3498dc',
    marginTop: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
   },

   txtLogin: {
    fontSize: 16,
    color: '#fff'
  },

  txtCadastro: {
    fontSize: 16,
    color: '#fff'
  },

  termoUso: {
    color: 'blue',
    marginTop: 25,
    textAlign: 'center',
    fontSize: 12,
  },

  bemVindo: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 35,
  },

  txtTexto: {
    marginTop: 25,
    textAlign: 'center',
  },
});
