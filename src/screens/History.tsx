import React from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodEntryRow } from '../components';

export const History = () => {
  const { moodList, handleDeleteEntry } = useAppContext();

  return (
    <ScrollView>
      {moodList
        .slice()
        .reverse()
        .map(entry => (
          <MoodEntryRow
            key={entry.timestamp}
            entry={entry}
            onDelete={handleDeleteEntry}
          />
        ))}
    </ScrollView>
  );
};
