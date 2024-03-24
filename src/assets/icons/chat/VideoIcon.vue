<template>
  <div class="icon">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-video">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "VideoIcon"
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