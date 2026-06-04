import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LibraryTileCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <View style={styles.card}>
    <View style={styles.iconPlaceholder} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 130,
    backgroundColor: '#15151D',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  iconPlaceholder: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#27273F',
    marginBottom: 14,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#8A8AA8',
    fontSize: 12,
    lineHeight: 18,
  },
});
