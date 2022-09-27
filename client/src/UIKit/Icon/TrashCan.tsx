import React from "react"

const TrashCan = (props: {height?: number, width?: number}) => {
  const { height, width } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height === null ? 100 : height}
      width={width === null ? 100 : width}
      viewBox="0 0 25.283 25.283"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M4.153 4.757v20.526h17V4.757h-17zm4.416 17.629H5.775V7.82H8.57l-.001 14.566zm5.317 0h-2.797V7.82h2.797v14.566zm5.316 0h-2.795V7.82h2.795v14.566zM19.931 3.704 21.13 3.7l-.002-2.4-5.463-.006-.01-.657c-1.643-.875-4.76-.82-6.014-.014v.702H4.13l.004 2.402h1.199l14.598-.023z" />
    </svg>
  )
}

export default TrashCan