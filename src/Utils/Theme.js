import {css} from 'styled-components'

// Theme Primary
const brandPrimary10 = '#E8F3F5'
const brandPrimary20 = '#C6E2E6'
const brandPrimary30 = '#A1CFD5'
const brandPrimary40 = '#7BBCC4'
const brandPrimary50 = '#5EADB7'
const brandPrimary60 = '#429FAA'
const brandPrimary70 = '#3C97A3'
const brandPrimary80 = '#338D99'
const brandPrimary90 = '#2B8390'
const brandPrimary100 = '#1D727F'


// Theme Secondary
const brandSecondary10 = '#E9F2FC'
const brandSecondary20 = '#C9DEF6'
const brandSecondary30 = '#A5C8F1'
const brandSecondary40 = '#80B1EB'
const brandSecondary50 = '#65A1E6'
const brandSecondary60 = '#4A90E2'
const brandSecondary70 = '#4388DF'
const brandSecondary80 = '#3A7DDA'
const brandSecondary90 = '#3273D6'
const brandSecondary100 = '#2261CF'


const white10 = 'rgba(255, 255, 255, 0.1)'
const white20 = 'rgba(255, 255, 255, 0.2)'
const white30 = 'rgba(255, 255, 255, 0.3)'
const white40 = 'rgba(255, 255, 255, 0.4)'
const white50 = 'rgba(255, 255, 255, 0.5)'
const white60 = 'rgba(255, 255, 255, 0.6)'
const white70 = 'rgba(255, 255, 255, 0.7)'
const white80 = 'rgba(255, 255, 255, 0.8)'
const white90 = 'rgba(255, 255, 255, 0.9)'
const white100 = '#fff'

const black10 = 'rgba(0,0,0,0.1)'
const black20 = 'rgba(0,0,0,0.2)'
const black30 = 'rgba(0,0,0,0.3)'
const black40 = 'rgba(0,0,0,0.4)'
const black50 = 'rgba(0,0,0,0.5)'
const black60 = 'rgba(0,0,0,0.6)'
const black70 = 'rgba(0,0,0,0.7)'
const black80 = 'rgba(0,0,0,0.8)'
const black90 = 'rgba(0,0,0,0.9)'
const black100 = 'rgba(0,0,0,1)'


// Gray
const gray10 = '#f3f3f3'
const gray20 = '#dcdcdc'
const gray30 = '#bebebe'
const gray40 = '#a4a4a4'
const gray50 = '#8c8c8c'
const gray60 = '#6f6f6f'
const gray70 = '#565656'
const gray80 = '#3d3d3d'
const gray90 = '#282828'
const gray100 = '#171717'


// Red
const red10 = '#FDEBEB'
const red20 = '#F9CDCD'
const red30 = '#F5ABAB'
const red40 = '#F18989'
const red50 = '#EE7070'
const red60 = '#EB5757'
const red70 = '#E94F4F'
const red80 = '#E54646'
const red90 = '#E23C3C'
const red100 = '#DD2C2C'

// Green
const green60 = '#27ae60'

// Yellow
const yellow60 = '#ffde03'


const primary = [brandPrimary60] // Primary brand / Interactive text / Border highlight / Emphasis background / Featured elements
const primaryHover = [brandPrimary100]
const secondary = [brandSecondary60] // Supporting brand
const secondaryHover = [brandSecondary100]
const tertiary = [brandPrimary40] // Tertiary brand / Loading
const interactive01 = [brandPrimary60]
const interactive02 = [brandPrimary60]
const ui01 = [white100] // Primary background / Layer 1 background
const ui02 = '#f3f3f3' // Default page background  / Layer 0 background / Secondary background
const ui03 = [gray30] // Subtle border
const ui04 = [gray40] // Emphasis border
const text01 = [gray100] // Primary text / Body copy
const text02 = [gray70] // Secondary text / Subtle text / Help text
const text03 = [gray50] // Placeholder text
const icon01 = [white100] // Primary icon color on brand primary background. Use on button, etc
const icon02 = [gray70] // Secondary icon color on ui02 (white) background
const field01 = [gray10] // Field color on ui01 bg
const field02 = [gray20] // Field color on ui02 bg
const inverse01 = [white100] // Inverse text color / Inverse icon color
const inverse02 = [gray80] // Inverse background color

