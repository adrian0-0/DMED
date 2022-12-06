import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native";
import styles from "../Sing_in/Sing_in"

export default function StartPage() {
    const navigation = useNavigation();

    return(
        
        <View>
            <View style={StartPage_styl.container_logo}>
                <View>
                    <Text style={StartPage_styl.h1}>Bem Vindo</Text>
                </View>
                <View  style={[StartPage_styl.container, StartPage_styl.block]}>
                    <Animatable.Image 
                        animation="flipInY"
                        source={require("../../assets/med-car.png")} 
                        style={StartPage_styl.medCar_logo} 
                        resizeMode="contain"
                    />
                    
                </View>

            </View>
            
            <View style={StartPage_styl.login_container}>
                <View style={StartPage_styl.logo_subtitle}>
                    <View><Text  style={StartPage_styl.main_slogan}>GMED entregando inovação e rapidez no atendimento</Text></View>
                    <View><Text  style={StartPage_styl.button_loginDescription}>Faça o seu login rápido por aqui:</Text></View>
                </View>
                <View style={StartPage_styl.button_blockEntrar}>
                    <Animatable.View animation="swing" style={StartPage_styl.animate_button}>
                        <TouchableOpacity style={[StartPage_styl.button, StartPage_styl.button_Touchable] } onPress={() => navigation.navigate("Sing_in")}>
                            <Text style={StartPage_styl.button_text}>ACESSAR</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <TouchableOpacity style={StartPage_styl.buttonRegister}>
                        <Text style={StartPage_styl.registerText}>Não possui uma conta? Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const StartPage_styl = StyleSheet.create({


    h1: {
        backgroundColor: "#38a69d",
        textAlign: "center",
        color: "#fff"
    },

    logo_subtitle: {
        marginLeft: 10,
    },

    container: {
        // position: "absolute",
        marginTop :50,
        marginBottom: 50

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


    button_blockEntrar: {
        // flex: "1"
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_Entrar: {
        borderRadius: 30,
        paddingVertical: 8,
        width: '60%'
    },

    button_Touchable: {
        height: 40,
        width:300,
        borderRadius:10,
        marginLeft :50,
        marginRight:50,
 
    },

    // button: {
    //     position: "absolute",
    //     backgroundColor: "#fff",
    //     borderRadius: 40,
    //     paddingVertical: 8,
    //     bottom: '35%',
    //     paddingStart: "53%",
    //     paddingEnd: "53%"

    //     // marginTop 20
    // },

    main_slogan: {
        fontSize: 30

    },

    button_loginDescription: {
        fontSize: 20
    },

    medCar_logo: {
        width: "100%",
        // marginTop: "20" 
    },

    animate_button: {
        marginTop: 30
    }
})