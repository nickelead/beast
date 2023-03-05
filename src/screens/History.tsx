import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type IProps = {};

export const History = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
