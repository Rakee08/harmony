import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, spacing, typography, radius} from '../theme';

export const tabs = ['Library', 'Songs', 'Albums', 'Settings'] as const;
export type TabName = (typeof tabs)[number];

export const BottomTabBar = ({
  activeTab,
  onTabPress,
}: {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}) => (
  <View style={styles.tabBar}>
    {tabs.map(tab => {
      const active = tab === activeTab;
      return (
        <TouchableOpacity
          key={tab}
          style={[styles.tabButton, active && styles.tabButtonActive]}
          onPress={() => onTabPress(tab)}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{tab}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.gutter,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    backgroundColor: colors.backgroundDark,
  },
  tabButton: {
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.gutter,
    borderRadius: radius.pill,
  },
  tabButtonActive: {
    backgroundColor: colors.primary,
  },
  tabLabel: {
    color: colors.muted,
    fontSize: typography.xsmall,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: colors.text,
  },
});
