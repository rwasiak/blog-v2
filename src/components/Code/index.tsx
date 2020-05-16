import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  withLive,
} from 'react-live';
import copyToClipboard from '../../utils/copyToClipboard';

interface CodeProps {
  codeString: string;
  language: Language;
  'react-live'?: any;
}

export const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }

  font-family: 'Courier New', Courier, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Code: React.FC<CodeProps> = ({ codeString, language, ...props }) => {
  const handleCopyClick = () => copyToClipboard(codeString);
  const { 'react-live': reactLive } = props;

  if (reactLive) {
    return (
      <LiveProvider code={codeString} noInline theme={theme}>
        <CopyCode onClick={handleCopyClick}>Kopiuj</CopyCode>
        <LiveEditor />
        <LiveError />
        <LivePreview />
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
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleCopyClick}>Kopiuj</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
export default withLive(Code);
