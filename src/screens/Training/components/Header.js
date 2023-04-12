import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

import mainStyles from "../../../styles/main";

export default function Header(){
    return <>
        <View style={styles.mainHeader}>
            <Text style={mainStyles.title}>Treino TSKF</Text>
            <TouchableOpacity style={mainStyles.button}>
                <Text style={mainStyles.buttonText}>trocar treino</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.meHeader}>
            <Text style={mainStyles.textBig}>João</Text>
            <Text style={mainStyles.textBig}>Nível 1 (branca)</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#DDD",
        borderBottomWidth: 1,
        paddingVertical: 8,
        marginBottom: 8
    },
    meHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    }
})