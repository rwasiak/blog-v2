import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import styled from '../../design-system';
import Link, { LinkProps } from './Link';

const ResetGatsbyLinkStyles = styled(GatsbyLink)`
  text-decoration: none;
`;

const InternalLink: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'> & LinkProps> = ({
  children,
  to,
  onClick,
  replace,
  state,
  ...props
}) => (
  <ResetGatsbyLinkStyles
    to={to}
    onClick={onClick}
    replace={replace}
    state={state}
  >
    <Link {...props} as="span">
      {children}
    </Link>
  </ResetGatsbyLinkStyles>
);

export default InternalLink;
