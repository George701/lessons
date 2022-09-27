import React from "react"

const Pen = (props: {height?: number, width?: number}) => {
  const { height, width } = props
  return (
    <svg
      height={height === null ? 100 : height}
      width={width === null ? 100 : width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220.001 220.001"
      xmlSpace="preserve"
      {...props}
    >
      <path d="m0 220 59.34-6.14-53.197-53.199zM132.018 34.787l53.197 53.197L69.568 203.631 16.37 150.434 132.018 34.787zm80.678 25.715c9.738-9.738 9.742-25.527 0-35.268l-17.93-17.93c-9.738-9.74-25.529-9.738-35.268 0l-17.346 17.347 53.199 53.196 17.345-17.345z" />
    </svg>
  )
}

export default Pen