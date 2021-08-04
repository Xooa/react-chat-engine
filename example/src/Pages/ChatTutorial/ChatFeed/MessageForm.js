import React from 'react';

 
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

import { sendMessage, isTyping } from '@xooa/react-chat-engine'

export default class MessageForm extends React.Component {
    state = { value: '' }
  
    handleChange(event) {
        this.setState({ value: event.target.value });
        isTyping(this.props, this.props.chatId)
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const text = this.state.value.trim()
        if (text.length > 0 ) {
            sendMessage(
                this.props.creds, 
                this.props.chatId, 
                { text }
            )
        }
        this.setState({ value: '' })
    }

    handleUpload(event) {
        sendMessage(
            this.props.creds, 
            this.props.chatId, 
            { files: event.target.files, text: '' }
        )
    }
  
    render() {
        return (
            <form className='message-form' onSubmit={this.handleSubmit.bind(this)} >
                <input 
                    className='message-input'
                    placeholder='Send a message...' 
                    value={this.state.value} 
                    onChange={this.handleChange.bind(this)} 
                    onSubmit={this.handleSubmit.bind(this)} 
                />

                <label htmlFor="upload-button">
                    <span className='image-button'>
                        <ImageOutlinedIcon className='picture-icon' />
                    </span>
                </label>

                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={this.handleUpload.bind(this)}
                />
                
                <button type="submit" className='send-button'>
                    <SendOutlinedIcon className='send-icon' />
                </button>
            </form>
        )
    }
}
