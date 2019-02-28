import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import theme from '../../Utils/Theme'
import Skeleton from '../../Utils/Skeleton'

const scales = {
  small: `
    padding: ${theme.spacing[3]} ${theme.spacing[7]};
    height: ${theme.spacing[8]};
    font-size: ${theme.typeScale[3]};
  `,
  normal: `
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    height: ${theme.spacing[10]};
    font-size: ${theme.typeScale[3]};
  `,
  big: `
    padding: ${theme.spacing[6]} ${theme.spacing[10]};
    height: ${theme.layoutScale[5]};
    font-size: ${theme.typeScale[4]};
  `,
}

const kind = outline => (bg, color, darker) => {
  const borderColor = outline ? bg : 'transparent'
  const backgroundColor = outline ? 'transparent' : bg
  const darkerColor = darker

  return `
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    color: ${outline ? bg : color};

    &:hover,
    &:focus {
      background-color: ${outline ? backgroundColor : darkerColor};
      border-color: ${outline ? darkerColor : borderColor};
      color: ${outline ? darkerColor : color};

      svg {
        fill: currentColor;
      }
    }
  `
}

const kinds = outline => {
  const get = kind(outline)

  return {
    primary: get(`${theme.colors.primary}`, `${theme.colors.inverse01}`, `${theme.colors.primaryHover}`),
    secondary: get(`${theme.colors.secondary}`, `${theme.colors.inverse01}`, `${theme.colors.secondaryHover}`),
    ghost: get('transparent', `${theme.colors.primary}`, `${theme.colors.brandPrimary10}`),
    danger: get(`${theme.colors.support01}`, `${theme.colors.inverse01}`, `${theme.colors.support01Hover}`),
  }
}

const getScale = ({ scale = 'normal' }) => scales[scale]
const getKind = ({ kind = 'primary', outline = false }) => kinds(outline)[kind]

const ButtonStyled = styled('button')`
  ${getScale};
  margin: 2px 4px;
  display: inline-block;
  /* Full width */
  width: ${props => props.fullWidth && `100%`};
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${theme.fontBold};
  /* Only if using bold text */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 16px;
  letter-spacing: 0;
  cursor: pointer;
  user-select: none;
  border-style: solid;
  border-width: ${theme.buttonBorderWidth};
  transition: all 250ms ease-in-out;
  border-radius: ${props => props.rounded ? theme.buttonRounded : theme.buttonRadius };
  ${getKind};

  svg {
    margin-left: ${theme.spacing[4]};
    fill: currentColor;
    vertical-align: middle;
    transition: fill 250ms ease-in-out;
  }

  &:active {
    transform: scale(.98);
    outline: none;
  }
  
  &::-moz-focus-inner {
      border: 0;
  }

  &:disabled {
      background-color: ${theme.colors.disabled01};
      color: ${theme.colors.disabled03};
      cursor: not-allowed;

      &:hover {
        background-color: ${theme.colors.disabled01};
        color: ${theme.colors.disabled03};
        /* box-shadow:inset 0 4px 8px 0 rgba(0,0,0,.16); */
      }
    }
`

export const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
)


// Button Icon
export const ButtonIcon = styled(Button)`
    padding: ${theme.spacing[0]};
    height: 3rem;
    width: 3rem;
    box-shadow: ${theme.boxShadows.button};

    svg {
      margin-left: 0;
    }
  `;


// Skeleton
export const ButtonSkeleton = styled(Skeleton)`
height: ${theme.spacing[10]};
width: 8rem;
`;

Button.propTypes = {
  kind: t.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  outline: t.bool,
  rounded: t.bool,
  fullWidth: t.bool,
  scales: t.oneOf(['small', 'normal', 'big']),
  theme: theme,
}

Button.defaultProps = {
  scales: 'normal',
  kind: 'primary',
  outline: false,
  rounded: false,
  fullWidth: false,
  theme: theme,
}

Button.displayName = 'Button'
ButtonIcon.displayName = 'ButtonIcon'
ButtonSkeleton.displayName = 'ButtonSkeleton'
