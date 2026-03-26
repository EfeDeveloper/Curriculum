<script setup lang="ts">
import type { Component } from 'vue'
import { useCurriculumStore } from '@/stores/curriculumStore'
import {
  Code,
  Server,
  Cloud,
  TestTube
} from 'lucide-vue-next'
import Section from '@/components/Section.vue'

const curriculum = useCurriculumStore()
const skills = curriculum.getSkills()

// Map skill categories to category icons
const categoryIconMap: Record<string, Component> = {
  'Frontend': Code,
  'Backend': Server,
  'DevOps & Tools': Cloud,
  'Testing & QA': TestTube
}

const getCategoryIcon = (category: string) => {
  return categoryIconMap[category] || Code
}
</script>

<template>
  <Section id="skills" title="Skills.">
    <!-- Skills Grid: 4 columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
      <div
        v-for="skillGroup in skills"
        :key="skillGroup.id"
        class="space-y-4"
      >
        <!-- Category Title with Category Icon -->
        <div class="flex items-center gap-2 mb-3">
          <component :is="getCategoryIcon(skillGroup.category)" class="w-5 h-5 text-primary" />
          <h3 class="text-lg md:text-xl font-bold text-foreground">
            {{ skillGroup.category }}
          </h3>
        </div>

        <!-- Skill List -->
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
  </Section>
</template>
