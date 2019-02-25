import React from "react";
import styled from 'styled-components'
// import { darken } from 'polished'
import colors from '../../src/Utils/Colors'

const PostWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 240px;
`;

const ColorPalette = styled.div`
  width: 4rem;
  height: 4rem;
  display: inline-block;
`;

const ColorPaletteInfo = styled.div`
  padding: 0.5rem 0 0 1rem;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;

const ColorCode = styled.small`
  text-transform: lowercase;
`;

function MonoListPost(props) {
  const postContent = props.posts.map((post) =>
    <PostWrapper key={post.token}>
        <ColorPalette style={{ background: post.colorCode }} />
        <ColorPaletteInfo>
            <Title>{post.token}</Title>
            <ColorCode>{post.colorCode}</ColorCode>
        </ColorPaletteInfo>
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
    token: 'brandPrimary10',
    colorCode: colors.brandPrimary10
  },
  {
    token: 'brandPrimary20',
    colorCode: colors.brandPrimary20
  },
  {
    token: 'brandPrimary30',
    colorCode: colors.brandPrimary30
  },
  {
    token: 'brandPrimary40',
    colorCode: colors.brandPrimary40
  },
  {
    token: 'brandPrimary50',
    colorCode: colors.brandPrimary50
  },
  {
    token: 'brandPrimary60',
    colorCode: colors.brandPrimary60
  },
  {
    token: 'brandPrimary70',
    colorCode: colors.brandPrimary70
  },
  {
    token: 'brandPrimary80',
    colorCode: colors.brandPrimary80
  },
  {
    token: 'brandPrimary90',
    colorCode: colors.brandPrimary90
  },
  {
    token: 'brandPrimary100',
    colorCode: colors.brandPrimary100
  },
];

const Monochromatic = () => (
  <MonoListPost posts={posts} />
)
export default Monochromatic
