<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <Header />
      <Dialog
        v-if="interlocutorId"
        :messages="chatStore.currentChat?.messages"
        @send-message="chatStore.sendMessageToInterlocutor"
        :interlocutor-id="+interlocutorId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/features/chat/components/SideBar.vue';
import Dialog from '@/features/chat/components/Dialog.vue';
import Header from '@/features/chat/components/Header.vue';
import { useRouteParam } from '@/composables/route-param';
import { watch } from 'vue';
import { useChatsStore } from '../store';
import { useSyncChatsWithLocalStorage } from '../composables/use-sync-chats-with-local-storage';

useSyncChatsWithLocalStorage();

const chatStore = useChatsStore();

const interlocutorId = useRouteParam<string>('interlocutorId');

watch(interlocutorId, chatStore.setInterlocutorId);
</script>

<style scoped></style>
