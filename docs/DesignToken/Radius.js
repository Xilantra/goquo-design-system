import React from "react";
import styled from 'styled-components'
import { radius } from '../../src/Utils/Theme'

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
  width: 4rem;
  height: 4rem;
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
            <TokenExample style={{ borderRadius: post.tokenCode }} />
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
    token: 'radius.small = 2px',
    tokenCode: radius.small
  },
  {
    token: 'radius.medium = 4px',
    tokenCode: radius.medium
  },
  {
    token: 'radius.large = 8px',
    tokenCode: radius.large
  },
  {
    token: 'radius.pill = 24px',
    tokenCode: radius.pill
  },
  {
    token: 'radius.circle = 50%',
    tokenCode: radius.circle
  }
];

const Radius = () => (
  <TokenList posts={posts} />
)
export default Radius
