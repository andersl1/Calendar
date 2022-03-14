import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';

/* BottomBar.js - currently does not function as a navigation bar, this will be implemented later
   instead acts as a placeholder for a future navigation bar
*/
const BottomBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert("that worked")} // alert when pressed 'that worked'
            >
                <Text style={styles.buttonFont}
                    // display 'Here we are'
                >
                    Here we are
                </Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
}

/* Styles: container wraps all
*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.0)',
      alignItems: 'center',
      paddingTop: 40,
      justifyContent: 'flex-start',
      width: '96%',
    },
    buttonFont: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(238, 81, 46, .5)',
        padding: 10,
        width: '100%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        height: 110,
    },
  });

  export default BottomBar;