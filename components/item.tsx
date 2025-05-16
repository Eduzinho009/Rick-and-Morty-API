import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({ name, planet, species, location, image }: { name: string; planet: string; species: string; location: string; image: string }) => {
    return (
        <View style={styles.tela}>
            <View style={styles.itemList}>
                <Image style={styles.imageStyle} source={{ uri: image }} />

                {/* Fundo azul abaixo da imagem */}
                <View style={styles.textos}>
                    <Text style={styles.Nome}>{name}</Text>
                    <Text style={styles.titulos}>Planeta:</Text>
                    <Text style={styles.text}>{planet}</Text>
                    <Text style={styles.titulos}>Espécie:</Text>
                    <Text style={styles.text}>{species}</Text>
                    <Text style={styles.titulos}>Localização:</Text>
                    <Text style={styles.text}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tela: {
        flex: 1, // Garante que a tela ocupa todo o espaço
        backgroundColor: "#272B33",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    itemList: {
        flexDirection: "column",
        alignItems: "center",
        width: 200,
        height: 340,
        marginBottom: 50,
        borderRadius: 10,
        padding: 10,
    },
    imageStyle: {
        width: 200,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textos: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#5C5C5C",
        width: 200,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: "light",
        color: "white",
        textAlign: "center",
    },
    Nome: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 5,
    },
    titulos: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 5,
    },
});
