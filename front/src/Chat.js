import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import "./Chat.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className="chat">
            

            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                <IconButton>
                        <DonutLargeIcon />
                    </IconButton> 
                    <IconButton>
                        <ChatIcon />
                    </IconButton> 
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton> 
                </div>

            </div>

            <div className="chat_body">
                
                <p className="chat_message">
                    <span className="chat_name">sonny</span>
                    This is a message

                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_reciever">
                    <span className="chat_name">sonny</span>
                    This is a message

                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message">
                    <span className="chat_name">sonny</span>
                    This is a message

                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                

            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>

                <form>
                    <input placeholder="Write a message...." type="text" />
                    <button type="submit">Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
