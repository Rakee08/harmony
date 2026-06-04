import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  ViewStyle,
  ScrollViewProps,
} from 'react-native';
import {colors} from '../theme';

/**
 * Screen component props interface
 */
interface ScreenProps {
  /** Screen content */
  children: React.ReactNode;
  /** Optional style overrides */
  style?: ViewStyle;
  /** Whether the content should be scrollable (default: false) */
  scrollable?: boolean;
  /** Optional scroll view props when scrollable is true */
  scrollProps?: Omit<ScrollViewProps, 'contentContainerStyle'>;
}

/**
 * Base styles for the screen container
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

/**
 * Reusable Screen component for Harmony
 *
 * Provides a consistent SafeAreaView wrapper with optional scrolling capability
 * and automatic dark theme background application.
 *
 * @example
 * ```tsx
 * // Non-scrollable screen
 * <Screen>
 *   <AppText variant="title">Library</AppText>
 * </Screen>
 *
 * // Scrollable screen
 * <Screen scrollable>
 *   <AppText variant="title">Songs</AppText>
 *   <SongList songs={songs} />
 * </Screen>
 *
 * // With custom style
 * <Screen style={{ paddingHorizontal: 16 }} scrollable>
 *   <Content />
 * </Screen>
 * ```
 */
export const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  scrollable = false,
  scrollProps,
}) => {
  const containerStyle = [styles.container, style];

  if (scrollable) {
    return (
      <SafeAreaView style={containerStyle}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          {...scrollProps}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={containerStyle}>
      <View style={styles.scrollContent}>{children}</View>
    </SafeAreaView>
  );
};
