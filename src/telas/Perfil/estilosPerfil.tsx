import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    width: '80%',
    alignSelf: 'center',
  },
  fotoTiradaContainer: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: '10',
    marginBottom: 10,
  },
  camera: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    borderRadius: '10',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  cameraBotao: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  cameraTexto: {
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    alignContent: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: "purple",
  },
  input: {
    width: '70%',
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    borderRadius: 2,
  },
  fotoTirada: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    borderRadius: '10',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  botao:{
    width: '30%',
    backgroundColor: '#a38a5a',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  textoBotao:{
    width: '100%',
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default Styles;