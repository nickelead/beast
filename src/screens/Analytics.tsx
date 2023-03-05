import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type IProps = {};

export const Analytics = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
