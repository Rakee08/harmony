import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {colors, typography} from '../theme';

/**
 * Text variant types
 */
type TextVariant = 'title' | 'heading' | 'large' | 'subhead' | 'body' | 'small' | 'xsmall' | 'caption';

/**
 * Color key types from theme
 */
type ColorKey = keyof typeof colors;

/**
 * AppText props interface
 */
interface AppTextProps {
  /** Text variant for typography styling */
  variant: TextVariant;
  /** Text content */
  children: React.ReactNode;
  /** Optional color override from theme */
  color?: ColorKey;
  /** Optional style overrides */
  style?: TextStyle | TextStyle[];
  /** Optional text alignment */
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  /** Optional font weight override */
  weight?: '400' | '500' | '600' | '700' | '800';
  /** Optional number of lines to display */
  numberOfLines?: number;
  /** Optional test ID for testing */
  testID?: string;
}

/**
 * Mapping of variants to typography sizes
 */
const variantToFontSize: Record<TextVariant, number> = {
  title: typography.title,
  heading: typography.heading,
  large: typography.large,
  subhead: typography.subhead,
  body: typography.body,
  small: typography.small,
  xsmall: typography.xsmall,
  caption: typography.caption,
};

/**
 * Default font weights for each variant
 */
const variantToFontWeight: Record<TextVariant, TextStyle['fontWeight']> = {
  title: '700',
  heading: '700',
  large: '700',
  subhead: '700',
  body: '400',
  small: '400',
  xsmall: '400',
  caption: '400',
};

/**
 * Default color for each variant
 */
const variantToColor: Record<TextVariant, ColorKey> = {
  title: 'text',
  heading: 'text',
  large: 'text',
  subhead: 'text',
  body: 'text',
  small: 'text',
  xsmall: 'text',
  caption: 'textSecondary',
};

/**
 * Reusable AppText component for consistent typography across Harmony
 *
 * @example
 * ```tsx
 * <AppText variant="title">Harmony</AppText>
 * <AppText variant="heading">Library</AppText>
 * <AppText variant="large">My Playlists</AppText>
 * <AppText variant="body" color="muted">Recent tracks</AppText>
 * <AppText variant="caption" weight="600">Yesterday</AppText>
 * ```
 */
export const AppText: React.FC<AppTextProps> = ({
  variant,
  children,
  color,
  style,
  align = 'auto',
  weight,
  numberOfLines,
  testID,
}) => {
  // Determine color to use: provided color or variant default
  const textColor = color ? colors[color] : colors[variantToColor[variant]];

  // Determine font weight: provided weight or variant default
  const fontWeight = weight ?? variantToFontWeight[variant];

  // Build the final style
  const textStyle: TextStyle = {
    fontSize: variantToFontSize[variant],
    fontWeight,
    color: textColor,
    textAlign: align,
  };

  return (
    <Text
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      testID={testID}
    >
      {children}
    </Text>
  );
};
