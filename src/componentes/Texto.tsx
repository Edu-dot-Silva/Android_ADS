import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children}: any){
    
    return <Text style={estilos.estilo_textos}>{children}</Text>
}

const estilos = StyleSheet.create({
    estilo_textos : {
        color: "red",
        fontWeight: "bold",
    }
})