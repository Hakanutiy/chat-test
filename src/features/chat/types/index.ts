type MessageText = string;
type UserId = number;
type UserIds = UserId[];
type Timestamp = number;

interface Message {
  text: MessageText;
  userId: UserId;
  timestamp: Timestamp;
}

type Messages = Message[];

interface Chat {
  messages: Messages;
  userIds: UserIds;
}

type Chats = Chat[];

export type {
  Chats,
  Chat,
  Messages,
  UserIds,
  Message,
  Timestamp,
  MessageText,
  UserId,
};
