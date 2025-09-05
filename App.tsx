import React from "react";
import { useFonts, Tangerine_400Regular, Tangerine_700Bold } from "@expo-google-fonts/tangerine";
import { TouchableOpacity, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAudioPlayer } from "expo-audio";

import SobreNos from "./src/telas/SobreNos";

//Menu Obras
import Obra from './src/telas/Obras';
import MockObras from "./src/mocks/listaObras";
import Citacoes from "./src/telas/Citacoes/Citacoes";
import Quiz from "./src/telas/Quiz/Quiz";
import Livros from "./src/telas/Livros/Livros";
import Perfil from "./src/telas/Perfil";

function Obras() {
  return <Obra {...MockObras} />
}

// função que executa audio
function MenuAudio() {
  const audioSource = require('./src/assets/audio/musica.mp3');
  const [player, setPlayer] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const initializePlayer = async () => {
      const audioPlayer = await useAudioPlayer(audioSource);
      setPlayer(audioPlayer);
      audioPlayer.play();
      setIsPlaying(true);
    };

    initializePlayer();

    return () => {
      if (player) {
        try {
          player.pause();
        } catch (error) {
          console.error("Erro ao pausar o áudio:", error);
        }
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!player) return;

    if (isPlaying) {
      try {
        player.pause();
      } catch (error) {
        console.error("Erro ao pausar o áudio:", error);
      }
    } else {
      try {
        player.play();
      } catch (error) {
        console.error("Erro ao reproduzir o áudio:", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <TouchableOpacity onPress={toggleAudio}>
        <Image
          source={
            isPlaying
              ? require('./assets/imagensapp/icones/on.png') 
              : require('./assets/imagensapp/icones/off.png')
          }
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}

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
          height: 60, 
          paddingBottom: 4, 
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 20, 
          fontFamily: "FonteTangerineNegrito",
          marginBottom: 0, 
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
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('./assets/imagensapp/icones/perfil_selecionado.png') // Ícone selecionado
                  : require('./assets/imagensapp/icones/perfil.png') // Ícone não selecionado
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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Menu />
        <MenuAudio/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
