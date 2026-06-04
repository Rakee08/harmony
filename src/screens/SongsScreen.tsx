import React from 'react';
import {StyleSheet} from 'react-native';
import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import {Card} from '../components/Card';
import {spacing} from '../theme';

export const SongsScreen = () => (
  <Screen scrollable style={styles.content}>
    <AppText variant="large" weight="700" style={styles.title}>
      Songs
    </AppText>
    <AppText variant="body" color="mutedLight" style={styles.subtitle}>
      Your recent queue and favorites.
    </AppText>
    <Card>
      <AppText variant="body" color="muted">
        Hardcoded songs content will appear here.
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
