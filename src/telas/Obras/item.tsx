import React from "react";
import { Card } from "react-native-paper";
import { View } from "react-native";
import Texto from "../../componentes/Texto";


export default function Item({ cadaObra: { id, titulo, descricao, imagem } }: any) {

    return (
        <View>
            <Card mode="elevated">
                <Card.Content>
                    {/* <Texto style={{ fontWeight: "bold" }}>{titulo}</Texto> */}
                    <Texto style={{ fontFamily: "FonteTangerineNegrito", fontSize: 32, color: "#a38a5a" }}>{titulo}</Texto>
                    {/* <Card.Cover source={imagem} /> */}
                    <Card.Cover source={imagem } style={{ width: 400, height: 600, resizeMode: "contain" }} />
                    <Texto style={{ fontFamily: "FonteRegular", fontSize: 24, color: "#a38a5a" }}>{descricao}</Texto>
                    {/* fazer tratativa com imager width */}
                </Card.Content>
            </Card>
        </View>
    );
}