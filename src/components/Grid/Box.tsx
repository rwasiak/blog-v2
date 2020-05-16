import styled, {
  space,
  SpaceProps,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from '../../design-system';

export interface BoxProps
  extends SpaceProps,
    DisplayProps,
    LayoutProps,
    BorderProps {}

const Box = styled.div<BoxProps>`
  ${space}
  ${display}
  ${layout}
  ${border}
`;

export default Box;
