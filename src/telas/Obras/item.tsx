import React, { useState } from "react";
import { Card, Modal, Portal, Provider } from "react-native-paper";
import { View, TouchableWithoutFeedback, Image, TouchableOpacity, StyleSheet } from "react-native";
import Texto from "../../componentes/Texto";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Tipagem para o contexto do gesto
type ContextType = {
  startScale: number;
};

export default function Item({ cadaObra: { id, titulo, descricao, imagem }, onFavoritar, categoria }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFavorito, setIsFavorito] = useState(categoria === "Favoritos"); // Pre-fill for "Favoritos"
  const scale = useSharedValue(1);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    scale.value = withTiming(1); // Reset zoom
  };

  const toggleFavorito = () => {
    setIsFavorito(!isFavorito);
    onFavoritar(); // Call the parent-provided function
  };

  // Manipulador de gesto de pinça (zoom)
  const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent, ContextType>({
    onStart: (_, ctx) => {
      ctx.startScale = scale.value;
    },
    onActive: (event, ctx) => {
      scale.value = ctx.startScale * event.scale;
    },
    onEnd: () => {
      scale.value = withTiming(1, { duration: 300 });
    },
  });

  // Estilo animado com base na escala
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Provider>
      <View>
        <Card mode="elevated">
          <Card.Content>
            <Texto style={{ fontFamily: "FonteTangerineNegrito", fontSize: 32, color: "#a38a5a" }}>
              {titulo}
            </Texto>
            <TouchableWithoutFeedback onPress={toggleModal}>
              <Card.Cover
                source={imagem}
                style={{ width: 400, height: 600, resizeMode: "contain" }}
              />
            </TouchableWithoutFeedback>
            <Texto style={{ fontFamily: "FonteRegular", fontSize: 24, color: "#a38a5a" }}>
              {descricao}
            </Texto>
            <TouchableOpacity onPress={toggleFavorito} style={styles.favoritoButton}>
              <Image
                source={
                  isFavorito
                    ? require("../../../assets/imagensapp/icones/coracao_preenchido.png")
                    : require("../../../assets/imagensapp/icones/coracao.png")
                }
                style={styles.favoritoIcon}
              />
            </TouchableOpacity>
          </Card.Content>
        </Card>

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={toggleModal}
            contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <PinchGestureHandler onGestureEvent={pinchHandler}>
              <Animated.View
                style={[{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, animatedStyle]}
              >
                <TouchableWithoutFeedback onPress={toggleModal}>
                  <Image
                    source={imagem}
                    style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                  />
                </TouchableWithoutFeedback>
              </Animated.View>
            </PinchGestureHandler>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  favoritoButton: {
    marginTop: 10, 
    alignSelf: "center",
  },
  favoritoIcon: {
    width: 24, 
    height: 24,
  },
});
