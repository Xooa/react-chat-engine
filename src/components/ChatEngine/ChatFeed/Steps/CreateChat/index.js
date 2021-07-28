import React from 'react'

const CreateChat = () => {
  return (
    <div
      id='ce-ice-breaker'
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: 'calc(43% - 112px)'
      }}
    >
      <div
        id='ce-ice-breaker-text'
        style={{ color: '#afafaf', fontWeight: '600', marginBottom: '6px' }}
      >
        Welcome!
      </div>
      <div id='ce-ice-breaker-text' style={{ color: '#afafaf' }}>
        You have no chats
      </div>
    </div>
  )
}

export default CreateChat
