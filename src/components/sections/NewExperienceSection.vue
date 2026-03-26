<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { ref } from 'vue'
import type { Experience } from '@/types/curriculum'

const curriculum = useCurriculumStore()
const experience = curriculum.getExperience()
const expandedId = ref<string | null>(null)

function toggleExpand(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section class="py-16 md:py-24 lg:py-32 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Experience.
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative space-y-6 md:space-y-8">
        <!-- Timeline Bar (left side) -->
        <div class="absolute left-0 top-0 w-1 h-full bg-primary rounded-full" />

        <!-- Experience Items -->
        <div
          v-for="job in experience"
          :key="job.id"
          class="relative pl-8 md:pl-10 cursor-pointer group"
          @click="toggleExpand(job.id)"
        >
          <!-- Timeline Dot -->
          <div class="absolute -left-2.5 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

          <!-- Content -->
          <div
            class="space-y-2 p-4 md:p-6 rounded-lg transition-all duration-200"
            :class="expandedId === job.id ? 'bg-muted/50' : 'hover:bg-muted/30'"
          >
            <!-- Header -->
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-lg md:text-xl font-bold text-foreground">
                  {{ job.position }}
                </h3>
                <p class="text-sm text-muted-foreground mt-1">
                  {{ job.company }}
                </p>
              </div>
              <p class="text-xs md:text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">
                {{ job.startDate }} - {{ job.endDate || 'Present' }}
              </p>
            </div>

            <!-- Description (Expandable) -->
            <transition name="expand">
              <div v-if="expandedId === job.id" class="space-y-3 pt-2 border-t border-border">
                <ul class="space-y-2">
                  <li
                    v-for="(desc, idx) in job.description"
                    :key="idx"
                    class="flex gap-3 text-sm text-foreground"
                  >
                    <span class="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>{{ desc }}</span>
                  </li>
                </ul>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tech in job.technologies"
                    :key="tech"
                    class="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </transition>

            <!-- Expand Indicator -->
            <div v-if="!expandedId || expandedId !== job.id" class="text-xs text-muted-foreground pt-1">
              Click to expand
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
