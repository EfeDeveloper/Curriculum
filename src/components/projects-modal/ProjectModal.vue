<script setup lang="ts">
import { computed } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { CheckList } from '@/components/ui/check-list'
import { TechBadgeList } from '@/components/ui/tech-badge-list'
import type { Project } from '@/types/curriculum'

interface Props {
  project: Project | null
  open: boolean
}

interface Emits {
  (e: 'update:open', value: boolean): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const displayProject = computed(() => {
  return props.project
})
</script>

<template>
  <Dialog :open="open" @update:open="(val) => $emit('update:open', val)">
    <DialogContent class="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle class="text-2xl text-primary">{{ displayProject?.title }}</DialogTitle>
        <DialogDescription>{{ displayProject?.description }}</DialogDescription>
      </DialogHeader>

      <!-- Highlights Section -->
      <div class="space-y-4" v-if="displayProject">
        <div v-if="displayProject.highlights && displayProject.highlights.length > 0">
          <h3 class="font-semibold text-foreground mb-3">Key Features</h3>
          <CheckList :items="displayProject.highlights" />
        </div>

        <!-- Technologies -->
        <div v-if="displayProject.technologies && displayProject.technologies.length > 0">
          <h3 class="font-semibold text-foreground mb-3">Technologies</h3>
          <TechBadgeList :items="displayProject.technologies" />
        </div>

        <!-- Links -->
        <div v-if="displayProject.github || displayProject.link" class="flex gap-2 pt-2">
          <a
            v-if="displayProject.github"
            :href="displayProject.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Code
          </a>
          <a
            v-if="displayProject.link"
            :href="displayProject.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
