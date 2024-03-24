<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter()

onMounted(() => {
  router.push('/')
})
</script>

<template>
<RouterView>

</RouterView>
</template>

<style>

</style>
