<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Badge } from '@/components/ui/badge'
import { Laptop } from 'lucide-vue-next'

const curriculum = useCurriculumStore()
const projects = curriculum.getProjects()

// Color gradients for project cards
const gradients: string[] = [
  'from-blue-500/20 to-purple-500/20',
  'from-green-500/20 to-emerald-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-pink-500/20 to-rose-500/20'
]

const getGradient = (index: number): string => {
  return gradients[index % gradients.length] as string
}
</script>

<template>
  <section class="py-16 md:py-24 lg:py-32 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Projects.
        </h2>
      </div>

      <!-- Projects Grid: 2x2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div
          v-for="(project, index) in projects.slice(0, 4)"
          :key="project.id"
          class="group"
        >
          <!-- Mockup Placeholder -->
          <div
            :class="`bg-gradient-to-br ${getGradient(index)} rounded-2xl aspect-video flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 shadow-lg`"
          >
            <Laptop class="w-24 h-24 text-primary/40" />
          </div>

          <!-- Project Info -->
          <div class="space-y-3">
            <h3 class="text-xl md:text-2xl font-bold text-foreground">
              {{ project.title }}
            </h3>
            <p class="text-sm md:text-base text-muted-foreground leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 pt-2">
              <Badge
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                variant="outline"
                class="text-xs dark:border-primary/40 dark:text-primary/70"
              >
                {{ tech }}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
