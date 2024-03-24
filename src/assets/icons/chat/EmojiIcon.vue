<template>
  <div class="icon">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-smile">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "EmojiIcon"
}
</script>

<style scoped>
.icon {
  color: #c1c7cd;
  width: 20px;
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #9fa7ac;
  }
}
</style>