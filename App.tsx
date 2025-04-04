import React from "react";
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from "@expo-google-fonts/tangerine";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Image} from "react-native";

import SobreNos from "./src/telas/SobreNos";


//Menu Obras
import Obra from './src/telas/Obras';
import MockObras from "./src/mocks/listaObras";
import Citacoes from "./src/telas/Citacoes/Citacoes";
import Quiz from "./src/telas/Quiz/Quiz";
import Livros from "./src/telas/Citacoes/Citacoes";

function Obras() {
  return <Obra {...MockObras}/>
}

// configurando menu
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e8e4db", // Cor da fonte quando o Tab.Screen está selecionado
        tabBarInactiveTintColor: "#c0b091", // Cor da fonte quando o Tab.Screen não está selecionado
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#a38a5a",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
          padding: 8
        },
        tabBarLabelStyle: {
          fontSize: 28,
          fontFamily: "FonteTangerineNegrito",
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={SobreNos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/home.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/homeInativo.png') // Ícone não selecionado
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Obras"
        component={Obras}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/arte.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/arteInativo.png') // Ícone não selecionado
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Citações"
        component={Citacoes}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/citacoes.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/citacoesInativo.png') // Ícone não selecionado
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/quiz.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/quizInativo.png') // Ícone não selecionado
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Livros"
        component={Livros}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/livros.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/livrosInativo.png') // Ícone não selecionado
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const [fonteCarregada] = useFonts({ "FonteRegular": Tangerine_400Regular, "FonteTangerineNegrito": Tangerine_700Bold });

  // verifica se a fonte foi carregada
  if (!fonteCarregada) {
    return <View />
  }

  return <NavigationContainer>
    <Menu />
  </NavigationContainer>
}

