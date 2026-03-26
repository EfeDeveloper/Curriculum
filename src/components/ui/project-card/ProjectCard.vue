<script setup lang="ts">
import type { Project } from '@/types/curriculum'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
  project: Project
  index: number
}>()

const emit = defineEmits<{
  viewMore: []
}>()

const PROJECT_IMAGE_URL = 'https://images.pexels.com/photos/36444162/pexels-photo-36444162.jpeg'

// Asymmetric width layout: alternating col-span
// Pattern: 2 cols small, 3 cols large, 3 cols large, 2 cols small...
const colSpan = computed(() => {
  if ([1, 2].includes(props.index % 4)) {
    return 'md:col-span-3' // Large (3 columns - 60%)
  }
  return 'md:col-span-2' // Small (2 columns - 40%)
})
</script>

<template>
  <div :class="['project-container', colSpan]">
    <!-- Card with image -->
    <div class="group relative bg-slate-300 rounded-3xl h-72 overflow-hidden project-card">
      <!-- Image - centered visible -->
      <img :src="PROJECT_IMAGE_URL" alt="Project mockup" class="w-full h-full object-cover" />
    </div>

    <!-- Content below card -->
    <div class="space-y-3 pt-5">
      <!-- Title with Arrow Button -->
      <div class="flex items-center gap-3">
        <h3 class="font-bold text-foreground text-xl">
          {{ project.title }}
        </h3>

        <!-- Arrow Button - white bg, primary border and icon -->
        <Button
          @click="emit('viewMore')"
          variant="outline"
          size="icon"
          class="bg-white dark:bg-card border-2 border-primary text-primary rounded-full flex-shrink-0"
          aria-label="View project details"
        >
          <ArrowUpRight :size="18" stroke-width="2.5" />
        </Button>
      </div>

      <!-- Description -->
      <p class="text-foreground/75 text-sm leading-relaxed">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
