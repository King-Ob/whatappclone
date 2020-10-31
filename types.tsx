export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
	Camera: undefined;
	Chats: undefined;
	Status: undefined;
	Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id:string;
  name: string;
  imageUri:string;
};

export type Message = {
  id: string,
  content:string,
  CreatedAt:string,
  user:User,
}
export type ChatRoom = {
  id:String;
  users:User[];//array of users 
  lastMessage: Message;
}
