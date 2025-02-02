import React, { useState, useRef, useEffect } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

const ChatLoader = (props) => {
  function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
      if (entry.isIntersecting) {
        props.onVisible()
      }
    })

    useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    }, [])

    return isIntersecting
  }

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div ref={ref}>
      <div
        className='chat-loader'
        style={{
          textAlign: 'center',
          backgroundColor: '#e2e2e2',
          margin: '4px',
          borderRadius: '4px'
        }}
      >
        <CircularProgress
          style={{ fontSize: '21px', padding: '24px', color: '#1976d2' }}
        />
      </div>
    </div>
  )
}

export default ChatLoader
