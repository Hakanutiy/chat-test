<template>
  <div class="bg-dialog sm:h-screen min-h-screen w-full flex flex-col">
    <div class="flex bg-elements p-4 gap-4 items-center text-white">
      <img
        class="rounded-full w-12 h-12 object-cover"
        :src="user.companion.avatar"
        :alt="user.companion.name"
      />
      <div class="sm:text-xl text-lg lg:text-2xl">{{ user?.companion.name }}</div>
    </div>

    <div class="mt-auto flex flex-col gap-6 sm:px-16 px-4 overflow-y-auto">
      <template v-for="(message, index) in messages" >
        <ChatMessage
          :message="message.text"
          :timestamp="message.timestamp"
          :interlocutorId="interlocutorId"
          :userId="message.userId"
          />

      </template>

      <div class="flex gap-4 py-4">
        <input
          @keydown.enter="onSubmit(messageText)"
          v-model="messageText"
          class="w-full bg-elements text-white placeholder:text-white py-2 px-7 rounded-full"
          placeholder="Введите сообщение..."
        />
        <button
          @click="onSubmit(messageText)"
          class="bg-elements hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SendIcon from '../../../../public/icons/SendIcon.vue';
import { useUsers } from '@/stores/users';
import { useChatsStore } from '../store';
import { Message, Messages } from '../types';
import { computed, ref } from 'vue';
import ChatMessage from "@/features/chat/components/ChatMessage.vue";
import {useAuthStore} from "@/stores/userId";

interface Props {
  interlocutorId: number;
  messages: Messages;

}

const chatsStore = useChatsStore();
const user = useUsers();
console.log(user)
const {userId} = useAuthStore()

const props = withDefaults(defineProps<Props>(), {});

const messageText = ref('');

const interlocutorId = computed(() => props.interlocutorId);

const emit = defineEmits<{
  (e: 'send-message', message: Message);
}>();

const messages = computed(() => {
  return chatsStore.currentChat?.messages;
});

const clearMessageText = () => {
  messageText.value = '';
};

const onSubmit = () => {
  const _message = messageText.value.trim();
  if (!_message) return;
  emit('send-message', {
    timestamp: Date.now(),
    text: messageText.value,
    userId: userId,
  });
  clearMessageText();
};
</script>

<style scoped></style>
