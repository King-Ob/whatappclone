import React from 'react';
import { Message } from "../../types";
import { View ,Text } from 'react-native';
import moment from 'moment';
import style from './style.ts';
export type ChatMessageProps ={
    message : Message;
}


const ChatMessage=( props: ChatMessageProps ) => {
    const { message } = props;

    const isMyMessage =() =>{
        return message.user.id ==='u1';

    }
    return (
		<View style={style.container}>
			<View style={[
                style.MessageBox,{ //object 
                backgroundColor: isMyMessage()? '#DCF8C5' : 'white',
                marginLeft: isMyMessage()? 50 : 0,
                marginRight: isMyMessage() ?0 :50,

                }
                ]}>
				{!isMyMessage() &&<Text style ={style.name}>{message.user.name}</Text>}
				<Text style={style.message}>{message.content}</Text>
				<Text style={style.time}> {moment(message.createdAt).fromNow()}</Text>
			</View>
		</View>
	);
}

export default ChatMessage