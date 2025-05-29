import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button, Animated, TouchableOpacity } from "react-native";

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
    "A vida é feita de escolhas, e cada escolha é uma decisão.",
    "Aprender nunca esgota a mente.",
    "A experiência é uma mestra dura, porque dá o teste antes da lição.",
    "Assim como um dia bem aproveitado traz um sono feliz, uma vida bem vivida traz uma morte feliz.",
    "A natureza é a fonte de todo verdadeiro conhecimento.",
    "Quem semeia virtude colhe honra.",
    "Onde o espírito não trabalha com a mão, não há arte.",
    "A água é a força motriz de toda a natureza.",
    "O maior engano do homem é pensar que possui a verdade.",
    "Todo o nosso conhecimento tem origem em nossas percepções.",
    "A ciência é o capitão, e a prática são os soldados."
  ];

  const [currentQuote, setCurrentQuote] = useState("");
  const fadeAnim = useState(new Animated.Value(0))[0];

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    fadeAnim.setValue(0); // Reset animation value
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Citações de Da Vinci</Text>
        <Text style={styles.description}>
          Explore a mente genial de Leonardo da Vinci através de suas próprias palavras. 
          Esta página reúne pensamentos, reflexões e citações que revelam o olhar único do mestre 
          sobre arte, ciência, natureza e a vida.
        </Text>
        <Animated.View style={[styles.quoteContainer, { opacity: fadeAnim }]}>
          <Text style={styles.quote}>"{currentQuote}"</Text>
        </Animated.View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generateRandomQuote}>
          <Text style={styles.buttonText}>Gerar Citação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 64,
    fontFamily: "FonteTangerineNegrito",
    color: "#a38a5a",
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    fontFamily: "FonteRegular",
    color: "#a38a5a",
    textAlign: "center",
    marginBottom: 24,
  },
  quoteContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  quote: {
    fontSize: 54,
    marginBottom: 12,
    fontFamily: "FonteTangerineNegrito",
    color: "#a38a5a",
    textAlign: "center",
    marginTop: 24,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  button: {
    backgroundColor: "#a38a5a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "FonteTangerineNegrito",
  },
});

export default Citacoes;