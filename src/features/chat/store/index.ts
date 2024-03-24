import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores/userId';
import { chatsStorage } from '@/features/chat/lib/chats-storage';
import { Chats, Chat, Message, UserId } from '../types';

const doesChatIncludeUser = (interlocutorId: number) => (chat: Chat) => {
  return chat.userIds.includes(interlocutorId);
};

interface ChatsState {
  chats: Chats;
  interlocutorId: number;
}

export const useChatsStore = defineStore('chats', {
  state: (): ChatsState => ({
    chats: [],
    interlocutorId: null,
  }),
  getters: {
    currentChat: (state) => {
      return state.chats.find(doesChatIncludeUser(state.interlocutorId));
    },
    currentChatIds: (state) => {
      return state.chats.findIndex(doesChatIncludeUser(state.interlocutorId));
    },
  },
  actions: {
    setInterlocutorId(interlocutorId: string | number) {
      const parsedInterlocutorId = Number(interlocutorId);
      if (Number.isNaN(parsedInterlocutorId)) {
        throw Error('interlocutorId must be a number.');
      }
      this.interlocutorId = parsedInterlocutorId;
    },
    createChatWithInterlocutor() {
      const { userId } = useAuthStore();
      return this.chats.push({
        userIds: [userId, this.interlocutorId],
        messages: [],
      });
    },
    appendMessageToCurrentChat(message: Message) {
      const _chat = this.chats[this.currentChatIds];
      this.chats[this.currentChatIds] = {
        ..._chat,
        messages: [...(_chat?.messages || []), message],
      };
    },
    isParticipantOfCurrentChat(userId) {
      return this.currentChat.userIds.includes(userId);
    },
    sendMessageToInterlocutor(message: Message) {
      const hasChatWithInterlocutor = !!this.currentChat;
      const messageUserId = message.userId;
      if (!hasChatWithInterlocutor) {
        this.createChatWithInterlocutor();
      }
      if (!this.isParticipantOfCurrentChat(messageUserId)) {
        throw new Error(
          `User ${messageUserId} is not a participant of the current chat.`,
        );
      }
      this.appendMessageToCurrentChat(message);
      chatsStorage.setChats(this.chats);
    },
    setChats(chats: Chats) {
      this.chats = chats;
    },
    isolateUserChats({ chats, userId }: { chats: Chats; userId: UserId }) {
      if (!chats) throw new Error("'chats' is required");
      return chats.filter((chat) => chat.userIds.includes(userId));
    },
    getChats(userId: number) {
      const existingChats = chatsStorage.getChats() || [];
      const chats = this.isolateUserChats({ chats: existingChats, userId });
      this.setChats(chats);
    },
  },
});
