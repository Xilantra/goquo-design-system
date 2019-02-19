import React from "react";
import styled from 'styled-components'
import { layoutScale } from '../../src/Utils/Theme'

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 280px;
  margin-bottom: 3rem;
`;

const TokenOutputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 4rem;
    min-height: 4rem;
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
    token: 'layoutScale[1] = 16px',
    tokenCode: layoutScale[1]
  },
  {
    token: 'layoutScale[2] = 24px',
    tokenCode: layoutScale[2]
  },
  {
    token: 'layoutScale[3] = 32px',
    tokenCode: layoutScale[3]
  },
  {
    token: 'layoutScale[4] = 48px',
    tokenCode: layoutScale[4]
  },
  {
    token: 'layoutScale[5] = 64px',
    tokenCode: layoutScale[5]
  },
  {
    token: 'layoutScale[6] = 96px',
    tokenCode: layoutScale[6]
  },
  {
    token: 'layoutScale[7] = 160px',
    tokenCode: layoutScale[7]
  },
  {
    token: 'layoutScale[8] = 240px',
    tokenCode: layoutScale[8]
  }
//   {
//     token: 'layoutScale[9] = 160px',
//     tokenCode: layoutScale[9]
//   },
//   {
//     token: 'layoutScale[10] = 160px',
//     tokenCode: layoutScale[10]
//   },
];

const Scale = () => (
  <TokenList posts={posts} />
)
export default Scale
