import { Alert } from '@mui/material'
import React from 'react'

const Message = (color, children) => {
  return <Alert color={color}>{children}</Alert>
}
Message.defaultProps = {
  color: 'secondary',
}

export default Message
