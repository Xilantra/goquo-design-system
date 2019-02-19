import React from "react";
import styled from 'styled-components'
import { spacing } from '../../src/Utils/Theme'

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
`;

const TokenOutputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
`;

const TokenExample = styled.div`
  display: inline-block;
  background-color: #c71585;
  box-shadow: 0 6px 16px 0 rgba(255, 0, 160, 0.3);
`;

const TokenInfo = styled.div`
  padding: 0 0 0 1rem;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;

const TokenOutputCode = styled.small`
  text-transform: lowercase;
`;

function TokenList(props) {
  const postContent = props.posts.map((post) =>
    <PostWrapper key={post.token}>
        <TokenOutputWrapper>
            <TokenExample style={{ width: post.tokenCode, height: post.tokenCode }} />
        </TokenOutputWrapper>
        <TokenInfo>
            <Title>{post.token}</Title>
            <TokenOutputCode>{post.tokenCode}</TokenOutputCode>
        </TokenInfo>
    </PostWrapper>
  );
  return (
    <React.Fragment>
      {postContent}
    </React.Fragment>
  );
}


const posts = [
  {
    token: 'spacing[1] = 1px',
    tokenCode: spacing[1]
  },
  {
    token: 'spacing[2] = 2px',
    tokenCode: spacing[2]
  },
  {
    token: 'spacing[3] = 4px',
    tokenCode: spacing[3]
  },
  {
    token: 'spacing[4] = 8px',
    tokenCode: spacing[4]
  },
  {
    token: 'spacing[5] = 12px',
    tokenCode: spacing[5]
  },
  {
    token: 'spacing[6] = 16px',
    tokenCode: spacing[6]
  },
  {
    token: 'spacing[7] = 24px',
    tokenCode: spacing[7]
  },
  {
    token: 'spacing[8] = 32px',
    tokenCode: spacing[8]
  },
  {
    token: 'spacing[9] = 40px',
    tokenCode: spacing[9]
  },
  {
    token: 'spacing[10] = 48px',
    tokenCode: spacing[10]
  },
];

const Scale = () => (
  <TokenList posts={posts} />
)
export default Scale
