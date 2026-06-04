import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppText} from './AppText';
import {spacing, radius, colors} from '../theme';

export const LibraryStatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <View style={styles.card}>
    <AppText variant="heading" weight="700" style={styles.value}>
      {value}
    </AppText>
    <AppText variant="caption" color="muted">
      {label}
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingVertical: spacing.card,
    paddingHorizontal: spacing.md,
    marginRight: spacing.gutter,
    minHeight: 110,
  },
  value: {
    marginBottom: spacing.tiny,
  },
});
