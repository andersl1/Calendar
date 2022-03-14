import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Alert, Button } from 'react-native';
import { useState } from 'react';
import Tasks from './Tasks.js';
import { MaterialIcons } from '@expo/vector-icons';

const MainTab = () => {
    const [pressed, setPressed] = useState(false);

    const getDate = () => {
        var date = new Date().toLocaleString().substring(0, 10);
        
        if (date.includes("Jan")) {
            date = date.replace("Jan", "January");
        } else if (date.includes("Feb")) {
            date = date.replace("Feb", "February");
        } else if (date.includes("Mar")) {
            date = date.replace("Mar", "March")
        }

        return date;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.main}
                onPress={() => setPressed(!pressed)}
                delayLongPress={150}
                onLongPress={() => Alert.alert("Hey there " + pressed.toString())}
            >
                <View>
                    <MaterialIcons 
                        name="add-task" 
                        size={22}
                        onPress={() => Alert.alert("Hi there")} 
                        style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 10, paddingRight: 15 }} 
                    />
                    <Text style={styles.tabFont}>
                        {getDate()}
                    </Text>
                </View>
                {/* <TouchableOpacity
                    style={styles.impliedButton}
                    disabled={true}
                >
                    <Text style={({ fontSize: 18, paddingLeft: 15 })}>
                        {pressed ? "1st tab" : "2nd tab"}
                    </Text>
                </TouchableOpacity> */}
                <Tasks 
                    title="Hey there!"
                    time="10:30"
                    id = {'90%'}
                />
                <Tasks 
                    title="Hey"
                    time="11:30"
                    id = {'60%'}
                />
                <Tasks 
                    title="Thats"
                    time="11:30"
                    id = {'60%'}
                />
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        paddingTop: 40,
        width: '96%',
        flexDirection: 'column'
    },
    tabFont: {
        fontSize: 25,
        fontWeight: 'normal',
        fontFamily: 'sans-serif-light',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    impliedButton: {
        backgroundColor: 'white',
        padding: 10,
        height: 50,
        borderBottomWidth: 1.5,
    },
    main: {
        backgroundColor: 'rgba(254,122,0,0.5)',
        height: '96%',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
    }
});

export default MainTab;