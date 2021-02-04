import React from 'react'
import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
	<form className="form">
		<input
			className="input"
			placeholder="Type a message..."
			type="text"
			value={message}
			onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
			onChange={(e) => setMessage(e.target.value)}
		/>
		<button className="sendButton" onClick={(e) => sendMessage(e)} >Send</button>
	</form>
)

export default Input