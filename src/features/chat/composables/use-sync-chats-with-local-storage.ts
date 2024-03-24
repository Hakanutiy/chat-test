import { useChatsStore } from '../store';
import { useAuthStore } from '@/stores/userId';
import { Chats } from '../types';
import { onMounted, onUnmounted } from 'vue';

export const useSyncChatsWithLocalStorage = () => {
  const chatStore = useChatsStore();

  const authStore = useAuthStore();

  const onChatsStorageChange = (storageEvent: StorageEvent) => {
    if (storageEvent.key !== 'chats') return;
    const chats = chatStore.isolateUserChats({
      chats: JSON.parse(storageEvent.newValue) as Chats,
      userId: authStore.userId,
    });
    chatStore.setChats(chats);
  };

  onMounted(() => {
    window.addEventListener('storage', onChatsStorageChange);
    chatStore.getChats(authStore.userId);
  });

  onUnmounted(() => {
    window.removeEventListener('storage', onChatsStorageChange);
  });
};
