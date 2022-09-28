import React from 'react'

const Cross = (props: {height?: number, width?: number}) => {
  const { height, width } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M386.813 0 245 141.812 103.188 0 0 103.188 141.813 245 0 386.812l103.187 103.187L245 348.187 386.813 490 490 386.812 348.187 244.999 490 103.187z" />
    </svg>
  )
}

export default Cross