import styled, {
  TextStyleTypes,
  SpaceProps,
  space,
  typography as typographyFunction,
  ColorProps,
  color as colorFunction,
  TextAlignProps,
  Theme,
} from '../design-system';

export interface TypographyProps
  extends ColorProps,
    SpaceProps,
    TextAlignProps {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  typography: TextStyleTypes;
}

interface TypographyAttrs
  extends Pick<TypographyProps, 'typography' | 'textTransform' | 'color'> {
  theme: Theme;
}

const Typography = styled.div.attrs(
  ({ theme, typography, textTransform, color }: TypographyAttrs) => ({
    ...theme.typography[typography],
    textTransform: textTransform || theme.typography[typography].textTransform,
    color: color || theme.typography[typography].color,
  }),
)<TypographyProps>`
  ${space}
  ${typographyFunction}
  ${colorFunction}
  text-transform: ${({ textTransform }) => textTransform};
`;

export default Typography;
