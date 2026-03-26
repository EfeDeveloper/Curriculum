<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section.vue'

const curriculum = useCurriculumStore()
const skills = curriculum.getSkills()

/**
 * Map skill levels to color variants
 */
function getLevelVariant(level: string): 'default' | 'secondary' | 'outline' {
  switch (level) {
    case 'expert':
      return 'default'
    case 'advanced':
      return 'secondary'
    default:
      return 'outline'
  }
}


/**
 * Get display label for skill level
 */
function getLevelLabel(level: string): string {
  return level.charAt(0).toUpperCase() + level.slice(1)
}
</script>

<template>
  <Section
    id="skills"
    title="Technical Skills"
    subtitle="Languages, frameworks, and tools"
  >
    <div class="space-y-6">
      <div
        v-for="skillGroup in skills"
        :key="skillGroup.id"
        class="space-y-2"
      >
        <h3 class="text-base font-semibold text-primary dark:text-primary">
          {{ skillGroup.category }}
        </h3>
        <div class="flex flex-wrap gap-1.5">
          <Badge
            v-for="skill in skillGroup.items"
            :key="skill.name"
            :variant="getLevelVariant(skill.level)"
            :class="{
              'bg-primary text-primary-foreground dark:bg-primary/20 dark:text-primary hover:border-primary/70 transition-colors duration-200': skill.level === 'expert',
              'bg-secondary/10 text-foreground dark:bg-secondary/10 dark:text-foreground hover:border-primary/70 transition-colors duration-200': skill.level !== 'expert'
            }"
            class="text-xs px-2.5 py-1"
            :title="`${skill.name} - ${getLevelLabel(skill.level)}`"
          >
            {{ skill.name }}
            <span class="ml-1 text-xs opacity-70">
              • {{ getLevelLabel(skill.level) }}
            </span>
          </Badge>
        </div>
      </div>
    </div>
  </Section>
</template>
