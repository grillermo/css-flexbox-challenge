import React from 'react';
import styled from 'styled-components/macro';

const Flag = ({
  variant
}) => {
  const displayFlag = variant != 'default'

  if(displayFlag) {
    const backgroundColor = color[variant]
    return (
      <Wrapper backgroundColor={backgroundColor}> {text[variant]}</Wrapper>
    )
  } else {
    return null
  }
}

const color = {
  'new-release': '#6868D9',
  'on-sale': '#C5295D',
}

const text = {
  'new-release': 'Just released!',
  'on-sale': 'Sale',
}

const Wrapper = styled.div`
  position: absolute; 
  top: 10px;
  right: -5px;
  z-index: 1;
  background: ${props => props.backgroundColor};
  color: white;
  padding: 10px;
  border-radius: 3px;
  font-weight: bold;
`

export default Flag;
