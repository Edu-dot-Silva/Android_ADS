import React, { useState, useRef } from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image, Animated } from "react-native";
import lista_obras from "../../mocks/listaObras";
import lista_engenharia from "../../mocks/listaEngenharia";
import lista_ciencia from "../../mocks/listaCiencia";
import lista_escritos from "../../mocks/listaEscritos";

//layout das obras
import Item from "./item";

export default function Index() {
  const [categoria, setCategoria] = useState("Arte");
  const [listaFavoritos, setListaFavoritos] = useState([]); // State to store favorite items
  const fadeAnim = useRef(new Animated.Value(1)).current; // Animação de opacidade
  const slideAnim = useRef(new Animated.Value(0)).current; // Animação de deslocamento

  const categorias = ["Arte", "Engenharia", "Ciência", "Cadernos", "Favoritos"]; // Add "Favoritos" to the categories
  const dados =
    categoria === "Arte"
      ? lista_obras.obras
      : categoria === "Engenharia"
      ? lista_engenharia.obras
      : categoria === "Ciência"
      ? lista_ciencia.obras
      : categoria === "Cadernos"
      ? lista_escritos.obras
      : { lista: listaFavoritos }; // Use listaFavoritos for "Favoritos"

  const proximaCategoria = () => {
    const indexAtual = categorias.indexOf(categoria);
    const proximoIndex = (indexAtual + 1) % categorias.length;
    setCategoria(categorias[proximoIndex]); // Atualiza a categoria imediatamente

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Aumentado para suavizar a transição
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 500, // Aumentado para suavizar a transição
        useNativeDriver: true,
      }),
    ]).start(() => {
      slideAnim.setValue(-100); // Reseta a posição para a animação de entrada
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500, // Aumentado para suavizar a transição
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500, // Aumentado para suavizar a transição
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const adicionarAosFavoritos = async (obra) => {
    try {
      if (categoria === "Favoritos") {
        // Remove from favorites if in "Favoritos" category
        setListaFavoritos((prevFavoritos) =>
          prevFavoritos.filter((item) => item.id !== obra.id)
        );
        console.log(`Removendo ${obra.titulo} dos favoritos...`);
      } else {
        // Add to favorites if not already in the list
        console.log(`Adicionando ${obra.titulo} aos favoritos...`);
        setListaFavoritos((prevFavoritos) => {
          if (prevFavoritos.some((item) => item.id === obra.id)) {
            return prevFavoritos;
          }
          return [...prevFavoritos, obra];
        });
      }
    } catch (error) {
      console.error("Erro ao gerenciar favoritos:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Cabeçalho com botão de navegação */}
      <View style={styles.header}>
        <TouchableOpacity onPress={proximaCategoria} style={styles.button}>
          <Image
            source={require("../../../assets/imagensapp/icones/esquerda.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Animated.Text
          style={[
            styles.headerText,
            { opacity: fadeAnim, transform: [{ translateX: slideAnim }] },
          ]}
        >
          {categoria}
        </Animated.Text>
        <TouchableOpacity onPress={proximaCategoria} style={styles.button}>
          <Image
            source={require("../../../assets/imagensapp/icones/direita.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de itens */}
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {categoria === "Favoritos" && listaFavoritos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sem obras favoritadas</Text>
          </View>
        ) : (
          <FlatList
            data={dados.lista}
            renderItem={({ item }: any) => (
              <Item
                cadaObra={item}
                onFavoritar={() => adicionarAosFavoritos(item)}
                categoria={categoria} // Pass the current category
              />
            )}
            keyExtractor={(item) => item.titulo}
          />
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  headerText: {
    fontSize: 64,
    color: "#a38a5a",
    fontFamily: "FonteTangerineNegrito",
  },
  button: {
    padding: 20, // Aumentado para aumentar o tamanho do botão
  },
  icon: {
    width: 48, // Aumentado para aumentar o tamanho do ícone
    height: 48, // Aumentado para aumentar o tamanho do ícone
  },
  iconFlipped: {
    transform: [{ rotate: "180deg" }],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 32, // Increased font size
    color: "#a38a5a",
    fontFamily: "FonteRegular",
  },
});