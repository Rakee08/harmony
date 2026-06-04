import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppText} from './AppText';
import {spacing, radius, colors} from '../theme';

export const LibraryTileCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <View style={styles.card}>
    <View style={styles.iconPlaceholder} />
    <AppText variant="body" weight="700" style={styles.title}>
      {title}
    </AppText>
    <AppText variant="caption" color="muted">
      {subtitle}
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 130,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    marginBottom: spacing.gutter,
  },
  iconPlaceholder: {
    width: spacing.iconLg,
    height: spacing.iconLg,
    borderRadius: radius.md,
    backgroundColor: colors.cardAlt,
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.tiny,
  },
});
