import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export const Item = ({ name, planet, species, location, image }: { name: string; planet: string; species: string; location: string; image: string }) => {
    return (
        <View style={styles.tela}>
            <View style={styles.itemList}>
                <Image style={styles.imageStyle} source={{ uri: image }} />

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
        flex: 1, 
        backgroundColor: "#272B33",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    itemList: {
        flexDirection: "row", 
        alignItems: "flex-start",
        width: 180, 
        height: 340,
        marginHorizontal: 15, 
        borderRadius: 10,
        padding: 10,
        marginRight: 215
    },
    imageStyle: {
        width: 180,
        minHeight: 192,
        maxHeight: 230,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 1
    },
    textos: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#5C5C5C",
        width: 180,
        height: 193,
        paddingVertical: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    text: {
        fontSize: 12,
        fontWeight: "light",
        color: "#88e23b",
        textAlign: "center",
    },
    Nome: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 5,
    },
    titulos: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 5,
    },
});
