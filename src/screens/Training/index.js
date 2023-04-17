import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

import Header from './components/Header'
import Lesson from './components/Lesson'
import lessons from "../../lists/tskf/lessons";
import mainStyles from "../../styles/main";

export default function Training(){
    const [lessonsList, setLessonsList] = useState([...lessons['001'].list])
    const [currentLesson, setCurrentLesson] = useState(lessons['001'].list[0])

    /*
    // consecutive lesson training switcher function
    const switchForm = (index, enable) => {
        setLessonsList(prevList => {
            const updatedList = [...prevList];
            updatedList[index].enabled = enable;
            return updatedList;
        });
    }*/

    const previousLesson = () => {
        const index = lessonsList.findIndex(item => item.name === currentLesson.name);
        if(index === 0) return;
        setCurrentLesson(lessonsList[index - 1]);
    }

    const nextLesson = () => {
        const index = lessonsList.findIndex(item => item.name === currentLesson.name);
        if(index === lessonsList.length - 1) return;
        setCurrentLesson(lessonsList[index + 1]);
    }

    return (
        <FlatList 
            style={[mainStyles.container, styles.list]}
            data={lessonsList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={
                ({ item, index }) => {
                    return <View style={styles.listItem}>
                        {/*
                        // switcher for consecutive lessons training
                         <Switch
                            onValueChange={(newValue) => switchForm(index, newValue)}
                            value={item.enabled} /> */}
                            <TouchableOpacity onPress={()=>setCurrentLesson(item)}>
                                <Text style={styles.listItem_text}>{item.name}</Text>
                            </TouchableOpacity>
                    </View>
                }
            }
            ListHeaderComponent={<Header />}
            ListFooterComponent={<Lesson current={currentLesson} previous={previousLesson} next={nextLesson} />}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#FFF',
    },
    listItem: {
        backgroundColor: '#CCC',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 8
    },
    listItem_text: {
        fontSize: 14,
    }
})