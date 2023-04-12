import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import mainStyles from "../../../styles/main";

export default function Lesson(){
    return <>
    <View style={[mainStyles.container, styles.lessonContainer]}>
        <TouchableOpacity>
            <Text>&lt; Anterior</Text>
        </TouchableOpacity>
        <View style={mainStyles.textCenter}>
            <Text style={[mainStyles.textCenter, mainStyles.textBigger, styles.name]}>Aplicações Fu Xi Xuan</Text>
            <Text style={[mainStyles.textCenter, mainStyles.textGiant, styles.timer]}>01:30</Text>
            <TouchableOpacity style={[mainStyles.button, styles.button]}>
                <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Começar</Text>
            </TouchableOpacity>
            <View style={styles.levelContainer}>
                <TouchableOpacity style={[mainStyles.button]}>
                    <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Fácil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[mainStyles.button]}>
                    <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Normal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[mainStyles.button]}>
                    <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Difícil</Text>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity>
            <Text>Próximo &gt;</Text>
        </TouchableOpacity>
    </View>
    </>
}

const styles = StyleSheet.create({
    lessonContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%'
    },
    name: {
        marginBottom: 12
    },
    timer: {
        marginBottom: 18
    },
    button: {
        maxWidth:120,
        alignSelf: 'center'
    },
    levelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
})