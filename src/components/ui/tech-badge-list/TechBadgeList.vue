<script setup lang="ts">
import TechBadge from '../tech-badge/TechBadge.vue'

interface Props {
  items: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-wrap gap-2 pt-2">
    <TechBadge v-for="tech in items" :key="tech" :text="tech" />
  </div>
</template>
