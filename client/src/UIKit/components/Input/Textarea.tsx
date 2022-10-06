import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Label = styled.label`
  flex: 1;
  font-size: ${props => props.theme.fontSize.error};
  margin-right: 1rem;
`

const Input = styled.textarea`
  flex: 2;
  padding: 4px 8px;
  height: 5rem;
  font-size: ${props => props.theme.fontSize.basic};
  border: 2px solid ${props => props.theme.palette.gray};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease-out;

  :focus {
    border-color: ${props => props.theme.palette.blue};
  }
`

interface IProps {
  value: string;
  onChange: ()=>void;
  placeholder?: string;
  label?: string;
}

const InputText = (props: IProps) => {
  const { value, onChange, placeholder, label } = props
  return (
    <Wrapper>
      {label?.length && (
        <Label>{label}</Label>
      )}
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default InputText