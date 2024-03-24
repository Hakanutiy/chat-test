<template>
  <div class="text-center flex flex-col items-center gap-12">
    <div class="text-3xl">Выберите пользователя</div>
    <div class="flex gap-4 overflow-x-auto max-w-screen-2xl">
      <div
        class="text-center flex flex-col items-center"
        v-for="user in userStore.users"
        :key="user.id"
      >
        <img
          class="rounded-full w-24 h-24 object-cover object-center"
          :src="user.avatar"
          alt="user"
        />
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div>
        <button
          @click="selectUser(user.id)"
          class="px-4 py-1 rounded-xl bg-sky-800 hover:bg-sky-500 text-lg font-bold text-white"
        >
          Выбрать
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUsers } from '@/stores/users';
import { useAuthStore } from '@/stores/userId';
import { useRouter } from 'vue-router';

const userStore = useUsers();
const authStore = useAuthStore();
const { push } = useRouter();

userStore.getUsers();

const selectUser = (userId) => {
  authStore.setUserID(userId);
  push('/chat');
};
</script>

<style scoped></style>
