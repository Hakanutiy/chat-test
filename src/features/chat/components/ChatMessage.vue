<template>
  <div class="space-y-2 flex" :class="{'ml-auto': me.userId === userId}">
    <div class="bg-elements max-w-max p-4 rounded-3xl mb-4" >
      <div class="flex items-center">
        <div class="text-white text-sm">{{ props.message }}</div>
      </div>
      <div class="text-xs text-gray-300">{{ date   }}</div>
    </div>
  </div>

</template>

<script setup  lang="ts">
import {useAuthStore} from "@/stores/userId";

const me = useAuthStore()
interface Props {
  message: string;
  timestamp: number;
  userId: number
}

const props = withDefaults(defineProps<Props>(), {});
const date = new Date(props.timestamp).toLocaleDateString()
</script>