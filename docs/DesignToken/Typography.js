import React from "react";
import styled from 'styled-components'
// import { darken } from 'polished'
import { HeroTitle, Title, Heading2, Heading3, Heading4, Heading5, Heading6, SubHeading, Paragraph } from '../../src/Utils/Typography'
import { typeScale, lineHeight, fontDefault, media } from '../../src/Utils/Theme'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  ${media.md`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`;

const TokenOutputWrapper = styled.div`
    margin-bottom: 2rem;

    ${media.md`
        margin-bottom: 0;
        padding-right: 2rem;
        min-width: 517px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    `}
`

const TokenExample = styled.div`
`

const TokenInfo = styled.div`
    padding: 1rem 1rem 1.5rem;
    display: inline-block;
    background: #f8f8f8;
    border-radius: 4px;

    ${media.md`
        background: #fcfcfc;
        min-width: 18rem;
        transition: all 250ms ease-in-out;

        ${PostWrapper}:hover & {
            box-shadow: 0 12px 24px 0 rgba(0,0,0,0.1);
        }
    `}
`

const CodeExample = styled.code`
    margin-bottom: 10px;
    padding: 0 8px;
    display: inline-block;
    font-size: 0.875rem;
    color: #787878;
    background: #f0f0f0;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
`

const TextDescWrapper = styled.ul`
    margin: 0;
    padding: 0 0.875rem;
    list-style: none;
`

const TextDesc = styled.li`
    padding: 0;
    margin: 0;
    font-size: 0.875rem;

    span {
        width: 104px;
        display: inline-block;
        font-weight: 500;
    }
`

const ParagraphSmall = styled(Paragraph)`
    font-size: ${typeScale[3]};
    line-height: ${lineHeight[2]};
    letter-spacing: .16px;
`


function TokenList(props) {
  const postContent = props.posts.map((post) =>
    <PostWrapper key={post.tokenVal}>
        <TokenOutputWrapper>
            <TokenExample as={post.tokenVal}>
                {post.tokenText}
            </TokenExample>
        </TokenOutputWrapper>
        <TokenInfo>
            <CodeExample>{post.tokenUsage}</CodeExample>
            <TextDescWrapper>
                <TextDesc>
                    <span>Font family:</span>
                    {post.fontFamily}
                </TextDesc>
                <TextDesc>
                    <span>Size:</span>
                    {post.sizeREM} / {post.sizePx}
                </TextDesc>
                <TextDesc>
                    <span>Line height:</span>
                    {post.lineHeightREM} / {post.lineHeightPX}
                </TextDesc>
                <TextDesc>
                    <span>Weight:</span>
                    {post.weight}
                </TextDesc>
                <TextDesc>
                    <span>Letter spacing:</span>
                    {post.letterSpacing}
                </TextDesc>
            </TextDescWrapper>
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
    tokenVal: HeroTitle,
    tokenUsage: '<HeroTitle>{text}</HeroTitle>',
    tokenText: 'This is for layout headings. Used only once in a page.',
    fontFamily: 'Lato',
    sizeREM: typeScale[11],
    sizePx: '76px',
    lineHeightREM: lineHeight[8],
    lineHeightPX: '88px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Title,
    tokenUsage: '<Title>{text}</Title>',
    tokenText: 'This is for layout headings. Used only once in a page.',
    fontFamily: 'Lato',
    sizeREM: typeScale[9],
    sizePx: '36px',
    lineHeightREM: lineHeight[7],
    lineHeightPX: '44px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Heading2,
    tokenUsage: '<Heading2>{text}</Heading2>',
    tokenText: 'This is for layout headings.',
    fontFamily: 'Lato',
    sizeREM: typeScale[8],
    sizePx: '28px',
    lineHeightREM: lineHeight[6],
    lineHeightPX: '36px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Heading3,
    tokenUsage: '<Heading3>{text}</Heading3>',
    tokenText: 'This is for component and layout headings.',
    fontFamily: 'Lato',
    sizeREM: typeScale[6],
    sizePx: '20px ',
    lineHeightREM: lineHeight[5],
    lineHeightPX: '26px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Heading4,
    tokenUsage: '<Heading4>{text}</Heading4>',
    tokenText: 'This is for component and layout headings.',
    fontFamily: 'Lato',
    sizeREM: typeScale[5],
    sizePx: '18px ',
    lineHeightREM: lineHeight[4],
    lineHeightPX: '24px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Heading5,
    tokenUsage: '<Heading5>{text}</Heading5>',
    tokenText: 'This is for component and layout headings.',
    fontFamily: 'Lato',
    sizeREM: typeScale[4],
    sizePx: '16px ',
    lineHeightREM: lineHeight[3],
    lineHeightPX: '22px',
    weight: '600',
    letterSpacing: '0px'
  },
  {
    tokenVal: Heading6,
    tokenUsage: '<Heading6>{text}</Heading6>',
    tokenText: 'This is for component and layout headings.',
    fontFamily: 'Lato',
    sizeREM: typeScale[3],
    sizePx: '14px ',
    lineHeightREM: lineHeight[2],
    lineHeightPX: '18px',
    weight: '600',
    letterSpacing: '0.16px'
  },
  {
    tokenVal: SubHeading,
    tokenUsage: '<SubHeading size="7">{text}</SubHeading>',
    tokenText: 'This is for subheadings.',
    fontFamily: fontDefault,
    sizeREM: typeScale[7],
    sizePx: '24px ',
    lineHeightREM: lineHeight[2],
    lineHeightPX: '18px',
    weight: '600',
    letterSpacing: '0.16px'
  },
  {
    tokenVal: Paragraph,
    tokenUsage: '<Paragraph>{text}</Paragraph>',
    tokenText: 'This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This type size is rarely used for body copy in components. Always left-align type; never center it.',
    fontFamily: fontDefault,
    sizeREM: typeScale[4],
    sizePx: '16px ',
    lineHeightREM: lineHeight[4],
    lineHeightPX: '24px',
    weight: '400',
    letterSpacing: '0'
  },
  {
    tokenVal: ParagraphSmall,
    tokenUsage: '<Paragraph scale="small">{text}</Paragraph>',
    tokenText: 'This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. We also use this for longer body copy in components such as accordion or structured list. Always left-align this type; never center it.',
    fontFamily: fontDefault,
    sizeREM: typeScale[3],
    sizePx: '14px ',
    lineHeightREM: lineHeight[2],
    lineHeightPX: '18px',
    weight: '400',
    letterSpacing: '0.16'
  },
  // {
  //   tokenVal: ShortParagraph,
  //   tokenUsage: '<ShortParagraph>{text}</ShortParagraph>',
  //   tokenText: 'This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts.',
  //   fontFamily: fontDefault,
  //   sizeREM: typeScale[4],
  //   sizePx: '16px',
  //   lineHeightREM: lineHeight[3],
  //   lineHeightPX: '22px',
  //   weight: '400',
  //   letterSpacing: '0'
  // },
  // {
  //   tokenVal: ParagraphSmall,
  //   tokenUsage: '<ShortParagraph scale="small">{text}</ShortParagraph>',
  //   tokenText: 'This is for short paragraphs with no more than four lines and is commonly used in components.',
  //   fontFamily: fontDefault,
  //   sizeREM: typeScale[3],
  //   sizePx: '14px ',
  //   lineHeightREM: lineHeight[2],
  //   lineHeightPX: '18px',
  //   weight: '400',
  //   letterSpacing: '0.16'
  // },
];

const HeadingList = () => (
  <TokenList posts={posts} />
)

export default HeadingList