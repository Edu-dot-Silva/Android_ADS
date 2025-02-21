import React from "react";
import { Text, StatusBar } from "react-native";
import Texto from "../componentes/Texto";

// criando componente react
// <></> para retornar fragmento 
export default function SobreNos() {
    return <>
        <StatusBar />
        <Texto>PRIMEIRA TELA DO APP</Texto>
    </>
}

