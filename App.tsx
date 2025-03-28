import React from "react";
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from "@expo-google-fonts/tangerine";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Image} from "react-native";

import SobreNos from "./src/telas/SobreNos";

// configurando menu
const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e8e4db",
        tabBarInactiveTintColor: "#c0b091",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#a38a5a",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 24,
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
                  ? require('./imagensapp/icones/home.png')
                  : require('./imagensapp/icones/home.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Obras"
        component={SobreNos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/icons/obras-focused.png")
                  : require("./assets/icons/obras.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Citaçoes"
        component={SobreNos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/icons/citacoes-focused.png")
                  : require("./assets/icons/citacoes.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={SobreNos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/icons/quiz-focused.png")
                  : require("./assets/icons/quiz.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Livros"
        component={SobreNos}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/icons/livros-focused.png")
                  : require("./assets/icons/livros.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      /> */}
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

