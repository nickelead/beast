import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type IProps = {};

export const Home = ({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
