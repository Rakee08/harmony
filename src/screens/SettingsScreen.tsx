import React from 'react';
import {StyleSheet} from 'react-native';
import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import {Card} from '../components/Card';
import {spacing} from '../theme';

export const SettingsScreen = () => (
  <Screen scrollable style={styles.content}>
    <AppText variant="large" weight="700" style={styles.title}>
      Settings
    </AppText>
    <AppText variant="body" color="mutedLight" style={styles.subtitle}>
      Manage app preferences and audio options.
    </AppText>
    <Card>
      <AppText variant="body" color="muted">
        Hardcoded settings content will appear here.
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
