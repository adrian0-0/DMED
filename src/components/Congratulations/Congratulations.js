import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SingIn() {
    const navigation = useNavigation();

    return(
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("StartPage")}>
                    <Image source={require("../../assets/med-car.png")}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.sucess_login}>Você foi Logado com Sucesso</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    sucess_login: {
        fontSize: 20,
        color: "green" 
    }
})
