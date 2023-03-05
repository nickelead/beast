import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components';

type IProps = {};

export const Home = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
