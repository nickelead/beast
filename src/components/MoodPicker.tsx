import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { moodOptions } from '../constants';
import type { MoodOption } from '../models';

type IProps = {};

export const MoodPicker = ({}: IProps) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>();

  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            key={option.emoji}
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji ? option.description : ' '}
          </Text>
        </View>
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
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
