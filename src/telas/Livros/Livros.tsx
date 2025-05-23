import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";
import listaLivros from "../../mocks/listaLivros";
import carrinhoIcon from "../../../assets/imagensapp/icones/carrinho.png";

const Livros = () => {
  const abrirLink = (link: string) => {
    Linking.openURL(link);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.autor}>{item.autor}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => abrirLink(item.link)}>
        <View style={styles.botaoConteudo}>
          <Text style={styles.textoBotao}>Comprar</Text>
          <Image source={carrinhoIcon} style={styles.iconeBotao} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: "#f4f4f4" }]}>
      <FlatList
        data={listaLivros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <Text style={styles.introText}>
            Algumas sugestões de livros para entender ainda mais a mente o gênio renascentista Leonardo da Vinci
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lista: {
    alignItems: "center",
  },
  card: {
    padding: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  imagem: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 16,
  },
  titulo: {
    fontSize: 36,
    fontFamily: "FonteTangerineNegrito",
    color: "#a38a5a",
    textAlign: "center",
  },
  autor: {
    fontSize: 24,
    fontFamily: "FonteRegular",
    color: "#a38a5a",
    marginBottom: 16,
  },
  botao: {
    backgroundColor: "green",
    width: "40%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoConteudo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    color: "white",
    fontSize: 24,
    marginRight: 8,
    fontFamily: "FonteTangerineNegrito",
  },
  iconeBotao: {
    width: 32,
    height: 32,
  },
  introText: {
    fontSize: 36,
    fontFamily: "FonteTangerineNegrito",
    color: "#a38a5a",
    textAlign: "center",
    marginVertical: 16,
    paddingHorizontal: 16
  },
});

export default Livros;