import React, {useState} from "react";
import Texto from "../../componentes/Texto";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styles  from "./estilosPerfil";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CameraView,CameraType, useCameraPermissions } from "expo-camera";

export default function Perfil() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

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
    <View style={styles.container}>
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
                <TextInput style={styles.input} placeholder="Leonardo da Vinci"/>

                <Texto style={styles.text}>Email: </Texto>
                <TextInput style={styles.input} placeholder="leonardo.davinci@gmail.com"/>

                <Texto style={styles.text}>Whatsapp: </Texto>
                <TextInput style={styles.input} placeholder="(11) 98636-4702" keyboardType="numeric"/>

            </Card.Content>
            </Card>
    </View>
  );
}