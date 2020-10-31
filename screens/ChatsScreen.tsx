import * as React from 'react';
import { FlatList,StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import  ChatListItem  from '../components/ChatListItem/Index';
import ChatRooms from '../data/ChatRooms.ts'
import NewMessageButton from '../components/NewMessageButton'

export default function ChatsScreen() {
	return (
		<View style={styles.container}>

		<FlatList style={{width :'100%'}}
		data={ChatRooms}
		renderItem={({item}) => <ChatListItem chatRoom ={item}/>}
        
		//key of each item so i can re-render 
		keyExtractor={(item) => item.id}
		/>
		<NewMessageButton/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

});
