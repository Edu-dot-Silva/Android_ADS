import React from "react";
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from "@expo-google-fonts/tangerine";
import { View } from "react-native";


import SobreNos from "./src/telas/SobreNos";

export default function App() {

  const [fonteCarregada] = useFonts({"FonteRegular": Tangerine_400Regular, "FonteTangerineNegrito": Tangerine_700Bold});
  
  // verifica se a fonte foi carregada
  if (!fonteCarregada){
    return <View/>
  }

  return <SobreNos/>
}

