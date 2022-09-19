import React from 'react'

const Arrow = (props: { height?: number, width?: number, fill?: string }) => {
  const { height, width, fill } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63.9 122.88"
      xmlSpace="preserve"
      fill={!!fill ? fill : '#000000'}
      height={!!height ? height : 20}
      width={!!width ? width : 20}
    >
      <path
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        d="M63.9 61.44 0 122.88V0l63.9 61.44z"
      />
  </svg>
  )
}

export default Arrow