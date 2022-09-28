import React from 'react'

const Table = (props: {height?: number, width?: number, style?: any, fill?: string}) => {
  const { height, width, style, fill } = props
  return (
    <svg
      height={!!height ? height : 100}
      width={!!width ? width : 100}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        style,
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path d="M0 22.261h512v100.174H0zM0 155.826h233.739v144.696H0zM0 333.913h233.739v155.826H0zM267.13 155.826H512v144.696H267.13zM267.13 333.913H512v155.826H267.13z" />
    </svg>
    )
}

export default Table