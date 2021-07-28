import React, { useState } from 'react'
 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const SendButton = () => {
  const [hover, setHover] = useState(false)

  return (
    <div style={{ height: '0px' }}>
      <div
        id='ce-send-message-button'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: 'pointer',
          backgroundColor: hover ? '#40a9ff' : '#1890ff',
          display: 'inline-block',
          padding: '3px 5px',
          borderRadius: '8px'
        }}
      >
        <ArrowUpwardIcon style={{ color: 'white' }} />
      </div>
    </div>
  )
}

export default SendButton
