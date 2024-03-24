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
        className="feather feather-plus-circle">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AddIcon"
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