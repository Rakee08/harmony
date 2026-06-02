import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {LibraryStatCard} from '../components/LibraryStatCard';
import {LibraryTileCard} from '../components/LibraryTileCard';

const tiles = [
  {title: 'Songs', subtitle: '2,184 tracks'},
  {title: 'Albums', subtitle: '124 collections'},
  {title: 'Artists', subtitle: '89 performers'},
  {title: 'Playlists', subtitle: '12 curated lists'},
];

export const LibraryScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.topRow}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>Your recent listening, stats, and collections.</Text>
    </View>

    <View style={styles.recentCard}>
      <Text style={styles.recentLabel}>Recently Played</Text>
      <Text style={styles.recentTitle}>Dream in Purple</Text>
      <Text style={styles.recentMeta}>Torn Sounds • 24 tracks</Text>
      <View style={styles.recentFooter}>
        <View style={styles.recentBadge}>
          <Text style={styles.recentBadgeText}>Ambient</Text>
        </View>
        <Text style={styles.recentTime}>2h 16m</Text>
      </View>
    </View>

    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Quick Stats</Text>
    </View>
    <View style={styles.statsRow}>
      <LibraryStatCard value="1,234" label="Songs" />
      <LibraryStatCard value="160" label="Albums" />
      <LibraryStatCard value="89" label="Artists" />
    </View>

    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Browse</Text>
      <Text style={styles.sectionMeta}>Jump back into your library collections</Text>
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
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 16,
    backgroundColor: '#09090E',
  },
  topRow: {
    marginBottom: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#B3B3C4',
    fontSize: 14,
    lineHeight: 20,
    maxWidth: '90%',
  },
  recentCard: {
    backgroundColor: '#15151D',
    borderRadius: 24,
    padding: 22,
    marginBottom: 24,
  },
  recentLabel: {
    color: '#8A8AA8',
    fontSize: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  recentTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  recentMeta: {
    color: '#B3B3C4',
    fontSize: 13,
    marginBottom: 18,
  },
  recentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentBadge: {
    backgroundColor: '#27273F',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  recentBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  recentTime: {
    color: '#8A8AA8',
    fontSize: 12,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  sectionMeta: {
    color: '#8A8AA8',
    fontSize: 12,
    maxWidth: '85%',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
