import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}: any){
    // determina a estilização padrao do texto
    let estilo = estilos.padrao;

    // verifica se o texto sera exibido em negrito
    if (style?.fontWeight === "bold"){
        estilo = estilos.bold;
    }

    return <Text style={[estilo, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao : {
        fontSize: 32,
        textAlign: "center",
        fontFamily: "FonteRegular",
        letterSpacing: 1,
        lineHeight: 30,
    },
    bold:{
        fontSize: 32,
        textAlign: "center",
        lineHeight: 25,
        fontFamily: "FonteTangerineNegrito",
        letterSpacing: 1,
    }
})