import React, { useState, useContext } from 'react'

import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import { ChatEngineContext } from '../../../Context'

import { newChat, Button, TextInput } from '@xooa/react-chat-engine'

const NewChatForm = (props) => {
  const { conn } = useContext(ChatEngineContext)
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(false)

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (conn && value.trim().length > 0) {
      newChat(conn, { title: value }, () => setSelected(false))
    }

    setValue('')
  }

  return (
    <div>
      {props.onClose && (
        <div style={{ height: '0px' }}>
          <CloseOutlinedIcon
            style={styles.closeIcon}
            onClick={() => props.onClose()}
          />
        </div>
      )}

      <div
        className='ce-chat-form-container'
        style={{
          ...styles.newChatContainer,
          ...{ marginLeft: props.onClose ? '40px' : '0px' }
        }}
      >
        {selected ? (
          <form onSubmit={handleSubmit.bind(this)}>
            <TextInput
              autoFocus
              label='Chat Title'
              value={value}
              id='ce-new-chat-title-field'
              onBlur={() => setSelected(false)}
              style={{ width: '100%' }}
              handleChange={(e) => handleChange(e)}
            />
          </form>
        ) : (
          <div>
            <div style={{ height: '0px' }}>
              <div
                style={{
                  fontWeight: '600',
                  fontSize: '24px',
                  position: 'relative',
                  top: '4px',
                  width: 'calc(100% - 48px)'
                }}
              >
                My Chats
              </div>
            </div>

            <div style={{ width: '100%', textAlign: 'right' }}>
              <Button
                icon='plus'
                id='new-chat-plus-button'
                style={styles.add_btn}
                onClick={() => setSelected(true)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewChatForm

const styles = {
  closeIcon: {
    position: 'relative',
    top: '23px',
    left: '18px',
    fontSize: '20px'
  },
  newChatContainer: {
    padding: '16px 14px',
    backgroundColor: 'white'
  },
  add_btn: {
    color: 'white',
    border: 'none',
    outline: 'none',
    height: '36px',
    fontSize: '15px',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '10px',
    backgroundColor: 'rgb(24, 144, 255)'
  }
}
