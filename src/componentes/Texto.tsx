import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children}){
    
    return <Text style={estilos.estilo_textos}>{children}</Text>
}

const estilos = StyleSheet.create({
    estilo_textos : {
        color: "navy",
        fontWeight: "bold",
    }
})