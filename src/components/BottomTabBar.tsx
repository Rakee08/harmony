import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

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
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#2f2f39',
    backgroundColor: '#0f0f16',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  tabButtonActive: {
    backgroundColor: '#3E3D7D',
  },
  tabLabel: {
    color: '#8A8AA8',
    fontSize: 13,
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#FFFFFF',
  },
});
