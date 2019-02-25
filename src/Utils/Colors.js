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

export default colors