import React from 'react'
import InputText from './InputText'
import Textarea from './Textarea'

// type TInput = 'text' | 'number' | 'textarea'

export enum EInput {
  text = 'text',
  number = 'number',
  textarea = 'textarea',
}

interface IProps {
  type: EInput;
  value: string;
  onChange: any;
  placeholder?: string;
  label?: string;
}

const Input = (props: IProps) => {
  const { type, value, onChange, placeholder, label } = props
  switch(type) {
    case EInput.text:
      return (
        <InputText
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
        />
      )
    case EInput.textarea:
      return (
        <Textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
        />
      )
    default:
      return <InputText value={value} onChange={onChange}/>
  }
}

export default Input