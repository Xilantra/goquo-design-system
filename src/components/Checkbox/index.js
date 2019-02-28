import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
    margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
  height: 16px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#429FAA' : '#A1CFD5')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #E8F3F5;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Label = styled.label`
    font-size: 1rem;
    user-select: none;
`

const LabelText = styled.span`
    vertical-align: middle;
`

const CheckboxStyled = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

class Checkbox extends React.Component {
    state = { checked: false }
  
    handleCheckboxChange = event => {
      this.setState({ checked: event.target.checked })
    }
  
    render() {
      return (
        <Label
            id={this.props.id}
        >
            <CheckboxStyled
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
            />
            <LabelText>{this.props.label}</LabelText>
        </Label>
      )
    }
  }

export default Checkbox
