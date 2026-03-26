<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

interface Props {
  items: string[]
}

defineProps<Props>()
</script>

<template>
  <ul class="space-y-3">
    <li v-for="(item, idx) in items" :key="idx" class="flex gap-3">
      <CheckCircle2 class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <span class="text-sm">{{ item }}</span>
    </li>
  </ul>
</template>
