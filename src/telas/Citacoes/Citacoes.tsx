import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Citacoes = () => {
  const quotes = [
    "A simplicidade é o último grau de sofisticação.",
    "A arte é a expressão do mais profundo pensamento de forma mais simples.",
    "A pintura é uma coisa mental, a imagem do pensamento.",
    "Nada é mais difícil de fazer do que tomar uma decisão.",
    "Quem sabe aprenderá sempre a aprender.",
    "O estudo nunca cansa a mente.",
    "A sabedoria é a filha da experiência.",
    "O homem que não sabe o que é a vida não pode ser verdadeiro consigo mesmo.",
    "A vida é breve, a arte longa, a ocasião fugaz, a experiência enganosa, o julgamento difícil.",
    "A vida é feita de escolhas, e cada escolha é uma decisão."
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Citações de Da Vinci</Text>
      {quotes.map((quote, index) => (
        <View key={index}>
          <Text style={styles.quote}>"{quote}"</Text>
          {index < quotes.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 64,
    fontFamily: "FonteTangerineNegrito",
    color: "#a38a5a",
    textAlign: "center",
    marginBottom: 24,
  },
  quote: {
    fontSize: 54,
    marginBottom: 12,
    fontFamily: "FonteRegular",
    color: "#a38a5a",
    textAlign: "center",
  },
  separator: {
    height: 3,
    backgroundColor: "#ccc",
    marginVertical: 12,
    alignSelf: "center",
    width: "10%",
  },
});

export default Citacoes;