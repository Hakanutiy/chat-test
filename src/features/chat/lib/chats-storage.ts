const _key = 'chats';

export const chatsStorage = {
  _key,
  getChats: () => JSON.parse(localStorage.getItem(_key)),
  setChats: (chats) => localStorage.setItem(_key, JSON.stringify(chats)),
};
