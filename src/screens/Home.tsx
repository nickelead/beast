import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components';
import { useAppContext } from '../App.provider';

export const Home = () => {
  const { handleAddEntry } = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleAddEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
