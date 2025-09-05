import React, { useState, useEffect } from "react";
import Texto from "../../componentes/Texto";
import {KeyboardAvoidingView , View, TextInput, TouchableOpacity, Alert, Platform } from "react-native";
import { Card } from "react-native-paper";
import styles  from "./estilosPerfil";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default function Perfil() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    // campos do formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    // carrega dados do perfil
    useEffect(() => {
        async function carregarPerfil() {

            const perfilSalvo = await AsyncStorage.getItem('perfil');
            
            if (perfilSalvo) {
                const perfil = JSON.parse(perfilSalvo);
                setNome(perfil.nome);
                setEmail(perfil.email);
                setWhatsapp(perfil.whatsapp);
            }
        }
        carregarPerfil();
    }, []);


    // função para salvar os dados do perfil
    async function salvarPerfil() {
        const perfil = {
            nome,
            email,
            whatsapp
        }
        await AsyncStorage.setItem('perfil', JSON.stringify(perfil));
        Alert.alert('Perfil salvo com sucesso!');
        console.log(perfil);        
    }


    if (!permission) {
        return <View/>;
    }

    if (permission.granted){
        return <View style={styles.container}>
            <Texto style={styles.message}>Confirme a autorização para ultilizar a camera:</Texto>
            <TouchableOpacity onPress={requestPermission}>
                <Texto>Permitir</Texto>
            </TouchableOpacity>
        </View>
    }

    function toggleCameraFacing() {
        setFacing(current=>(current === 'back' ? 'front' : 'back'));
    }


  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
  >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraFacing}>
            <Ionicons name="reload" size={30} color="purple" />
          </TouchableOpacity>
        </View>
      </CameraView>
      <Card mode="elevated" style={styles.cardContainer}>
        <Card.Content>
          <Texto style={styles.text}>Nome: </Texto>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
  
          <Texto style={styles.text}>Email: </Texto>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
  
          <Texto style={styles.text}>Whatsapp: </Texto>
          <TextInput
            style={styles.input}
            value={whatsapp}
            onChangeText={setWhatsapp}
            keyboardType="phone-pad"
          />
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity style={styles.botao} onPress={salvarPerfil}>
            <Texto style={styles.textoBotao}>Salvar</Texto>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </ScrollView>
  </KeyboardAvoidingView>
  );
}