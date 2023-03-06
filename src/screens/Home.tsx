import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodEntryRow, MoodPicker } from '../components';
import type { MoodEntry, MoodOption } from '../models';

type IProps = {};

export const Home = ({}: IProps) => {
  const [moodList, setMoodList] = useState<MoodEntry[]>([]);

  const handleSelectMood = useCallback((mood: MoodOption) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(entry => (
        <MoodEntryRow key={entry.timestamp} entry={entry} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
