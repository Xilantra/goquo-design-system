import React from "react"
import styled from 'styled-components'
import theme from '../../Utils/Theme'

const AccordionList = styled.ul`
    font-family: inherit;
    list-style: none;
    width: 100%;
`

const AccordionListItem = styled.li`
    /* border-top: 1px solid ${theme.colors.text01}; */
    overflow:  ${props => props.active ? "visible" : "hidden"};
    transition: all 250ms ease-in-out;

    &:last-child {
      border-bottom: 1px solid ${theme.colors.text01};
    }
`
const AccordionHeading = styled.button`
    display: inline-block;
    background: none;
    appearance: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: ${theme.spacing[4]} 0;
    color: ${theme.colors.text01};
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 250ms ease-in-out;

    &::-moz-focus-inner {
        border: 0;
    }

    &:hover {
      background-color: ${theme.colors.brandPrimary10};
    }

    &:focus {
      outline: none;

      /* .#{$prefix}--accordion__arrow {
        @include focus-outline('outline');
        outline-offset: 0px;
      } */
    }
`

const AccordionArrow = styled.svg`
    flex: 0 0 1rem;
    width: 1rem;
    height: 1rem;
    margin: 0 0 0 4px;
    fill: ${props => props.active ? `${theme.colors.primary}` : `${theme.colors.text01}`};
    transform: ${props => props.active ? "rotate(-90deg)" : "rotate(90deg)"};
    transition: all 250ms ease-in-out;
`

const AccordionTitle = styled.h3`
    font-size: ${theme.typeScale[4]};
    line-height: ${theme.lineHeight[4]};
    margin: 0 0 0 1rem;
    width: 100%;
    text-align: left;
    font-weight: 400;
`

const AccordionContent = styled.div`
    padding-left: ${theme.spacing[9]};
    padding-right: 25%;
    height: ${props => props.active ? "auto" : "0"};
    visibility: ${props => props.active ? "visible" : "hidden"};
    opacity: ${props => props.active ? "1" : "0"};
    transition: all 250ms ease-in-out;

    p {
        font-size: ${theme.typeScale[4]};
    }
`

// const Template = styled.div`
// `


class Accordion extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { active: false };
        
        this.handleInput = this.handleInput.bind(this);
      }
      
      handleInput(evt) {
        if(evt.target.value !== '') {
          this.setState({active: true});
        }
        else {
          this.setState({active: false});
        }
        
        // run 
      }
  
    render() {
      return ( 
        <AccordionList>
            <AccordionListItem active={this.state.active}>
                <AccordionHeading
                    onClick={this.handleInput}
                    aria-expanded={this.state.active} aria-controls={this.props.id}
                    >
                    <AccordionArrow active={this.state.active} width="7" height="12" viewBox="0 0 7 12">
                        <path fillRule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                    </AccordionArrow>
                    <AccordionTitle>{this.props.title}</AccordionTitle>
                </AccordionHeading>
                <AccordionContent id={this.props.id} active={this.state.active}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </AccordionContent>
            </AccordionListItem>
        </AccordionList>
      )
    }
  }

export default Accordion
