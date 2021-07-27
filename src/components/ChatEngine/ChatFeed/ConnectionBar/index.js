import React, { useContext } from 'react'

import { ChatEngineContext } from '../../../Context'

import CircularProgress from '@material-ui/core/CircularProgress'

const ConnectionBar = () => {
  const { connecting } = useContext(ChatEngineContext)

  if (!connecting) return <div />

  return (
    <div
      style={{
        zIndex: '1',
        bottom: '66px',
        left: 'calc(50% - 78px)',
        position: 'absolute',
        fontSize: '15px',
        padding: '10px 22px',
        color: 'white',
        backgroundColor: '#fa8c16',
        borderRadius: '1.3em'
      }}
      id='ce-connecting-popup'
    >
      <CircularProgress
        style={{
          verticalAlign: 'bottom',
          fontSize: '15px',
          animationName: 'spin',
          width: '15px',
          color: '#ffffff',
          position: 'relative',
          height: 'fit-content',
          right: '5px',
          animationDuration: '5000ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}
      />{' '}
      Connecting
    </div>
  )
}

export default ConnectionBar
