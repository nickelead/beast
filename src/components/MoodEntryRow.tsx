import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import format from 'date-fns/format';
import { MoodEntry } from '../models';
import { theme } from '../constants';

type IProps = {
  entry: MoodEntry;
};

export const MoodEntryRow = ({ entry }: IProps) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodIcon}>{entry.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{entry.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(entry.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moodItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodIcon: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  moodDate: {
    color: theme.colorLavender,
    textAlign: 'center',
    fontFamily: theme.fontFamilyRegular,
  },
});
