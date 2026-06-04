import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import {Card} from '../components/Card';
import {spacing} from '../theme';

export const AlbumsScreen = () => (
  <Screen scrollable style={styles.content}>
    <AppText variant="large" weight="700" style={styles.title}>
      Albums
    </AppText>
    <AppText variant="body" color="mutedLight" style={styles.subtitle}>
      All your collections in one place.
    </AppText>
    <Card>
      <AppText variant="body" color="muted">
        Hardcoded albums content will appear here.
      </AppText>
    </Card>
  </Screen>
);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.container,
    paddingVertical: spacing.md,
  },
  title: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    marginBottom: spacing.lg,
  },
});
