import styled, {
  TextStyleTypes,
  SpaceProps,
  space,
  typography as typographyFunction,
  ColorProps,
  TextAlignProps,
  Theme,
  system,
} from '../../design-system';

const typographyColor = system({
  typographyColor: {
    property: 'color',
    scale: 'colors',
  },
});

const typographyTextTransform = system({
  typographyTextTransform: {
    property: 'textTransform',
  },
});

export interface TypographyProps
  extends ColorProps,
    SpaceProps,
    TextAlignProps {
  typography: TextStyleTypes;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

interface TypographyPropsWithTheme extends TypographyProps {
  theme: Theme;
}

const Typography = styled.div.attrs(
  ({ theme, typography, textTransform, color }: TypographyPropsWithTheme) => {
    const {
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
      fontStyle,
    } = theme.typographyStyles[typography];

    return {
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
      fontStyle,
      typographyTextTransform:
        textTransform || theme.typographyStyles[typography].textTransform,
      typographyColor: color || theme.typographyStyles[typography].color,
    };
  },
)<TypographyProps>`
  ${space}
  ${typographyFunction}
  ${typographyColor}
  ${typographyTextTransform}
`;

export default Typography;
