import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>My name is <Text style ={styles.subText}>Felix Etornam Donkor</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText:{
    fontSize: 24,
  },
  subText:{
    fontWeight: 'bold',
  }
});
