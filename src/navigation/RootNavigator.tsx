import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import {BottomTabBar, TabName} from '../components/BottomTabBar';
import {LibraryScreen} from '../screens/LibraryScreen';
import {SongsScreen} from '../screens/SongsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {SettingsScreen} from '../screens/SettingsScreen';

const screenComponents: Record<TabName, React.ReactNode> = {
  Library: <LibraryScreen />,
  Songs: <SongsScreen />,
  Albums: <AlbumsScreen />,
  Settings: <SettingsScreen />,
};

export const RootNavigator = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Library');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{screenComponents[activeTab]}</View>
      <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090E',
  },
  content: {
    flex: 1,
  },
});
