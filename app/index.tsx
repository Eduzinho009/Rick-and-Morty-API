import { router } from "expo-router";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const onPress = () => {
        router.push("/(tabs)");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../assets/images/Fundo.png")} style={styles.background}>
                <View style={styles.center}>
                    <Text style={styles.texto}>Rick And Morty API</Text>

                    <Image source={require("../assets/images/rick.png")} style={styles.Rickimage} />

                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.btnText}>ENTRAR NA API</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    background: {
        flex: 1, 
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: 380,
        height: 1000
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: "white",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
    },
    Rickimage: {
        width: 400,
        height: 400,
        resizeMode: "contain",
    },
    button: {
        backgroundColor: "transparent",
        width: 180,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 999,
        borderWidth: 2, 
        borderColor: "white", 
        borderStyle: "solid", 
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});
