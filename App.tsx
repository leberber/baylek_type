import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/BottomTabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer  >
        <TabNavigation />
      </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',

  },
});
