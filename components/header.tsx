import {View, Text, Image, StyleSheet, ImageSourcePropType} from "react-native"

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View style={styles.background}>
           <Image source={require("../assets/images/Logo.png")} style={styles.logo}/>
           <Text style={styles.title}>Rick And Morty API</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 140,
        height: 140,
        tintColor: "white"
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        color:"white"
    },
    
    background: {
        backgroundColor: "#5C5C5C",
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 10,
        paddingVertical: 30
    }
})