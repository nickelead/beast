import React from 'react';
import { Platform, StyleSheet, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './BottomTabs.navigator';
import { AppProvider } from './App.provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={styles.gestureRootView}>
          <BottomTabsNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  gestureRootView: { flex: 1 },
});
export default App;
