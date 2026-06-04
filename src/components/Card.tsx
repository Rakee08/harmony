import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ViewStyle,
  PressableProps,
} from 'react-native';
import {colors, radius, spacing} from '../theme';

/**
 * Card component props interface
 */
interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Optional style overrides */
  style?: ViewStyle;
  /** Optional press handler - if provided, Card becomes interactive (Pressable) */
  onPress?: () => void;
  /** Optional callback when long press is detected */
  onLongPress?: () => void;
  /** Optional pressed opacity for feedback (default: 0.7) */
  pressedOpacity?: number;
}

/**
 * Base styles for the card container
 */
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

/**
 * Reusable Card component for Harmony
 *
 * Renders a surface container with consistent styling from Harmony theme.
 * Automatically upgrades to Pressable when onPress is provided for interactive cards.
 *
 * @example
 * ```tsx
 * // Static card
 * <Card>
 *   <AppText variant="heading">Favorites</AppText>
 * </Card>
 *
 * // Interactive card
 * <Card onPress={() => navigate('playlist')}>
 *   <AppText variant="heading">My Playlist</AppText>
 *   <AppText variant="caption">12 songs</AppText>
 * </Card>
 *
 * // With custom styling
 * <Card style={{ paddingVertical: 20 }} onPress={handleSelect}>
 *   <PlaylistPreview playlist={playlist} />
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  onLongPress,
  pressedOpacity = 0.7,
}) => {
  const cardStyle = [styles.card, style];

  // If no press handler, render as static View
  if (!onPress && !onLongPress) {
    return <View style={cardStyle}>{children}</View>;
  }

  // If press handler exists, render as interactive Pressable
  return (
    <Pressable
      style={({pressed}) => [
        cardStyle,
        pressed && {opacity: pressedOpacity},
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {children}
    </Pressable>
  );
};
