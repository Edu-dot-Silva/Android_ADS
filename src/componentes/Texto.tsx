import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}: any){
    
    return <Text style={[estilos.padrao, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao : {
        fontSize: 19,
        textAlign: "center",
        lineHeight: 25,
    }
})