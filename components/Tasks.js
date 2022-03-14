import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
// import Icon from 'react-native-ionicons';
// import { Icon } from 'react-native-vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Tasks = (props) => {
    const [completed, setCompleted] = useState(false);

    const getChanged = () => {
        return 20;
    }

    return (
        <View style={[styles.container, { width: '94%' }]}>
            <TouchableOpacity
                style={styles.taskTab}
                disabled={true}
                onPress={() => {() => Alert.alert(getChanged())}}
            > 
                <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-start', padding: 15 }}>
                    <MaterialIcons 
                        name={completed ? "check-box" : "crop-square"}
                        size={28} 
                        style={{ alignSelf: 'center', color: 'black'}}
                        onPress={() => setCompleted(completed ? false : true)}
                    />
                    <Text style={styles.taskFont}>
                        {props.title}
                    </Text>
                </View>
                <View style={{ backgroundColor: 'white', width: 3, height: '100%' }}>
                        <Text>
                            
                        </Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'sans-serif-light' }}>
                        {props.time}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      );
}

//style={styles.container}
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