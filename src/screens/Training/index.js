import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, Switch } from "react-native";

import Header from './components/Header'
import Lesson from './components/Lesson'
import lessons from "../../lists/tskf/lessons";
import mainStyles from "../../styles/main";

export default function Training(){
    const [lessonsList, setLessonsList] = useState([...lessons['001'].list])
    const HeaderList = () => {
        return <><Header /></>
    }
    const FooterList = () => {
        return <><Lesson /></>
    }

    const switchForm = (index, enable) => {
        const getList = lessonsList
        const item = getList[index]
        item.enabled = enable
        setLessonsList([...getList])
    }

    return <View>
        <HeaderList />
        <FlatList 
            style={[mainStyles.container, styles.list]}
            data={lessonsList}
            renderItem={
                ({ item, index }) => {
                    return <View style={styles.listItem}>
                        <Switch
                            onValueChange={(newValue) => switchForm(index, newValue)}
                            value={item.enabled} />
                        <Text style={styles.listItem_text}>{item.name}</Text>
                    </View>
                }
            }
        />
        <FooterList />
    </View>

    // return <FlatList 
    //     style={[mainStyles.container, styles.list]}
    //     data={lessons['001'].list}
    //     renderItem={
    //         ({ item }) => {
    //             return <View style={styles.listItem}>
    //                 <Switch />
    //                 <Text style={styles.listItem_text}>{item.name}</Text>
    //             </View>
    //         }
    //     }
    //     ListHeaderComponent={HeaderList}
    //     ListFooterComponent={FooterList}
    // />
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#FFF',
    },
    listItem: {
        backgroundColor: '#CCC',
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 28,
        padding: 8
    },
    listItem_text: {
        fontSize: 14,
    }
})