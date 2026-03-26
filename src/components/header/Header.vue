<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle.vue'
import { Home, FolderOpen, User } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const { personalInfo } = curriculum.state

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm dark:shadow-none">
    <div class="container mx-auto px-6 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo/Title Section -->
        <a href="#" class="flex items-center gap-2 min-w-0 group">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-md dark:shadow-lg">
            <span class="text-primary-foreground font-bold text-lg">{{ personalInfo.name.charAt(0) }}</span>
          </div>
          <div class="min-w-0 hidden sm:block">
            <h1 class="text-sm md:text-base font-bold text-foreground truncate">
              {{ personalInfo.name }}
            </h1>
          </div>
        </a>

        <!-- Navigation Menu -->
        <nav class="hidden md:flex items-center gap-6">
          <Button @click="scrollToSection('#hero')" variant="ghost" class="flex items-center gap-2 transition-colors duration-300 font-semibold text-sm border-b-2 border-transparent hover:border-primary pb-1 group">
            <Home :size="18" class="transition-transform duration-300 group-hover:scale-110" />
            <span>Home</span>
          </Button>
          <Button @click="scrollToSection('#projects')" variant="ghost" class="flex items-center gap-2 transition-colors duration-300 font-semibold text-sm border-b-2 border-transparent hover:border-primary pb-1 group">
            <FolderOpen :size="18" class="transition-transform duration-300 group-hover:scale-110" />
            <span>Projects</span>
          </Button>
          <Button @click="scrollToSection('#story')" variant="ghost" class="flex items-center gap-2 transition-colors duration-300 font-semibold text-sm border-b-2 border-transparent hover:border-primary pb-1 group">
            <User :size="18" class="transition-transform duration-300 group-hover:scale-110" />
            <span>About</span>
          </Button>
        </nav>

        <!-- Theme Toggle -->
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
