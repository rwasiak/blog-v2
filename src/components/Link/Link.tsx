import Typography, { TypographyProps } from '../Typography';
import styled, { space, color, system, Theme } from '../../design-system';

const activeColor = system({
  activeColor: {
    property: 'color',
  },
});

const textDecoration = system({
  textDecoration: {
    property: 'textDecoration',
  },
});

export interface LinkProps
  extends TypographyProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  as?: string;
  active?: boolean;
  textDecoration?: string;
}

export interface LinkInternalProps extends LinkProps {
  theme: Theme;
}

const Link = styled(Typography).attrs(
  ({
    as: asAttr,
    theme,
    active,
    textDecoration: textDecorationAttr,
    color: colorAttr,
  }: LinkInternalProps) => {
    const typographyColor = colorAttr || theme.link.color;

    return {
      activeColor: theme.link.activeStyles.color,
      color: active ? theme.link.activeStyles.color : typographyColor,
      textDecoration: textDecorationAttr || 'none',
      as: asAttr || 'a',
    };
  },
)<LinkProps>`
  ${space}
  ${color}
  ${textDecoration}
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    ${activeColor}
  }
`;

export default Link;
