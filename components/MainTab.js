import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import Tasks from './Tasks.js';
import { MaterialIcons } from '@expo/vector-icons';

/* MainTab.js: a component that includes all of the tasks and displays the current date
   will eventually allow user to create tabs using keyboard and longpress (or press on top right icon)
*/
const MainTab = () => {
    // pressed is initialized to false
    const [pressed, setPressed] = useState(false);

    /* getDate - returns the current date, replacing the given 
        date with text that displays the entire name of the month
    */
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
                onPress={() => setPressed(!pressed)} // set the press to the opposite of the current value: can be done with (!) or (: false ? true)
                delayLongPress={150}
                onLongPress={() => Alert.alert("Hey there " + pressed.toString())}
            >
                <View>
                    {/*
                    */}
                    <MaterialIcons 
                        name="add-task" 
                        size={22}
                        onPress={() => Alert.alert("Hi there")} // alert 'Hi there' for now
                        style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 10, paddingRight: 15 }} 
                    />
                    <Text style={styles.tabFont}>
                        {getDate()} {/* show the date */}
                    </Text>
                </View>
                {/*
                    Each task is currently being created individually for testing, as opposed to being created by the user
                    through keyboard input. Each contains a time and a title representing the text of the Task
                */}
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

/* Styles: container wraps all, main wraps all (will have to switch this around)
*/
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