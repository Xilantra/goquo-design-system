import React from 'react'
import styled from 'styled-components'
// import t from 'prop-types'
// import theme from '../../Utils/Theme'
// import Skeleton from '../../Utils/Skeleton'

const InputTextWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 246px;
`

const InputTextLabel = styled.label`
  /* position: absolute; */
  font-size: 1rem;
  font-weight: ${props => props.active ? "bold" : "normal"};
  pointer-events: none;
  transition: all 150ms ease-in-out;
  color: ${props => props.active ? "#429FAA" : "#171717"};
  
  transform: ${
      props => props.active ?
          "scale(0.95) translateX(9px) translateY(16px)" :
          "scale(1) translateX(16px) translateY(36px)"
  };
`

const InputTextStyled = styled.input`
  font-size: 1rem;
  border: 0;
  outline: none;
  height: 40px;
  padding: 0.5rem 1rem 0;
  border-bottom-width: ${props => props.active ? "2px" : "1px"};
  border-style: solid;
  border-color: ${props => props.active ? "#429FAA" : "#565656"};
  cursor: text;
  transition: all 150ms ease-in-out;

  &:hover {
    border-bottom-width: 2px;
  }
`


class InputText extends React.Component {

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
      <InputTextWrapper>
        <InputTextLabel
          for={this.props.id}
          active={this.state.active}
          >
          {this.props.label}
        </InputTextLabel>
        <InputTextStyled
          id={this.props.id}
          name={this.props.name}
          active={this.state.active}
          onChange={this.handleInput}
        />
      </InputTextWrapper>
      );
  }
  
}


export default InputText
// Ive done with most of the forms element.
// So today Im gonna do:
// Accordion, which I think can be implemented on current v1
// the select dropdown which have 2 types.
// Native and custom select dropdown