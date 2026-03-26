<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
import { Button } from '@/components/ui/button'
import { ref, computed } from 'vue'
import Section from '@/components/Section.vue'
import { CheckList } from '@/components/ui/check-list'
import { TechBadgeList } from '@/components/ui/tech-badge-list'

const curriculum = useCurriculumStore()
const experience = curriculum.getExperience()
const selectedExperience = ref(0)

const current = computed(() => experience[selectedExperience.value])
</script>

<template>
  <Section id="experience" title="Experience.">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <!-- Left Column: Company List -->
      <div class="space-y-2">
        <Button
          v-for="(job, idx) in experience"
          :key="job.id"
          @click="selectedExperience = idx"
          variant="ghost"
          class="w-full text-left justify-start transition-all duration-300"
          :class="{
            'bg-primary/10 text-primary font-bold border-l-4 border-primary pl-2': selectedExperience === idx,
            'text-foreground hover:text-primary': selectedExperience !== idx
          }"
        >
          {{ job.company }}
        </Button>
      </div>

      <!-- Right Column: Experience Details -->
      <div v-if="current" class="md:col-span-2">
        <transition enter-active-class="transition-opacity duration-300" leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-to-class="opacity-0" mode="out-in">
          <div :key="selectedExperience" class="space-y-6">
            <!-- Header -->
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-foreground">
                {{ current.position }} @ {{ current.company }}
              </h3>
              <p class="text-sm text-muted-foreground mt-2">
                {{ current.startDate }} - {{ current.endDate || 'Present' }}
              </p>
            </div>

            <!-- Description List -->
            <CheckList :items="current.description" />

            <!-- Technologies -->
            <TechBadgeList :items="current.technologies" />
          </div>
        </transition>
      </div>
    </div>
  </Section>
</template>
