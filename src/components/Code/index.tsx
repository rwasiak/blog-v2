import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import React from 'react';
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from 'react-live';
import styled, { space, borderRadius } from '../../design-system';
import { Box } from '../Grid';

interface CodeProps {
  codeString: string;
  language: Language;
  'react-live'?: any;
}

const PreWrapper = styled.div`
  position: relative;
`;

const Pre = styled.pre.attrs(() => ({
  my: 6,
  px: 4,
  py: 6,
  borderRadius: [3, null, 5],
}))`
  ${space}
  ${borderRadius}
  text-align: left;
  overflow-x: auto;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  font-family: 'Courier New', Courier, monospace;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
`;

const StyledLive = styled(Box)`
  && div,
  && pre {
    font-family: 'Courier New', Courier, monospace;
  }
`;

const Code: React.FC<CodeProps> = ({ codeString, language, ...props }) => {
  const { 'react-live': reactLive } = props;
  const reactLiveContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reactLiveContainerRef.current) {
      const textarea = reactLiveContainerRef.current.querySelector('textarea');

      if (textarea) {
        textarea.setAttribute('aria-hidden', 'true');
      }
    }
  }, [reactLive]);

  if (reactLive) {
    return (
      <LiveProvider code={codeString} noInline theme={theme}>
        <StyledLive
          my={6}
          data-testid="react-live-component"
          ref={reactLiveContainerRef}
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </StyledLive>
      </LiveProvider>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <PreWrapper>
          <Pre style={style} data-testid="highlight-component">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </PreWrapper>
      )}
    </Highlight>
  );
};
export default withLive(Code);
export { defaultProps };
