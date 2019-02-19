import React from 'react'
import styled, { css } from 'styled-components'
import t from 'prop-types'
// import { darken } from 'polished'
import theme from '../../src/Utils/Theme'

const baseHeading = css`
    margin: 0;
    padding: 0;
    font-family: ${theme.fontCustom};
    font-weight: ${theme.fontBold};
    letter-spacing: 0;
    color: ${theme.colors.text01};
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

export const HeroTitle = styled.h1`
    ${baseHeading}
    font-size: ${theme.typeScale[11]};
    line-height: ${theme.lineHeight[9]};
`

export const Title = styled(HeroTitle)`
    font-size: ${theme.typeScale[9]};
    line-height: ${theme.lineHeight[7]};}
`

export const Heading2 = styled.h2`
    ${baseHeading}
    font-size: ${theme.typeScale[8]};
    line-height: ${theme.lineHeight[6]};
`

export const Heading3 = styled.h3`
    ${baseHeading}
    font-size: ${theme.typeScale[6]};
    line-height: ${theme.lineHeight[5]};
`

export const Heading4 = styled.h4`
    ${baseHeading}
    font-size: ${theme.typeScale[5]};
    line-height: ${theme.lineHeight[4]};
`

export const Heading5 = styled.h5`
    ${baseHeading}
    font-size: ${theme.typeScale[4]};
    line-height: ${theme.lineHeight[3]};
`

export const Heading6 = styled.h6`
    ${baseHeading}
    font-size: ${theme.typeScale[3]};
    line-height: ${theme.lineHeight[2]};
    letter-spacing: .16px;
`

const scales = {
    small: `
        font-size: ${theme.typeScale[3]};
        line-height: ${theme.lineHeight[2]};
        letter-spacing: .16px;
    `,
    normal: `
        font-size: ${theme.typeScale[4]};
        line-height: ${theme.lineHeight[4]};
        letter-spacing: 0;
    `,
  }

const getScale = ({ scale = 'normal' }) => scales[scale]

const baseType = css`
    margin: 0;
    padding: 0;
    font-family: ${theme.fontDefault};
    font-weight: ${theme.fontRegular};
    color: ${theme.colors.text01};
    text-decoration: none;
`

const ParagraphStyled = styled.p`
    ${baseType}
    ${getScale}
`

export const Paragraph = ({ children, ...props }) => (
    <ParagraphStyled {...props}>{children}</ParagraphStyled>
)


Paragraph.propTypes = {
    scales: t.oneOf(['small', 'normal']),
}
  
Paragraph.defaultProps = {
    scales: 'normal'
}

const sizes = {
    1: `
        font-size: ${theme.typeScale[1]};
        line-height: ${theme.lineHeight[1]};
    `,
    2: `
        font-size: ${theme.typeScale[2]};
        line-height: ${theme.lineHeight[2]};
    `,
    3: `
        font-size: ${theme.typeScale[3]};
        line-height: ${theme.lineHeight[2]};
    `,
    4: `
        font-size: ${theme.typeScale[4]};
        line-height: ${theme.lineHeight[3]};
    `,
    5: `
        font-size: ${theme.typeScale[5]};
        line-height: ${theme.lineHeight[4]};
    `,
    6: `
        font-size: ${theme.typeScale[6]};
        line-height: ${theme.lineHeight[5]};
    `,
    7: `
        font-size: ${theme.typeScale[7]};
        line-height: ${theme.lineHeight[6]};
    `,
    8: `
        font-size: ${theme.typeScale[8]};
        line-height: ${theme.lineHeight[6]};
    `,
    9: `
        font-size: ${theme.typeScale[9]};
        line-height: ${theme.lineHeight[7]};
    `,
    10: `
        font-size: ${theme.typeScale[10]};
        line-height: ${theme.lineHeight[8]};
    `,
  }

const getSize = ({ size = 'normal' }) => sizes[size]

const SubHeadingStyled = styled.p`
    ${baseType}
    ${getSize}
    font-weight: ${theme.fontBold};
`

export const SubHeading = ({ children, ...props }) => (
    <SubHeadingStyled {...props}>{children}</SubHeadingStyled>
)

SubHeading.propTypes = {
    size: t.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']),
}
  
SubHeading.defaultProps = {
    size: '7'
}


HeroTitle.displayName = 'HeroTitle'
Title.displayName = 'Title'
Heading2.displayName = 'Heading2'
Heading3.displayName = 'Heading3'
Heading4.displayName = 'Heading4'
Heading5.displayName = 'Heading5'
Heading6.displayName = 'Heading6'
SubHeading.displayName = 'SubHeading'
Paragraph.displayName = 'Paragraph'
