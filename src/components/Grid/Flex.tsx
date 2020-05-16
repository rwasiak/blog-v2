import styled, { flexbox, FlexboxProps } from '../../design-system';
import Box from './Box';

const Flex = styled(Box).attrs(() => ({
  display: 'flex',
}))<FlexboxProps>`
  ${flexbox}
`;

export default Flex;
