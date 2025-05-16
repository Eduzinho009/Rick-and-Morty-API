import { router, Stack } from 'expo-router';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  const onPress = () => {
    router.push("/");
  };

  return (
    <>
      <Stack.Screen options={{ headerStyle: { backgroundColor: "#C4C4C4" }, title:"" }} />
      <View style={styles.container}>
        <div style={styles.alinhar}>
        <Text style={styles.texto}>Erro 404</Text><br />
        <Text style={styles.texto}>Pagina Não encontrada</Text>
        </div>
        <div style={styles.alinharBtn}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>Voltar para a página inicial</Text>
        </TouchableOpacity>
        </div>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#C4C4C4",
  },
  alinhar:{
    marginLeft: 40
  },
  texto:{
    fontWeight: "bold",
    fontSize: 35,
  },

  button:{
    backgroundColor: "#D9D9D9",
    width: 230,
    height: 40,
    borderRadius: 5,
  },
  btnText:{
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
    fontWeight: "bold",
  },
  alinharBtn:{
    marginLeft: 40,
    marginTop: 30
  },
});
