import React from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodEntryRow } from '../components';

export const History = () => {
  const { moodList } = useAppContext();

  return (
    <ScrollView>
      {moodList.map(entry => (
        <MoodEntryRow key={entry.timestamp} entry={entry} />
      ))}
    </ScrollView>
  );
};
