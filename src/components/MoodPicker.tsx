import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { moodOptions, theme } from '../constants';
import type { MoodOption } from '../models';

type IProps = {
  onSelect: (mood: MoodOption) => void;
};

export const MoodPicker = ({ onSelect }: IProps) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>();

  const handleSelect = useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood);
      setSelectedMood(undefined);
    }
  }, [onSelect, selectedMood]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
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
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
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
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colorWhite,
    fontWeight: 'bold',
  },
});
