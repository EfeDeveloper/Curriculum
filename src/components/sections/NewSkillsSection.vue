<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'

const curriculum = useCurriculumStore()
const skills = curriculum.getSkills()
</script>

<template>
  <section class="py-16 md:py-24 lg:py-32 border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Skills.
        </h2>
      </div>

      <!-- Skills Grid: 4 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div
          v-for="skillGroup in skills"
          :key="skillGroup.id"
          class="space-y-4"
        >
          <!-- Category Title -->
          <h3 class="text-lg md:text-xl font-bold text-foreground">
            {{ skillGroup.category }}
          </h3>

          <!-- Skill List (simple text, no badges) -->
          <ul class="space-y-2">
            <li
              v-for="skill in skillGroup.items"
              :key="skill.name"
              class="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {{ skill.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
