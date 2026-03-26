<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import ThemeToggle from './ThemeToggle.vue'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm dark:shadow-none">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo/Title Section -->
        <div class="flex items-center gap-2 min-w-0">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-all duration-300 shadow-md dark:shadow-lg">
            <span class="text-primary-foreground font-bold text-lg">{{ personalInfo.name.charAt(0) }}</span>
          </div>
          <div class="min-w-0">
            <h1 class="text-lg md:text-xl font-bold text-primary truncate">
              {{ personalInfo.name }}
            </h1>
            <p class="text-xs md:text-sm text-primary font-medium truncate">
              {{ personalInfo.title }}
            </p>
          </div>
        </div>

        <!-- Theme Toggle -->
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
