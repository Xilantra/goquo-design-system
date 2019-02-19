import styled, { keyframes } from 'styled-components'
import theme from './Theme'

// 💀 Skeleton loading animation
// Don't put too much skeleton on a page/component.

const skeletonAnimation = keyframes `
  0% {
        width: 0%;
        left: 0;
        right: auto;
        opacity: 0.3;
      }
      20% {
        width: 100%;
        left: 0;
        right: auto;
        opacity: 1;
      }
      28% {
        width: 100%;
        left: auto;
        right: 0;
      }
      51% {
        width: 0%;
        left: auto;
        right: 0;
      }
      58% {
        width: 0%;
        left: auto;
        right: 0;
      }
      82% {
        width: 100%;
        left: auto;
        right: 0;
      }
      83% {
        width: 100%;
        left: 0;
        right: auto;
      }
      96% {
        width: 0%;
        left: 0;
        right: auto;
      }
      100% {
        width: 0%;
        left: 0;
        right: auto;
        opacity: 0.3;
      }
`;

const Skeleton = styled.div `
    position: relative;
    border: none;
    padding: 0;
    box-shadow: none;
    pointer-events: none;
    background: ${props => props.theme.colors.skeletonBg};
  
    &:hover,
    &:focus,
    &:active {
      border: none;
      outline: none;
      cursor: default;
    }
  
    &:before {
      content: '';
      width: 0%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.3;
      background: ${props => props.theme.colors.skeleton};
      animation: ${skeletonAnimation} 3000ms ease-in-out infinite;
    }
`;

Skeleton.defaultProps = {
    theme: theme
}

export default Skeleton
