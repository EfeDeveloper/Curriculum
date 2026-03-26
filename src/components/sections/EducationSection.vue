<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import Section from '@/components/Section.vue'
import { GraduationCap, ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const curriculum = useCurriculumStore()
const education = curriculum.getEducation()
const expandedIds = ref<Set<string>>(new Set())

const toggleExpand = (id: string) => {
  if (expandedIds.value.has(id)) {
    expandedIds.value.delete(id)
  } else {
    expandedIds.value.add(id)
  }
}
</script>

<template>
  <Section
    id="education"
    title="Education."
    subtitle="Continuous learning and professional development"
  >
    <!-- Timeline Container -->
    <div class="relative">
      <!-- Vertical Line - Dashed -->
      <div class="absolute left-3.5 top-0 bottom-0 border-l-2 border-dashed border-primary opacity-50"></div>

      <!-- Timeline Items -->
      <div class="space-y-6">
        <div
          v-for="edu in education"
          :key="edu.id"
          class="relative pl-20 transition-all duration-500"
        >
          <!-- Timeline Circle with Icon -->
          <div class="absolute -left-1.5 top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background dark:border-background z-20">
            <GraduationCap class="w-5 h-5 text-white" />
          </div>

          <!-- Expandable Card -->
          <div class="w-full bg-primary/10 dark:bg-primary/10 rounded-lg p-5 hover:bg-primary/15 dark:hover:bg-primary/15 transition-colors duration-200">
            <!-- Header: Title and Date -->
            <div class="flex items-center justify-between gap-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-base md:text-lg font-bold text-foreground dark:text-foreground">
                  {{ edu.degree }}
                </h3>
              </div>
              <span class="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground shrink-0">
                {{ edu.graduationDate }}
              </span>
            </div>

            <!-- Expanded Details - inside the same card -->
            <transition
              enter-active-class="transition-all duration-500 ease-out"
              leave-active-class="transition-all duration-500 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[500px]"
              leave-from-class="opacity-100 max-h-[500px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="expandedIds.has(edu.id)" class="mt-3 pt-3 border-t border-primary/20 dark:border-primary/20 overflow-hidden">
                <!-- Institution -->
                <p class="text-sm text-primary font-semibold">
                  {{ edu.institution }}
                </p>

                <!-- Field and GPA -->
                <p class="text-sm text-muted-foreground dark:text-muted-foreground mt-2">
                  {{ edu.field }}
                  <span v-if="edu.gpa" class="ml-2">• GPA: {{ edu.gpa }}</span>
                </p>

                <!-- Highlights -->
                <ul v-if="edu.highlights" class="space-y-2 mt-3">
                  <li
                    v-for="(highlight, idx) in edu.highlights"
                    :key="idx"
                    class="flex gap-2 text-sm text-foreground dark:text-foreground"
                  >
                    <span class="text-primary shrink-0">✓</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </transition>

            <!-- View More / View Less Button -->
            <Button
              @click="toggleExpand(edu.id)"
              variant="link"
              class="mt-3 text-sm px-0 h-auto flex items-center gap-1 font-semibold"
            >
              {{ expandedIds.has(edu.id) ? 'View Less' : 'View More' }}
              <ChevronDown
                :size="16"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': expandedIds.has(edu.id) }"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
