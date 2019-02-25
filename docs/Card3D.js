import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'docz'

const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
`

const Card3D = styled(animated.div)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.5rem;
    width: 16rem;
    height: 8rem;
    border-radius: 8px;
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    color: #fff;
    font-size: 24px;
    /* border: 4px solid white; */
    
    :hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function CardList({link, title}) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 180, friction: 12 } }))
  return (
    <StyledLink to={link}>
        <Card3D
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        >
            {title}
        </Card3D>
    </StyledLink>
  )
}

  export default CardList