import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LibraryStatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <View style={styles.card}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#15151D',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginRight: 12,
    minHeight: 110,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  label: {
    color: '#8A8AA8',
    fontSize: 12,
    lineHeight: 18,
  },
});
