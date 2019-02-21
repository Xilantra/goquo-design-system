// import React from "react"
import styled from "styled-components"

const GridBlock = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    margin-bottom: ${props => props.darker ? "0" : "1rem"};
    padding: ${props => props.shorter ? "0" : "1rem"};
    background: ${props => props.darker ? "rgba(0, 0, 0, 0.5)" : "mediumvioletred"};
    border: 1px solid ${props => props.darker ? "transparent" : "#fff"};
    border-radius: ${props => props.shorter ? "0.125rem" : "0.35rem"};
    overflow: hidden;
    text-align: center;
    color: #fff;

`

export default GridBlock