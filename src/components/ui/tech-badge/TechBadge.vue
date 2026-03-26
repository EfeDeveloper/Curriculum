<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <span class="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-medium">
    {{ text }}
  </span>
</template>
