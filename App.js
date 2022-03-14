import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from './components/BottomBar.js'
import MainTab from './components/MainTab.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MainTab/>
      <BottomBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(254,122,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
      fontSize: 25,
      fontWeight: 'bold',
  },
});
