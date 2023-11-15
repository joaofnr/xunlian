import React, { useEffect, useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import mainStyles from "../../../styles/main";
import { tempoParaSegundos } from "../../../common/utils/time"

export default function Lesson({current, previous, next}){    
    
    const [timer, setTimer] = useState()
    const [started, setStarted] = useState(false)
    let timeout

    useEffect(() => {
        if(started) {
            console.log('started')
            timerControl(timer)
        } else {
            console.log('stopped')
            clearTimeout(timeout)
            
        }
    }, [started])

    const timerControl = (time) => {
        console.log({timer, started})
        timeout = setTimeout(() => {
            if (time > 0) {
                setTimer(time - 1)
                return timerControl(time - 1)
            }
            console.log('acabou')
        }, 1000)
    }
    
    if(!current) return <></>
    return (
        <View style={[mainStyles.container, styles.lessonContainer]}>
            <TouchableOpacity onPress={previous}>
                <Text>&lt; Anterior</Text>
            </TouchableOpacity>
            <View style={mainStyles.textCenter}>
                <View>
                    <Text style={[mainStyles.textCenter, mainStyles.textBigger, styles.name]}>{current.name}</Text>
                    <Text style={[mainStyles.textCenter, mainStyles.textGiant, styles.timer]}>{timer}</Text>
                </View>

                <TouchableOpacity style={[mainStyles.button, styles.button]}
                    onPress={() => setStarted(!started)}>
                    <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>
                        {started ? 'Parar' : 'Iniciar'}
                    </Text>
                </TouchableOpacity>

                <View style={styles.levelContainer}>
                    <TouchableOpacity disabled={started} style={[mainStyles.button]}
                        onPress={() => setTimer(tempoParaSegundos(current.timers.easy))}>
                        <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={started} style={[mainStyles.button]}
                        onPress={() => setTimer(tempoParaSegundos(current.timers.normal))}>
                        <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={started} style={[mainStyles.button]}
                        onPress={() => setTimer(tempoParaSegundos(current.timers.hard))}>
                        <Text style={[mainStyles.textCenter, mainStyles.buttonText]}>Difícil</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity onPress={next}>
                <Text>Próximo &gt;</Text>
            </TouchableOpacity>
        </View>
    )
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
        justifyContent: 'center',
        width: '100%'
    }
})