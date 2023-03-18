import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppContext } from '../App.provider';
import { VictoryPie } from 'victory-native';
import { theme } from '../constants';

export const Analytics = () => {
  const { moodList } = useAppContext();

  const data = useMemo(() => {
    const options = moodList.reduce((acc, item) => {
      if (acc[item.mood.emoji] !== undefined) {
        return {
          ...acc,
          [item.mood.emoji]: acc[item.mood.emoji] + 1,
        };
      }
      return {
        ...acc,
        [item.mood.emoji]: 1,
      };
    }, {} as Record<string, number>);

    return Object.entries(options)
      .map(([key, value]) => ({ x: key, y: value }))
      .filter(({ y }) => y);
  }, [moodList]);

  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        labelRadius={80}
        radius={150}
        innerRadius={50}
        style={{ labels: { fontSize: 30 } }}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
