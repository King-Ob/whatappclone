import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import moment from 'moment';
import style from './style.ts';
///import {useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';

export type ChatListItemsProps = {
	user: User;
};

const ContactListItem = (props: ContactListItemsProps) => {
	const { user } = props;
	//hook navigation
	const navigation = useNavigation();
	//const user = chatRoom.users[1];

	const onClick = () => {
		//console.warn(`Clicked on ${user.name}`);
		// navigation.navigate('ChatRoom', {
		// 	id: chatRoom.id,
		// 	name: user.name,
		// });
	};

	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<View style={style.container}>
				<View style={style.leftContainer}>
					<Image source={{ uri: user.imageUri }} style={style.avatar} />
					<View style={style.midContainer}>
						<Text style={style.username}>{user.name}</Text>
						<Text style={style.status}>{user.status}</Text>
					</View>
				</View>
				{/* <Text style={style.time}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text> */}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ContactListItem;
