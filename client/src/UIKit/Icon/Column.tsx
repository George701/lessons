import React from 'react'

const Column = (props: {height?: number, width?: number, style?: any, fill?: string}) => {
  const { height, width, style, fill } = props
  return (
    <svg
      fill={!!fill ? fill : '#000000'}
      height={!!height ? height : 100}
      width={!!width ? width : 100}
      viewBox={`0 0 ${!!height ? height : 100} ${!!width ? width : 100}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 18a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
        fill="#212121"
      />
    </svg>
  )
}

export default Column