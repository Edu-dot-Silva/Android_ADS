import React from "react";
import {StatusBar, StyleSheet, View, Image} from "react-native";
import Texto from "../componentes/Texto";

// criando componente react
// <></> para retornar fragmento 
export default function SobreNos() {
    return <View style={estilos.fundo}>
        {/* colocando a cor de fundo */}
        <StatusBar />
        <Image source={require('..//..//assets/logo.png')} style={estilos.img_logo} resizeMode="contain"></Image>
        {/* o Image recebe o source e as classes de estilização */}
        <Texto>PRIMEIRA TELA DO APP</Texto>
    </View>
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor:"#e8e4db",
        // criando a cor de fundo
    },
    img_logo:{
        width: 400,
        height:200,
        alignSelf: 'center'
    }
    // classe para estilização da imagem do logo
})


