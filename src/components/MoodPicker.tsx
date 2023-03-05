import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { moodOptions } from '../constants';

type IProps = {};

export const MoodPicker = ({}: IProps) => {
  return (
    <View style={styles.moodList}>
      {moodOptions.map(({ emoji }) => (
        <Text key={emoji} style={styles.moodText}>
          {emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodText: {
    fontSize: 24,
  },
});
