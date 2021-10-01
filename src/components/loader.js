import React from 'react'
import { Box } from './style'

function Loading({ color }) {
  return (
    <Box color={color}>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  )
}

export default Loading
