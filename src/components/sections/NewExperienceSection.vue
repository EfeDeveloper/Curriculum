<script setup lang="ts">
import { useCurriculumStore } from '@/stores/curriculumStore'
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
        <button
          v-for="(job, idx) in experience"
          :key="job.id"
          @click="selectedExperience = idx"
          class="w-full text-left p-3 rounded-lg transition-all duration-300"
          :class="
            selectedExperience === idx
              ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary pl-2'
              : 'text-foreground hover:text-primary hover:bg-primary/5'
          "
        >
          {{ job.company }}
        </button>
      </div>

      <!-- Right Column: Experience Details -->
      <div v-if="current" class="md:col-span-2">
        <transition name="fade" mode="out-in">
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
