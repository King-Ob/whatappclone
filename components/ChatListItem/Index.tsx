import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import{ ChatRoom } from '../../types';
import moment from 'moment';
import style from './style.ts'
///import {useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';


export type ChatListItemsProps ={
    chatRoom: ChatRoom
	
}


const ChatListItem = (props: ChatListItemsProps) => {
	const { chatRoom } = props;
	//hook navigation
	const navigation = useNavigation();
	const user = chatRoom.users[1];

	const onClick = () => {
		//console.warn(`Clicked on ${user.name}`);
		navigation.navigate('ChatRoom', {
			 id:chatRoom.id,
			 name: user.name,
			 })
	};

	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<View style={style.container}>
				<View style={style.leftContainer}>
					<Image source={{ uri: user.imageUri }} style={style.avatar} />
					<View style={style.midContainer}>
						<Text style={style.username}>{user.name}</Text>
						<Text style={style.lastMessage}>{chatRoom.lastMessage.content}</Text>
					</View>
				</View>
				<Text style={style.time}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};


export default ChatListItem;