const support01 = [red60] // Danger / error 
const support01Hover = [red100] // Danger / error hover
const support02 = [green60] // Success
const support03 = [yellow60] // Warning
const support04 = [brandSecondary70] // Information
const focus = [brandPrimary60]
// const activeprimary = [brandSecondary80] TODO: change to brand01active
// const activesecondary = [gray80]
const activeui = [gray30]
// const activedanger = [red80]
// const linkvisited = [purple60]
const disabled01 = [gray10]
const disabled02 = [gray30]
const disabled03 = [gray50]
const overlay01 = 'rgba(0, 0, 0, 0.6)' // Background overlay
const overlay02 = 'rgba(243, 243, 243, 0.7)'
const skeleton = [brandPrimary20]
const skeletonBg = [brandPrimary10]

// const hoverui = '#e5e5e5'
// // const hoverdanger = [darken(const support01, 10%)]
// // const hoverprimary = [darken(const primary, 10%)]
// // const hoverprimarytext = [darken(const primary, 15%)]
// const hoversecondary = '#2c2c2c'

// Trust You rating colors
const trustyou20 = '#8b97a8'
const trustyou40 = '#f2c94c'
const trustyou60 = '#a2c569'
const trustyou80 = '#4aae27'
const trustyou100 = '#27ae60'

// const starratingcolor = '#f2c94c'

// // Legacy
// const dangercolor = '#eb5757'
// const successcolor = '#27ae60' //green colors
// const infocolor = '#2f80ed'
// const warncolor = '#f2994a'
// const activesort = '#ae2638'

const colors = {
    primary,
    primaryHover,
    secondary,
    secondaryHover,
    tertiary,
    interactive01,
    interactive02,
    ui01,
    ui02,
    ui03,
    ui04,
    text01,
    text02,
    text03,
    icon01,
    icon02,
    field01,
    field02,
    inverse01,
    inverse02,
    support01,
    support01Hover,
    support02,
    support03,
    support04,
    focus,
    // activeprimary,
    // activesecondary,
    activeui,
    // activedanger,
    // linkvisited,
    disabled01,
    disabled02,
    disabled03,
    overlay01,
    overlay02,
    skeleton,
    skeletonBg,
    white10,
    white20,
    white30,
    white40,
    white50,
    white60,
    white70,
    white80,
    white90,
    white100,
    black10,
    black20,
    black30,
    black40,
    black50,
    black60,
    black70,
    black80,
    black90,
    black100,
    gray10,
    gray20,
    gray30,
    gray40,
    gray50,
    gray60,
    gray70,
    gray80,
    gray90,
    gray100,
    brandPrimary10,
    brandPrimary20,
    brandPrimary30,
    brandPrimary40,
    brandPrimary50,
    brandPrimary60,
    brandPrimary70,
    brandPrimary80,
    brandPrimary90,
    brandPrimary100,
    brandSecondary10,
    brandSecondary20,
    brandSecondary30,
    brandSecondary40,
    brandSecondary50,
    brandSecondary60,
    brandSecondary70,
    brandSecondary80,
    brandSecondary90,
    brandSecondary100,
    red10,
    red20,
    red30,
    red40,
    red50,
    red60,
    red70,
    red80,
    red90,
    red100,
    green60,
    yellow60,
    trustyou20,
    trustyou40,
    trustyou60,
    trustyou80,
    trustyou100
}

export { colors }


