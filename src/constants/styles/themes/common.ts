import {Border, Spacing, Typography} from 'styled-components';
import {Fonts} from '../fonts';

export const typographyCommon: Typography = {
  h1: {
    fontSize: 96,
    fontfamily: Fonts.openSansLight,
  },
  h2: {
    fontSize: 60,
    fontfamily: Fonts.openSansLight,
  },
  h3: {
    fontSize: 48,
    fontfamily: Fonts.openSansRegular,
  },
  h4: {
    fontSize: 32,
    fontfamily: Fonts.montserratBold,
  },
  h5: {
    fontSize: 24,
    fontfamily: Fonts.montserratSemiBold,
  },
  h6: {
    fontSize: 20,
    fontfamily: Fonts.montserratRegular,
  },
  body1: {
    fontSize: 14,
    fontfamily: Fonts.openSansRegular,
  },
  body2: {
    fontSize: 16,
    fontfamily: Fonts.openSansBold,
  },
  body3: {
    fontSize: 14,
    fontfamily: Fonts.openSansRegular,
  },
  subtitle1: {
    fontSize: 16,
    fontfamily: Fonts.openSansRegular,
  },
  subtitle2: {
    fontSize: 14,
    fontfamily: Fonts.openSansLight,
  },
  caption: {
    fontSize: 12,
    fontfamily: Fonts.openSansRegular,
  },
  overline: {
    fontSize: 14,
    fontfamily: Fonts.openSansLight,
  },
};

export const spacing: Spacing = {
  ty: 4,
  xs: 5,
  sm: 10,
  md: 20,
  lg: 25,
  xl: 32,
  xxl: 40,
  xxxl: 42,
};

export const borders: Border = {
  radius: {
    xs: 4,
    sm: 10,
  }
}

