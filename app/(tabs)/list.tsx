import { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { Item } from "@/components/horizontal";

export default function List() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character") // Requisição para a API
            .then((response) => response.json())
            .then((json) => {
                setData(json.results); // Define os dados dos personagens
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <View style={styles.center}>
                <Text style={styles.title}>API na Horizontal</Text>
            </View>

            <SafeAreaView style={styles.container}>
                {loading ? (
                    <ActivityIndicator size="large" color="green" />
                ) : (
                  <FlatList
                  style={styles.back}
                  data={data}
                  renderItem={({ item }) => (
                      <Item 
                          name={item.name} 
                          planet={item.origin.name} 
                          species={item.species} 
                          location={item.location.name} 
                          image={item.image} 
                      />
                  )}
                  keyExtractor={(item) => item.id.toString()}
              />
              
              
                )}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        backgroundColor:"#272B33"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    container: {
        flex: 1,
        backgroundColor:"#272B33"
    },
    back: {
      flex: 1,
        paddingHorizontal: 20,
        display:"flex",
        flexDirection: "column",
    },
});
