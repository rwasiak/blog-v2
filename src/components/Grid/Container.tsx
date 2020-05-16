import * as React from 'react';
import { ThemeContext } from '../../design-system';
import Box, { BoxProps } from './Box';

const Container: React.FC<BoxProps> = ({
  children,
  px = [2, 3, null, 4],
  mx = 'auto',
  my = 0,
  maxWidth,
  ...restProps
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Box
      px={px}
      mx={mx}
      my={my}
      maxWidth={maxWidth || theme.maxWidths.content}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Container;
