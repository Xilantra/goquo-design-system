import React from "react";
import styled from 'styled-components'
// import { darken } from 'polished'
import { colors } from '../../src/Utils/Theme'

const PostWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const ColorPalette = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  display: inline-block;
  border: 3px solid rgba(0, 0, 0, 0.27);
`;

const ColorPaletteInfo = styled.div`
  padding: 0.8rem 0 0 1rem;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;

const ColorCode = styled.small`
  text-transform: lowercase;
`;

const DescRole = styled.p`
  margin: 0.25rem 0 0 0;
`;

function ListPost(props) {
  const postContent = props.posts.map((post) =>
    <PostWrapper key={post.token}>
      <div>
        <ColorPalette style={{ background: post.colorCode }} />
      </div>
      <ColorPaletteInfo>
        <Title>{post.token}</Title>
        <ColorCode>{post.colorCode}</ColorCode>
        <DescRole>{post.role}</DescRole>
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
    token: 'primary',
    colorCode: colors.primary,
    role: 'Primary brand / Interactive text / Border highlight / Emphasis background / Featured elements'
  },
  {
    token: 'secondary',
    colorCode: colors.secondary,
    role: 'Supporting brand'
  },
  {
    token: 'tertiary',
    colorCode: colors.tertiary,
    role: 'Tertiary brand / Loading'
  },
  {
    token: 'ui01',
    colorCode: colors.ui01,
    role: 'Primary background / Layer 1 background'
  },
  {
    token: 'ui02',
    colorCode: colors.ui02,
    role: 'Default page background  / Layer 0 background / Secondary background'
  },
  {
    token: 'ui03',
    colorCode: colors.ui03,
    role: 'Subtle border'
  },
  {
    token: 'ui04',
    colorCode: colors.ui04,
    role: 'Emphasis border'
  },
  {
    token: 'text01',
    colorCode: colors.text01,
    role: 'Primary text / Body copy'
  },
  {
    token: 'text02',
    colorCode: colors.text02,
    role: 'Secondary text / Subtle text / Help text'
  },
  {
    token: 'text03',
    colorCode: colors.text03,
    role: 'Placeholder text'
  },
  {
    token: 'icon01',
    colorCode: colors.icon01,
    role: 'Primary icon color on brand primary background. Use on button, etc'
  },
  {
    token: 'icon02',
    colorCode: colors.icon02,
    role: 'Secondary icon color on ui02 (white) background'
  },
  {
    token: 'field01',
    colorCode: colors.field01,
    role: 'Field color on ui01 background'
  },
  {
    token: 'field02',
    colorCode: colors.field02,
    role: 'Field color on const ui02 bg'
  },
  {
    token: 'inverse01',
    colorCode: colors.inverse01,
    role: 'Inverse text color / Inverse icon color'
  },
  {
    token: 'inverse02',
    colorCode: colors.inverse02,
    role: 'Inverse background color'
  },
  {
    token: 'support01',
    colorCode: colors.support01,
    role: 'Danger / error'
  },
  {
    token: 'support02',
    colorCode: colors.support02,
    role: 'Success'
  },
  {
    token: 'support03',
    colorCode: colors.support03,
    role: 'Warning'
  },
  {
    token: 'support04',
    colorCode: colors.support04,
    role: 'Information'
  },
  {
    token: 'overlay01',
    colorCode: colors.overlay01,
    role: 'Background overlay'
  },
  {
    token: 'trustyou20',
    colorCode: colors.trustyou20,
    role: 'Lowest'
  },
  {
    token: 'trustyou40',
    colorCode: colors.trustyou40,
    role: 'Medium down'
  },
  {
    token: 'trustyou60',
    colorCode: colors.trustyou60,
    role: 'Medium up'
  },
  {
    token: 'trustyou80',
    colorCode: colors.trustyou80,
    role: 'High'
  },
  {
    token: 'trustyou100',
    colorCode: colors.trustyou100,
    role: 'Highest'
  },
];

const ListPostWrapper = () => (
  <ListPost posts={posts} />
)
export default ListPostWrapper
