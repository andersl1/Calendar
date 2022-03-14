import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';

const BottomBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert("God dam lol that worked")}
            >
                <Text style={styles.buttonFont}>
                    Here we are
                </Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
}

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