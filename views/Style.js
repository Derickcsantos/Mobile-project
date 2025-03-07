import { StyleSheet } from "react-native";

const style = StyleSheet.create( {
  body: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    elevation: 4, // Sombreamento para Android
    shadowColor: '#000', // Sombreamento para iOS
    shadowOffset: { width: 0, height: 2 }, // Sombreamento para iOS
    shadowOpacity: 0.1, // Sombreamento para iOS
    shadowRadius: 4, // Sombreamento para iOS
    width: 350
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#424242',
    borderRadius: 4,
    alignItems: 'center'
  },
  usuario:
  {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    boxSizing: 'border-box'
  },
  senha: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 4,
    boxSizing: 'border-box'
  },
  label: {
    marginBottom: 5,
    color: '#757575',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100, // Ajuste a largura da logo
    height: 100, // Ajuste a altura da logo
    marginBottom: 20, // Espaçamento abaixo da logo
    alignSelf: 'center', // Centraliza a logo horizontalmente
  },
} );

export { style };