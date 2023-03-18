import React, { useCallback, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Reanimated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import format from 'date-fns/format';
import { MoodEntry } from '../models';
import { theme } from '../constants';

type IProps = {
  entry: MoodEntry;
  onDelete: (entry: MoodEntry) => void;
};

export const MoodEntryRow = ({ entry, onDelete }: IProps) => {
  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onDelete(entry);
  }, [entry, onDelete]);

  const removeWithDelay = useCallback(() => {
    setTimeout(() => handleDelete(), 250);
  }, [handleDelete]);

  const position = useSharedValue(0);

  const panGesture = useMemo(() => {
    return Gesture.Pan()
      .activeOffsetY([-100, 100])
      .activeOffsetX([-1, 1])
      .onUpdate(event => {
        position.value = Math.floor(event.translationX);
      })
      .onEnd(event => {
        if (Math.abs(event.translationX) < 80) {
          position.value = withTiming(0);
        } else {
          runOnJS(removeWithDelay)();
        }
      });
  }, [position, removeWithDelay]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Reanimated.View
        style={[styles.moodItem, animatedStyle]}
        collapsable={false}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodIcon}>{entry.mood.emoji}</Text>
          <Text style={styles.moodDescription}>{entry.mood.description}</Text>
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(entry.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
        <Pressable hitSlop={16} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </Reanimated.View>
    </GestureDetector>
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
  deleteText: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyLight,
  },
});
