import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function SingIn() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("StartPage")}>
                    <Image source={require("../../assets/med-car.png")}/>
                </TouchableOpacity>
            </View>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Faça seu Login:</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Código de Motorista

</Text>
                <TextInput placeholder="Digite o numero de motorista..." style={styles.input}></TextInput>
                
                <Text style={styles.title}>Código do Veículo</Text>
                <TextInput placeholder="O Numero do seu veículo
" style={styles.input}></TextInput>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Congratulations")}>
                    <Text style={styles.button_text}>ACESSAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>

    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00BCBF"
    },

    containerHeader:{
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff"    
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center"
    },

    button_text: {
        color: "#ffffff",
        fontWeight: "bold"
    },

    registerText: {
        color: "a1a1a1"
    }

})
