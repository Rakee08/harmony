import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Screen} from '../components/Screen';
import {AppText} from '../components/AppText';
import {Card} from '../components/Card';
import {LibraryStatCard} from '../components/LibraryStatCard';
import {LibraryTileCard} from '../components/LibraryTileCard';
import {spacing, radius, colors} from '../theme';

const tiles = [
  {title: 'Songs', subtitle: '2,184 tracks'},
  {title: 'Albums', subtitle: '124 collections'},
  {title: 'Artists', subtitle: '89 performers'},
  {title: 'Playlists', subtitle: '12 curated lists'},
];

export const LibraryScreen = () => (
  <Screen scrollable style={styles.content}>
    <View style={styles.topRow}>
      <AppText variant="title">Library</AppText>
      <AppText variant="body" color="mutedLight" style={styles.subtitle}>
        Your recent listening, stats, and collections.
      </AppText>
    </View>

    <Card style={styles.recentCard}>
      <AppText variant="caption" color="muted" style={styles.recentLabel}>
        RECENTLY PLAYED
      </AppText>
      <AppText variant="heading" style={styles.recentTitle}>
        Dream in Purple
      </AppText>
      <AppText variant="xsmall" color="mutedLight" style={styles.recentMeta}>
        Torn Sounds • 24 tracks
      </AppText>
      <View style={styles.recentFooter}>
        <Card style={styles.recentBadge}>
          <AppText variant="caption" weight="700">
            Ambient
          </AppText>
        </Card>
        <AppText variant="caption" color="muted">
          2h 16m
        </AppText>
      </View>
    </Card>

    <View style={styles.sectionHeader}>
      <AppText variant="large" weight="700">
        Quick Stats
      </AppText>
    </View>
    <View style={styles.statsRow}>
      <LibraryStatCard value="1,234" label="Songs" />
      <LibraryStatCard value="160" label="Albums" />
      <LibraryStatCard value="89" label="Artists" />
    </View>

    <View style={styles.sectionHeader}>
      <AppText variant="large" weight="700">
        Browse
      </AppText>
      <AppText variant="caption" color="muted">
        Jump back into your library collections
      </AppText>
    </View>
    <View style={styles.tileGrid}>
      {tiles.map(tile => (
        <LibraryTileCard
          key={tile.title}
          title={tile.title}
          subtitle={tile.subtitle}
        />
      ))}
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.container,
    paddingVertical: spacing.md,
  },
  topRow: {
    marginBottom: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
    maxWidth: '90%',
  },
  recentCard: {
    marginBottom: spacing.lg,
    borderRadius: radius.xl,
  },
  recentLabel: {
    marginBottom: spacing.tiny,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  recentTitle: {
    marginBottom: spacing.tiny,
  },
  recentMeta: {
    marginBottom: spacing.md,
  },
  recentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentBadge: {
    borderRadius: radius.pill,
    paddingHorizontal: spacing.gutter,
    paddingVertical: spacing.tiny,
    backgroundColor: colors.cardAlt,
    borderWidth: 0,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  tileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
