import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import Texto from "../componentes/Texto";

import { useVideoPlayer, VideoView } from "expo-video";

// criando componente react
// <></> para retornar fragmento 
export default function SobreNos() {

    // indica o video e coloco em looping
    const player = useVideoPlayer('https://drive.google.com/uc?export=download&id=1xuxIIyK85x-4uf_Qzjnv4aX0Ksjr8sJW', player =>{});

    return <ScrollView style={estilos.fundo}>
        {/* colocando a cor de fundo */}
        <StatusBar />
        <Image source={require('..//..//assets/logo.png')} style={estilos.img_logo} resizeMode="contain"></Image>
        {/* o Image recebe o source e as classes de estilização */}
        <Texto style={estilos.texto_sobre_nos}>Leonardo da Vinci (1452–1519) foi um dos maiores gênios da História, destacando-se como pintor, escultor, arquiteto, engenheiro, cientista e inventor.
            {'\n'}
            {'\n'}
            Nascido em Vinci, Itália, ele é mais conhecido por suas obras-primas como A Mona Lisa e A Última Ceia, que revolucionaram a arte ocidental.
            {'\n'}
            {'\n'}
            Além de sua habilidade artística, Leonardo também fez anotações detalhadas sobre anatomia, física, mecânica e engenharia, criando projetos para máquinas, aviões e dispositivos que estavam bem à frente de seu tempo.
            {'\n'}
            {'\n'}
            Seu talento multidisciplinar e sua busca incessante pelo conhecimento o tornaram uma figura central no Renascimento, um período de grandes avanços nas ciências e nas artes.
        </Texto>            
        <Image source={require('..//..//assets/davinci3.jpg')} style={estilos.img_davinci} resizeMode="contain"></Image>
    
        <Texto style={estilos.texto_sobre_video}> Sugerimos o vídeo abaixo para melhor entendimento e experiência no app! </Texto>

        <VideoView player={player} style={estilos.estilo_video}  allowsFullscreen allowsPictureInPicture />
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#f4f4f4",
        // criando a cor de fundo
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    img_logo: {
        width: 400,
        height: 200,
        alignSelf: 'center',
    },
    // classe para estilização padrao de texto
    texto_sobre_nos: {
        color: "#a38a5a",
        // classe especifica para texto sobre nos
    },
    texto_sobre_video: {
        color: "#a38a5a",
        // classe especifica para texto sobre nos
        fontFamily: "FonteTangerineNegrito",
        fontSize: 32,
    },
    img_davinci: {
        height: 400,
        alignSelf: 'center',
        borderRadius: 20,
        margin: 15,
    },
    estilo_video:{
        width: 450,
        height: 280,
        alignSelf: 'center',
        marginBottom: 20,
    }
})