//   🌌 Spacing Scale
//   ==========================================
//   Used for elements / components
//   1   ||  1px  ||  0.0625rem
//   2   ||  2px  ||  0.125rem
//   3   ||  4px  ||  0.25rem
//   4   ||  8px  ||  0.5rem
//   5   ||  12px ||  0.75rem
//   6   ||  16px ||  1rem
//   7   ||  24px ||  1.5rem
//   8   ||  32px ||  2rem
//   9   ||  40px ||  2.5rem
//   10  ||  48px ||  3rem
//   ==========================================
export const spacing = [0, '0.0625rem', '0.125rem', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem']

//   Layout Scale
//   ==========================================
//   Used for pages or big components
//   1  ||  16px  ||  1rem
//   2  ||  24px  ||  1.5rem
//   3  ||  32px  ||  2rem
//   4  ||  48px  ||  3rem
//   5  ||  64px  ||  4rem
//   6  ||  96px  ||  6rem
//   7  ||  160px ||  10rem
//   8  ||  240px ||  15rem
//   9  ||  000px ||  00rem
//   10 ||  000px ||  00rem
//   ==========================================
export const layoutScale = [0, '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem', '10rem', '15rem']


//   Type Scale
//   ==========================================
//   
//   1   ||  11px  ||  0.6875rem
//   2   ||  12px  ||  0.75rem
//   3   ||  14px  ||  0.875rem
//   4   ||  16px  ||  1rem
//   5   ||  18px  ||  1.125rem
//   6   ||  20px  ||  1.25rem
//   7   ||  24px  ||  1.5rem
//   8   ||  28px  ||  1.75rem
//   9   ||  36px  ||  2.25rem
//   10  ||  54px  ||  3.375rem
//   11  ||  76px  ||  4.75rem
//
//  'hero': 4.75rem, // 76px
//  'h1': 2.25rem, // 36px
//  'h2': 1.75rem, // 28px
//  'h3': 1.25rem, // 20px
//  'h4': 1.125rem, // 18px
//  'h5': 1rem, // 16px
//  'h6': 0.875rem, // 14px
//  'xs': 0.75rem, // 12px
//  'caption': 0.75rem, // 12px
//  'legal': 0.6875rem, // 11px
//  'p': 1rem, // 16px
//
//
//   Line Height
//   1  ||  16px / 1rem
//   2  ||  18px / 1.125rem
//   3  ||  22px / 1.375rem
//   4  ||  24px / 1.5rem
//   5  ||  26px / 1.625rem
//   6  ||  36px / 2.25rem
//   7  ||  44px / 2.75rem
//   8  ||  64px / 4rem
//   9  ||  88px / 5.5rem
//
//   ==========================================
export const typeScale = [0, '0.6875rem', '0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2.25rem', '3.375rem', '4.75rem']

export const lineHeight = [0, '1rem', '1.125rem', '1.375rem', '1.5rem', '1.625rem', '2.25rem', '2.75rem', '4rem', '5.5rem']

export const fontCustom = `"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`
export const fontSystem = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
export const fontDefault = [fontSystem]
export const fontRegular = 400
export const fontBold = 600


//-------------------------------------------
// 📑 Layer
// ------------------------------------------
//
//   Layer                 ||  Elevation
//   ==========================================
//   0 - Base              ||  0 (none)
//   1 - Flat              ||  1 (none)
//   2 - Raised            ||  2
//   3 - Overlay           ||  8
//   4 - Pop-out           ||  24
//   ==========================================
//   Custom: Global Header ||  undefine
//

const raised = '0 1px 2px 0 rgba(0,0,0,0.1)'
const button = '0 4px 8px 0 rgba(0,0,0,0.1)'
const overlay = '0 4px 8px 0 rgba(0,0,0,0.1)'
const popOut = '0 12px 24px 0 rgba(0,0,0,0.1)'

const boxShadows = {
    raised,
    button,
    overlay,
    popOut
}

export { boxShadows}


// Radius
const small = '0.125rem' // 2px
const medium = '0.35rem' // 4px
const large = '0.5rem' // 8px
const pill = '2rem' // 24px
const circle = '50%' // Used only on same width & height elements.

const radius = {
    small,
    medium,
    large,
    pill,
    circle
}

export { radius }

// Buttons
export const buttonRadius = [small]
export const buttonRounded = [pill]
export const buttonBorderWidth = '0.125rem' // 2px

const sizes = {
    desktop: 992,
    tablet: 768,
    // phone: 576, // Disable phone because we write from mobile and up. Inherit styling from mobile.
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}rem) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})
  
  // Usage
  // ${media.desktop` styling here `}
  

const theme = {
    colors,
    spacing,
    layoutScale,
    fontCustom,
    fontSystem,
    fontDefault,
    typeScale,
    lineHeight,
    fontRegular,
    fontBold,
    radius,
    buttonRadius,
    buttonBorderWidth,
    buttonRounded,
    boxShadows,
    media
}

export default theme