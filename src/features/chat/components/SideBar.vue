<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUsers } from '@/stores/users';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();
const companion = useUsers();

const filteredUsers = computed(() =>
    companion.usersWithoutMe.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
);

const redirectDialog = (id) => {
  router.push('/chat/' + id);
  companion.setCompanion(id);
};

onMounted(() => {
  companion.getUsers();
});
</script>

<template>
  <div class="bg-gray-800 p-3 lg:max-w-72 sm:max-w-56 max-w-20 min-h-screen">
    <div class="my-4 ">
      <input
          v-model="searchQuery"
          placeholder="Search"
          class="bg-gray-600 px-3 py-0.5 text-lg rounded-xl lg:max-w-72 sm:max-w-56 max-w-16"
      />
    </div>

    <div class="flex flex-col gap-5 overflow-y-auto">
      <button
          v-for="user in filteredUsers"
          :key="user.id"
          @click="redirectDialog(user.id)"
          class="flex gap-4 items-center cursor-pointer hover:bg-gray-900 w-full"
      >
        <img class="rounded-full w-12 h-12 object-cover object-center" :src="user.avatar" alt="user" />
        <div class="sm:block hidden">{{ user.name }}</div>
      </button>
    </div>
  </div>
</template>