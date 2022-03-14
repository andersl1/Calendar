import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

/* Tasks.js: a component for the tasks created by the user, each containing a time and a task
*/
const Tasks = (props) => {
    /* useState hook to determine if task checkbox has been
       pressed: initially set to false
    */
    const [completed, setCompleted] = useState(false);

    // test code: return 20
    const getChanged = () => {
        return 20;
    }

    return (
        <View style={[styles.container, { width: '94%' }]}>
            <TouchableOpacity
                style={styles.taskTab}
                disabled={true}
                onPress={() => {() => Alert.alert(getChanged())}} // alert 20 from getChanged when top tab pressed
            > 
                <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-start', padding: 15 }}>
                    <MaterialIcons 
                        name={completed ? "check-box" : "crop-square"} // switch the icon based on completion state
                        size={28} 
                        style={{ alignSelf: 'center', color: 'black'}}
                        onPress={() => setCompleted(completed ? false : true)} // if pressed, set completed to true and vice versa
                    />
                    <Text style={styles.taskFont}
                        // props.title passed in from MainTab.js: this determines the text of the given task 
                    >
                        {props.title}
                    </Text>
                </View>
                <View style={{ backgroundColor: 'white', width: 3, height: '100%' }}>
                        <Text>
                            
                        </Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'sans-serif-light' }}
                        // props.time passed in from MainTab.js: this determines the time of the given task
                    >
                        {props.time}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      );
}

/* Styles: container wraps all, taskTab wraps the text of the task, timeContainer wraps the time 'box'
*/ 
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        paddingTop: 20,
        flexDirection: 'row',
        paddingRight: 15,
    },
    taskTab: {
        borderWidth: 3,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: 'white',
        borderRadius: 20,
        width: '100%',
        flexDirection: 'row',
    },
    taskFont: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        alignSelf: 'center',
        paddingLeft: 15
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row', 
        alignSelf: 'center', 
        alignItems: 'flex-end',
        paddingHorizontal: 15,
    },
});

export default Tasks;